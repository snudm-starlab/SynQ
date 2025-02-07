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

lr_policy.py
    - codes for learning rate policy

This code is mainly based on
    - ZeroQ: https://github.com/amirgholami/ZeroQ
    - HAST: https://github.com/lihuantong/HAST
"""
import math

__all__ = ["LRPolicy"]


class LRPolicy:
    """
    learning rate policy
    """

    def __init__(self, lr, n_epochs, lr_policy="multi_step"):
        self.lr_policy = lr_policy
        self.params_dict = {}
        self.n_epochs = n_epochs
        self.base_lr = lr
        self.lr = lr

    def set_params(self, params_dict=None):
        """
            set parameters of lr policy
            Args:
                params_dict: parameters of lr policy
        """
        if self.lr_policy == "multi_step":
            self.params_dict['decay_rate'] = params_dict['decay_rate']
            self.params_dict['step'] = sorted(params_dict['step'])
            if max(self.params_dict['step']) <= 1:
                new_step_list = []
                for ratio in self.params_dict['step']:
                    new_step_list.append(int(self.n_epochs * ratio))
                self.params_dict['step'] = new_step_list

        elif self.lr_policy == "step":
            self.params_dict['end_lr'] = params_dict['end_lr']

            self.params_dict['step'] = params_dict['step']
            max_iter = math.floor((self.n_epochs - 1.0) /
                                  self.params_dict['step'])

            if self.params_dict['end_lr'] == -1:
                self.params_dict['gamma'] = params_dict['decay_rate']
            else:
                self.params_dict['gamma'] = math.pow(
                    self.params_dict['end_lr'] / self.base_lr, 1. / max_iter)

        elif self.lr_policy == "linear":
            self.params_dict['end_lr'] = params_dict['end_lr']
            self.params_dict['step'] = params_dict['step']

        elif self.lr_policy == "exp":
            self.params_dict['end_lr'] = params_dict['end_lr']
            self.params_dict['gamma'] = math.pow(
                self.params_dict['end_lr'] / self.base_lr, 1. / (self.n_epochs - 1))

        elif self.lr_policy == "inv":
            self.params_dict['end_lr'] = params_dict['end_lr']
            self.params_dict['power'] = params_dict['power']
            self.params_dict['gamma'] = (math.pow(
                self.base_lr / self.params_dict['end_lr'],
                1. / self.params_dict['power']) - 1.) / (self.n_epochs - 1.)

        elif self.lr_policy == "const":
            self.params_dict = None

        else:
            assert False, "invalid lr_policy" + self.lr_policy

    def get_lr(self, epoch):
        """
            get current learning rate
            Args:
                epoch: current epoch
        """
        if self.lr_policy == "multi_step":
            gamma = 0
            for step in self.params_dict['step']:
                if epoch + 1.0 > step:
                    gamma += 1
            lr = self.base_lr * math.pow(self.params_dict['decay_rate'], gamma)

        elif self.lr_policy == "step":
            lr = self.base_lr * \
                math.pow(self.params_dict['gamma'], math.floor(
                    epoch * 1.0 / self.params_dict['step']))

        elif self.lr_policy == "linear":
            k = (self.params_dict['end_lr'] - self.base_lr) / \
                math.ceil(self.n_epochs / self.params_dict['step'])

            lr = k * math.ceil((epoch + 1) /
                               self.params_dict['step']) + self.base_lr

        elif self.lr_policy == "inv":
            lr = self.base_lr * \
                math.pow(
                    1 + self.params_dict['gamma'] * epoch, -self.params_dict['power'])

        elif self.lr_policy == "exp":
            lr = self.base_lr * math.pow(self.params_dict['gamma'], epoch)

        elif self.lr_policy == "const":
            lr = self.base_lr

        else:
            assert False, "invalid lr_policy: " + self.lr_policy
        self.lr = lr
        return lr
