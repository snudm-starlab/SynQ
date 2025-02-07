"""
SynQ: Accurate Zero-shot Quantization by Synthesis-aware Fine-tuning (ICLR 2025)

Authors:
- Minjun Kim (minjun.kim@snu.ac.kr), Seoul National University
- Jongjin Kim (j2kim99@snu.ac.kr), Seoul National University
- U Kang (ukang@snu.ac.kr), Seoul National University

Version : 1.1

Date : Feb. 7th, 2025

Main Contact: Minjun Kim

This software is free of charge under research purposes.

For other purposes (e.g. commercial), please contact the authors.

compute.py
    - codes for computing the top1/top5 error and accuracy

This code is mainly based on
    - ZeroQ: https://github.com/amirgholami/ZeroQ
    - HAST: https://github.com/lihuantong/HAST
"""
import torch

__all__ = ["compute_tencrop", "compute_singlecrop", "AverageMeter"]


def compute_tencrop(outputs, labels):
    """
        Compute the top1 and top5 error
        Args:
            outputs: the output of the model
            labels: the ground truth label
        Returns:
            top1_error: the top1 error
            top5_error: the top5 error
    """
    output_size = outputs.size()
    outputs = outputs.view(output_size[0] / 10, 10, output_size[1])
    outputs = outputs.sum(1).squeeze(1)
    # compute top1
    _, pred = outputs.topk(1, 1, True, True)
    pred = pred.t()
    top1_count = pred.eq(labels.data.view(
        1, -1).expand_as(pred)).view(-1).float().sum(0)
    top1_error = 100.0 - 100.0 * top1_count / labels.size(0)
    top1_error = float(top1_error.cpu().numpy())

    # compute top5
    _, pred = outputs.topk(5, 1, True, True)
    pred = pred.t()
    top5_count = pred.eq(labels.data.view(
        1, -1).expand_as(pred)).view(-1).float().sum(0)
    top5_error = 100.0 - 100.0 * top5_count / labels.size(0)
    top5_error = float(top5_error.cpu().numpy())
    return top1_error, 0, top5_error


def compute_singlecrop(outputs, labels, loss, top5_flag=False):
    """
        Compute the top1 and top5 error
        Args:
            outputs: the output of the model
            labels: the ground truth label
            loss: the loss of the model
            top5_flag: whether to compute top5 error
        Returns:
            top1_error: the top1 error
            top1_loss: the loss of the model
            top5_error: the top5 error
        """
    with torch.no_grad():
        if isinstance(outputs, list):
            top1_loss = []
            top1_error = []
            top5_error = []
            for i, out_i in enumerate(outputs):
                accuracies = accuracy(out_i, labels, topk=(1, 5))
                top1_error.append(100 - accuracies[0])
                top5_error.append(100 - accuracies[1])
                top1_loss.append(loss[i].item())
        else:
            accuracies = accuracy(outputs, labels, topk=(1, 5))
            top1_error = 100 - accuracies[0]
            top5_error = 100 - accuracies[1]
            top1_loss = loss.item()

        if top5_flag:
            return top1_error, top1_loss, top5_error

        return top1_error, top1_loss

def accuracy(output, target, topk=(1,)):
    """
        Computes the Accuracy@k for the specified values of k
        Args:
            output: the output of the model
            target: the ground truth label
            topk: the top k
        Returns:
            res: the accuracuy of the top k
    """
    with torch.no_grad():
        maxk = max(topk)
        batch_size = target.size(0)

        _, pred = output.topk(maxk, 1, True, True)
        pred = pred.t()

        correct = pred.eq(target.view(1, -1).expand_as(pred))

        res = []
        for k in topk:
            correct_k = correct[:k].contiguous().view(-1).float().sum(0, keepdim=True)
            res.append(correct_k.mul_(100.0 / batch_size).item())
        return res

class AverageMeter:
    """Computes and stores the average and current value"""

    def __init__(self):
        """
            init all parameters
        """
        self.val = None
        self.avg = None
        self.sum = None
        self.count = None

        self.reset()

    def reset(self):
        """
        reset all parameters
        """
        self.val = 0
        self.avg = 0
        self.sum = 0
        self.count = 0

    def update(self, val, n=1):
        """
        update parameters
        """
        self.val = val
        self.sum += val * n
        self.count += n
        self.avg = self.sum / self.count
