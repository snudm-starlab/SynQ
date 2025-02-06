.. SynQ documentation master file, created by
   sphinx-quickstart on Thu Sep  5 17:02:26 2024.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

SynQ documentation
==================

Accurate Few-shot Quantization by Synthesis-aware Fine-tuning
==============================================================

This project is a PyTorch implementation of **"Accurate Few-shot Quantization by Synthesis-aware Fine-tuning"**.
The paper proposes SynQ 
(Synthesis-aware Fine-tuning), an accurate Few-shot Quantization (FSQ) method.

.. image:: ../../images/synq.jpg
   :alt: Overall Architecture of SynQ
   :align: center

Prerequisites
-------------

Our implementation is based on PyTorch, TorchVision, and PyTorchCV libraries.

- Python 3.9.12
- PyTorch 1.13.0
- PyTorchCV 0.0.67

We include ``requirements.txt``, which contains all the packages used for the experiment.
We also contain a working code for PyTorchCV library within ``src/pytorchcv`` to mitigate the dependency issue.
We checked the dependency using a workstation with Intel Xeon Silver 4214 and RTX 3090, where its CUDA version was 11.6.
Install the required packages with the following code:

.. code-block:: shell

   pip install -r requirements.txt

Usage
-----

Fine-tune the quantized model by executing ``src/main_direct.py``.
We include ``run_cifar100_6bit.sh``, for the 6bit Fero-shot Quantization (FSQ) for ResNet-34 model pre-trained on the CIFAR-100 dataset.

.. code-block:: shell

   cd src/
   bash run_cifar100_6bit.sh 0

To run with different settings, modify the config files under ``src/config/`` or the arguments passed into ``src/data_generate/generate_data.py`` and ``src/main_direct.py``.

Code Description
----------------

This repository is written based on the codes from **ZeroQ** (CVPR '20) \`_Github <https://github.com/amirgholami/ZeroQ>\`_, **IntraQ** (CVPR '22) \`_Github <https://github.com/zysxmu/IntraQ>\`_, **HAST** (CVPR '23) \`_Github <https://github.com/lihuantong/HAST>\`_, and a PyTorch implementation of Grad-CAM and Grad-CAM++ \`_Github <https://github.com/1Konny/gradcam_plus_plus-pytorch>\`_.
Here is an overview of our codes:

.. code-block:: text

   SynQ/
   ├── images/
   │   └── synq.jpg                     # the overall architecture
   ├── src/
   │   ├── config/                      # configurations for fine-tuning      
   │   ├── data_generate/               # synthetic dataset generation
   │   ├── pytorchcv/                   # pytorchcv library
   │   ├── quantization_utils/          # utils for quantization
   │   ├── utils/                       # frequently used code snippets
   │   ├── conditional_batchnorm.py     # conditional batch normalization layer
   │   ├── dataloader.py                # dataloader for test data
   │   ├── gradcam.py                   # gradcam and gradcam++ code
   │   ├── main_direct.py               # fine-tuning code
   │   ├── options.py                   # storing code for configurations
   │   ├── trainer_direct.py            # trainer code
   │   └── unit_test.py                 # unit-test code
   ├── .gitignore                       # gitignore file
   ├── LICENSE                          # license for the use of the code
   ├── README.md                        # readme file
   └── requirements.txt                 # required packages


.. toctree::
   :maxdepth: 2
   :caption: Contents:

   Data Generation <src.data_generate>
   Quantization Utils <src.quantization_utils>
   Utils <src.utils>
   Sub-Modules <src>

Module Index
=============
* :ref:`modindex`
