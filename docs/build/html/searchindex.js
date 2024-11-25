Search.setIndex({"alltitles": {"Accurate Zero-shot Quantization by Synthesis-aware Fine-tuning": [[0, "accurate-zero-shot-quantization-by-synthesis-aware-fine-tuning"]], "Code Description": [[0, "code-description"]], "Contents:": [[0, null]], "Data Generate": [[3, null]], "Module Index": [[0, "module-index"]], "Prerequisites": [[0, "prerequisites"]], "Quantization Utils": [[4, null]], "Sub Modules": [[2, null]], "SynQ documentation": [[0, null]], "Usage": [[0, "usage"]], "Utils": [[5, null]], "compute.py": [[5, "module-utils.compute"]], "contitional_batchnorm.py": [[2, "module-conditional_batchnorm"]], "data_loader.py": [[2, "module-dataloader"]], "distill_data.py": [[3, "module-data_generate.distill_data"]], "generate_data.py": [[3, "module-data_generate.generate_data"]], "get_resnet34.py": [[5, "module-utils.get_resnet34"]], "gradcam.py": [[2, "module-gradcam"], [5, "module-utils.gradcam"]], "log_print.py": [[5, "module-utils.log_print"]], "lr_policy.py": [[5, "module-utils.lr_policy"]], "main_direct.py": [[2, "module-main_direct"]], "model_transform.py": [[5, "module-utils.model_transform"]], "my_utils.py": [[5, "module-utils.my_utils"]], "opt_static.py": [[5, "module-utils.opt_static"]], "options.py": [[2, "module-options"]], "quant_modules.py": [[4, "module-quantization_utils.quant_modules"]], "quant_utils.py": [[4, "module-quantization_utils.quant_utils"]], "src": [[1, null]], "trainer_direct.py": [[2, "module-trainer_direct"]], "warmup.py": [[5, "module-utils.warmup"]]}, "docnames": ["index", "modules", "src", "src.data_generate", "src.quantization_utils", "src.utils"], "envversion": {"sphinx": 62, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2}, "filenames": ["index.rst", "modules.rst", "src.rst", "src.data_generate.rst", "src.quantization_utils.rst", "src.utils.rst"], "indexentries": {"arg_parse() (in module data_generate.generate_data)": [[3, "data_generate.generate_data.arg_parse", false]], "check_path() (in module data_generate.distill_data)": [[3, "data_generate.distill_data.check_path", false]], "clear() (data_generate.distill_data.outputhook method)": [[3, "data_generate.distill_data.OutputHook.clear", false]], "data_generate.distill_data": [[3, "module-data_generate.distill_data", false]], "data_generate.generate_data": [[3, "module-data_generate.generate_data", false]], "distilldata (class in data_generate.distill_data)": [[3, "data_generate.distill_data.DistillData", false]], "forward() (data_generate.distill_data.labelsmoothing method)": [[3, "data_generate.distill_data.LabelSmoothing.forward", false]], "generate_calib_centers() (in module data_generate.distill_data)": [[3, "data_generate.distill_data.generate_calib_centers", false]], "get_distil_data() (data_generate.distill_data.distilldata method)": [[3, "data_generate.distill_data.DistillData.get_distil_data", false]], "hook() (data_generate.distill_data.outputhook method)": [[3, "data_generate.distill_data.OutputHook.hook", false]], "hook_fn_forward() (data_generate.distill_data.distilldata method)": [[3, "data_generate.distill_data.DistillData.hook_fn_forward", false]], "labelsmoothing (class in data_generate.distill_data)": [[3, "data_generate.distill_data.LabelSmoothing", false]], "module": [[3, "module-data_generate.distill_data", false], [3, "module-data_generate.generate_data", false]], "outputhook (class in data_generate.distill_data)": [[3, "data_generate.distill_data.OutputHook", false]]}, "objects": {"": [[2, 0, 0, "-", "conditional_batchnorm"], [2, 0, 0, "-", "dataloader"], [2, 0, 0, "-", "gradcam"], [2, 0, 0, "-", "main_direct"], [2, 0, 0, "-", "options"], [2, 0, 0, "-", "trainer_direct"]], "conditional_batchnorm": [[2, 1, 1, "", "CategoricalConditionalBatchNorm2d"], [2, 1, 1, "", "CategoricalConditionalBatchNorm2dHard"], [2, 1, 1, "", "ConditionalBatchNorm2d"]], "conditional_batchnorm.CategoricalConditionalBatchNorm2d": [[2, 2, 1, "", "forward"]], "conditional_batchnorm.CategoricalConditionalBatchNorm2dHard": [[2, 2, 1, "", "forward"]], "conditional_batchnorm.ConditionalBatchNorm2d": [[2, 2, 1, "", "forward"]], "data_generate": [[3, 0, 0, "-", "distill_data"], [3, 0, 0, "-", "generate_data"]], "data_generate.distill_data": [[3, 1, 1, "", "DistillData"], [3, 1, 1, "", "LabelSmoothing"], [3, 1, 1, "", "OutputHook"], [3, 3, 1, "", "check_path"], [3, 3, 1, "", "generate_calib_centers"]], "data_generate.distill_data.DistillData": [[3, 2, 1, "", "get_distil_data"], [3, 2, 1, "", "hook_fn_forward"]], "data_generate.distill_data.LabelSmoothing": [[3, 2, 1, "", "forward"]], "data_generate.distill_data.OutputHook": [[3, 2, 1, "", "clear"], [3, 2, 1, "", "hook"]], "data_generate.generate_data": [[3, 3, 1, "", "arg_parse"]], "dataloader": [[2, 1, 1, "", "DataLoader"]], "dataloader.DataLoader": [[2, 2, 1, "", "cifar"], [2, 2, 1, "", "getloader"], [2, 2, 1, "", "imagenet"]], "gradcam": [[2, 1, 1, "", "GradCAM"], [2, 1, 1, "", "GradCAMpp"]], "gradcam.GradCAM": [[2, 2, 1, "", "backward_hook"], [2, 2, 1, "", "forward"], [2, 2, 1, "", "forward_hook"], [2, 2, 1, "", "generate_saliency_map_size"], [2, 2, 1, "", "set_target_layer"]], "gradcam.GradCAMpp": [[2, 2, 1, "", "forward"]], "main_direct": [[2, 1, 1, "", "DirectDataset"], [2, 1, 1, "", "ExperimentDesign"], [2, 1, 1, "", "Generator"], [2, 1, 1, "", "GeneratorImagenet"], [2, 3, 1, "", "main"]], "main_direct.ExperimentDesign": [[2, 2, 1, "", "freeze_model"], [2, 2, 1, "", "prepare"], [2, 2, 1, "", "quantize_model"], [2, 2, 1, "", "run"], [2, 2, 1, "", "set_logger"], [2, 2, 1, "", "unfreeze_model"]], "main_direct.Generator": [[2, 2, 1, "", "forward"]], "main_direct.GeneratorImagenet": [[2, 2, 1, "", "forward"]], "options": [[2, 1, 1, "", "Option"]], "options.Option": [[2, 2, 1, "", "paramscheck"], [2, 2, 1, "", "set_save_path"]], "quantization_utils": [[4, 0, 0, "-", "quant_modules"], [4, 0, 0, "-", "quant_utils"]], "quantization_utils.quant_modules": [[4, 1, 1, "", "QuantAct"], [4, 1, 1, "", "QuantActDSG"], [4, 1, 1, "", "QuantActMSE"], [4, 1, 1, "", "QuantConv2d"], [4, 1, 1, "", "QuantConv2dDSG"], [4, 1, 1, "", "QuantLinear"], [4, 1, 1, "", "QuantLinearDSG"]], "quantization_utils.quant_modules.QuantAct": [[4, 2, 1, "", "fix"], [4, 2, 1, "", "forward"], [4, 2, 1, "", "unfix"]], "quantization_utils.quant_modules.QuantActDSG": [[4, 2, 1, "", "fix"], [4, 2, 1, "", "forward"], [4, 2, 1, "", "unfix"]], "quantization_utils.quant_modules.QuantActMSE": [[4, 2, 1, "", "fix"], [4, 2, 1, "", "forward"], [4, 2, 1, "", "unfix"]], "quantization_utils.quant_modules.QuantConv2d": [[4, 2, 1, "", "forward"], [4, 2, 1, "", "set_param"]], "quantization_utils.quant_modules.QuantConv2dDSG": [[4, 2, 1, "", "forward"], [4, 2, 1, "", "set_param"]], "quantization_utils.quant_modules.QuantLinear": [[4, 2, 1, "", "forward"], [4, 2, 1, "", "set_param"]], "quantization_utils.quant_modules.QuantLinearDSG": [[4, 2, 1, "", "forward"], [4, 2, 1, "", "set_param"]], "quantization_utils.quant_utils": [[4, 1, 1, "", "AsymmetricQuantFunction"], [4, 1, 1, "", "SymmetricQuantFunctionDSG"], [4, 3, 1, "", "asymmetric_linear_quantization_params"], [4, 3, 1, "", "clamp"], [4, 3, 1, "", "find_mse_smallest"], [4, 3, 1, "", "linear_dequantize"], [4, 3, 1, "", "linear_dequantize_dsg"], [4, 3, 1, "", "linear_quantize"], [4, 3, 1, "", "linear_quantize_dsg"], [4, 3, 1, "", "lp_loss"], [4, 3, 1, "", "symmetric_linear_quantization_params_dsg"]], "quantization_utils.quant_utils.AsymmetricQuantFunction": [[4, 2, 1, "", "backward"], [4, 2, 1, "", "forward"]], "quantization_utils.quant_utils.SymmetricQuantFunctionDSG": [[4, 2, 1, "", "backward"], [4, 2, 1, "", "forward"]], "trainer_direct": [[2, 1, 1, "", "Trainer"]], "trainer_direct.Trainer": [[2, 2, 1, "", "apply_filters"], [2, 2, 1, "", "backward"], [2, 2, 1, "", "backward_g"], [2, 2, 1, "", "backward_s"], [2, 2, 1, "", "channel_attention"], [2, 2, 1, "", "forward"], [2, 2, 1, "", "hook_activation"], [2, 2, 1, "", "hook_activation_teacher"], [2, 2, 1, "", "hook_fn_forward"], [2, 2, 1, "", "loss_cam"], [2, 2, 1, "", "loss_fa"], [2, 2, 1, "", "loss_fn_kd"], [2, 2, 1, "", "reduce_minmax"], [2, 2, 1, "", "spatial_attention"], [2, 2, 1, "", "test"], [2, 2, 1, "", "train"], [2, 2, 1, "", "update_cam"], [2, 2, 1, "", "update_lr"]], "utils": [[5, 0, 0, "-", "compute"], [5, 0, 0, "-", "get_resnet34"], [5, 0, 0, "-", "gradcam"], [5, 0, 0, "-", "log_print"], [5, 0, 0, "-", "lr_policy"], [5, 0, 0, "-", "model_transform"], [5, 0, 0, "-", "my_utils"], [5, 0, 0, "-", "opt_static"], [5, 0, 0, "-", "warmup"]], "utils.compute": [[5, 1, 1, "", "AverageMeter"], [5, 3, 1, "", "compute_singlecrop"], [5, 3, 1, "", "compute_tencrop"]], "utils.compute.AverageMeter": [[5, 2, 1, "", "reset"], [5, 2, 1, "", "update"]], "utils.get_resnet34": [[5, 1, 1, "", "CIFARResNet"], [5, 3, 1, "", "resnet34_get_model"]], "utils.get_resnet34.CIFARResNet": [[5, 2, 1, "", "forward"]], "utils.gradcam": [[5, 1, 1, "", "Normalize"], [5, 3, 1, "", "denormalize"], [5, 3, 1, "", "find_alexnet_layer"], [5, 3, 1, "", "find_densenet_layer"], [5, 3, 1, "", "find_resnet_layer"], [5, 3, 1, "", "find_squeezenet_layer"], [5, 3, 1, "", "find_vgg_layer"], [5, 3, 1, "", "normalize"], [5, 3, 1, "", "visualize_cam"]], "utils.gradcam.Normalize": [[5, 2, 1, "", "do"], [5, 2, 1, "", "undo"]], "utils.log_print": [[5, 3, 1, "", "compute_remain_time"], [5, 3, 1, "", "print_result"]], "utils.lr_policy": [[5, 1, 1, "", "LRPolicy"]], "utils.lr_policy.LRPolicy": [[5, 2, 1, "", "get_lr"], [5, 2, 1, "", "set_params"]], "utils.model_transform": [[5, 3, 1, "", "data_parallel"], [5, 3, 1, "", "list2sequential"], [5, 3, 1, "", "model2list"], [5, 3, 1, "", "model2state_dict"]], "utils.my_utils": [[5, 3, 1, "", "basic_setup"], [5, 3, 1, "", "check_path"], [5, 3, 1, "", "filter_warnings"], [5, 3, 1, "", "fix_seed"], [5, 3, 1, "", "print_tensors_shape"], [5, 3, 1, "", "setup_logging"], [5, 3, 1, "", "setup_logging_with_path"], [5, 3, 1, "", "to_device"]], "utils.opt_static": [[5, 1, 1, "", "NetOption"]], "utils.opt_static.NetOption": [[5, 2, 1, "", "paramscheck"]]}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "function", "Python function"]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:function"}, "terms": {"0": [0, 2, 3, 4, 5], "03385": 5, "05": 2, "1": [0, 2, 3, 4, 5], "10": [2, 5], "100": [2, 5], "11": 0, "12": 0, "1512": 5, "18": 0, "1e": 2, "1konni": 0, "2": [0, 4], "20": 0, "2023": [2, 3, 4, 5], "22": 0, "23": 0, "256": 3, "3": [0, 5], "3090": 0, "32": 5, "34": 5, "3bit": 0, "4": [2, 3], "4214": 0, "5": 3, "6": 0, "67": 0, "6th": [2, 3, 4, 5], "80": 2, "9": [0, 4], "For": [0, 2, 3, 4, 5], "The": [0, 5], "To": 0, "_": [0, 3], "_github": 0, "_input": [2, 3, 4], "_max": 4, "_min": 4, "ab": 5, "ac": [2, 3, 4, 5], "accuraci": 5, "activ": [2, 4], "activation_bit": 4, "addit": 2, "affin": 2, "alexnet": 5, "align": 2, "all": [0, 5], "also": 0, "amirgholami": [0, 2, 3, 4, 5], "an": 0, "appli": 2, "apply_filt": [1, 2], "arch": 5, "architectur": 0, "arg": [2, 3, 4], "arg_pars": 3, "argument": [0, 2, 3], "arxiv": 5, "assign": 5, "asymmetric_linear_quantization_param": 4, "asymmetricquantfunct": 4, "attent": 2, "aug_margin": 3, "augment": 3, "author": [2, 3, 4, 5], "averag": 5, "averagemet": 5, "avgpool": 5, "awar": [2, 3, 4, 5], "back": 4, "backward": [1, 2, 4, 5], "backward_": [1, 2], "backward_g": [1, 2], "backward_hook": [1, 2], "base": [0, 2, 3, 4, 5], "bash": 0, "basic": 5, "basic_setup": 5, "batch": [0, 2, 3], "batch_siz": [2, 3], "batchnorm2d": 2, "below": 5, "beta": [3, 4], "beta_c": 3, "bia": 2, "bit": 4, "both": 2, "bottleneck": 5, "bound": 4, "c": [2, 5], "calcul": [2, 5], "calibr": 3, "cam": [0, 2], "categor": 2, "categoricalconditionalbatchnorm2d": [1, 2], "categoricalconditionalbatchnorm2dhard": [1, 2], "cd": 0, "center": 3, "channel": [2, 5], "channel_attent": [1, 2], "charg": [2, 3, 4, 5], "check": [0, 2, 3, 5], "check_path": [3, 5], "cifar": [1, 2, 5], "cifar100": 2, "cifarresnet": 5, "clamp": 4, "class": [2, 3, 4, 5], "class_idx": 2, "classifi": 5, "classifier_0": 5, "clear": 3, "code": [2, 3, 4, 5], "coeffici": 2, "com": [0, 2, 3, 4, 5], "commerci": [2, 3, 4, 5], "comput": [0, 2, 4], "compute_remain_tim": 5, "compute_singlecrop": 5, "compute_tencrop": 5, "condit": [0, 2], "conditional_batchnorm": [0, 2], "conditionalbatchnorm2d": [1, 2], "conf_path": 2, "config": 0, "configur": [0, 2], "construct": 3, "contact": [2, 3, 4, 5], "contain": [0, 2], "context": 4, "contitional_batchnorm": [0, 1], "conv": 4, "conv1": 5, "convert": 5, "convolut": [2, 4], "count": 5, "creat": [3, 5], "cross": [2, 3], "ctx": 4, "cuda": 0, "current": [2, 4, 5], "cvpr": 0, "d_zero": 2, "data": [0, 2, 5], "data_gener": [0, 3], "data_load": [0, 1], "data_parallel": 5, "data_path": 2, "data_tim": 5, "dataload": [0, 1, 2], "dataparallel": 5, "dataset": [0, 2, 5], "date": [2, 3, 4, 5], "deep": 5, "default": 5, "denorm": 5, "densenet": 5, "depend": 0, "descripts": 2, "design": 2, "deviat": 5, "devic": 5, "differ": 0, "direct": 2, "direct_dataload": 2, "directdataset": [1, 2], "directli": 2, "directori": 3, "distil": [2, 3], "distill_data": 0, "distilldata": 3, "do": 5, "e": 5, "each": 5, "element": 5, "entropi": [2, 3], "ep": 2, "epoch": [2, 5], "error": 5, "execut": 0, "exist": [3, 5], "experi": [0, 2], "experimentdesign": [1, 2], "factor": 4, "fals": [2, 4, 5], "fc": 5, "featur": [2, 5], "features_0": 5, "features_12": 5, "features_12_expand3x3": 5, "features_12_expand3x3_activ": 5, "features_42": 5, "features_denseblock2_denselayer12": 5, "features_denseblock2_denselayer12_norm1": 5, "features_transition1": 5, "features_transition1_norm": 5, "few": 2, "file": [0, 2, 5], "file_path": 5, "filenam": 5, "filter": [2, 5], "filter_warn": 5, "find": [4, 5], "find_alexnet_lay": 5, "find_densenet_lay": 5, "find_mse_smallest": 4, "find_resnet_lay": 5, "find_squeezenet_lay": 5, "find_vgg_lay": 5, "fine": [2, 3, 4, 5], "first": 0, "fix": [4, 5], "fix_se": 5, "float": 4, "follow": 0, "forward": [1, 2, 3, 4, 5], "forward_hook": [1, 2, 3], "found": 5, "free": [2, 3, 4, 5], "freez": 2, "freeze_model": [1, 2], "frequent": 0, "from": [0, 5], "full": 2, "full_precision_flag": 4, "function": [2, 3, 4, 5], "g": 5, "gamma": 3, "gaussian": 3, "gener": [0, 1, 2], "generate_calib_cent": 3, "generate_data": 0, "generate_saliency_map_s": [1, 2], "generatorimagenet": [1, 2], "get": [2, 3, 5], "get_distil_data": 3, "get_lr": 5, "get_resnet34": 0, "getload": [1, 2], "github": [0, 2, 3, 4, 5], "gitignor": 0, "given": 4, "gpu": 5, "gpu0": 5, "grad": 0, "grad_input": 2, "grad_output": [2, 4], "gradcam": [0, 1], "gradcam_plus_plu": 0, "gradcampp": [1, 2], "gradient": [2, 4], "ground": 5, "group": 3, "h": 5, "ha": 5, "hard": 2, "hast": [0, 2, 3, 4, 5], "head": 3, "heatmap": 5, "here": 0, "hierarch": 5, "home": 2, "hook": [2, 3, 5], "hook_activ": [1, 2], "hook_activation_teach": [1, 2], "hook_fn_forward": [1, 2, 3], "http": [0, 2, 3, 4, 5], "i": [0, 2, 3, 4, 5], "id": 5, "imag": [0, 2, 5], "imagenet": [0, 1, 2], "img": 5, "implement": 0, "in_channel": 5, "in_siz": 5, "includ": 0, "index": 2, "infer": 4, "inform": 5, "init_block_channel": 5, "inplac": 4, "input": [2, 3, 4, 5], "input_s": 2, "instal": 0, "integ": 4, "integral_zero_point": 4, "intel": 0, "intergral_zero_point": 4, "intermedi": 3, "intraq": 0, "issu": 0, "iter": 5, "iter_tim": 5, "its": [0, 5], "j2kim99": [2, 3, 4, 5], "jongjin": [2, 3, 4, 5], "jpg": 0, "k": 4, "kang": [2, 3, 4, 5], "kim": [2, 3, 4, 5], "knowledg": 2, "kr": [2, 3, 4, 5], "kwarg": [2, 4], "l": 5, "l_p": 4, "label": [2, 3, 5], "labelsmooth": 3, "last": 2, "latent": 2, "layer": [0, 2, 3, 4, 5], "layer1": 5, "layer1_basicblock0": 5, "layer1_basicblock0_relu": 5, "layer1_bottleneck0": 5, "layer1_bottleneck0_conv1": 5, "layer1_bottleneck0_downsampl": 5, "layer1_bottleneck0_downsample_0": 5, "learn": [2, 5], "left": 5, "left_tim": 5, "librari": 0, "licens": 0, "lihuantong": [0, 2, 3, 4, 5], "linear": 4, "linear_dequant": 4, "linear_dequantize_dsg": 4, "linear_quant": 4, "linear_quantize_dsg": 4, "list": 5, "list2sequenti": 5, "load": [2, 5], "loader": 2, "log": 5, "log_path": 5, "log_print": 0, "logger": [2, 5], "loss": [2, 3, 4, 5], "loss_": 2, "loss_cam": [1, 2], "loss_fa": [1, 2], "loss_fn_kd": [1, 2], "loss_g": 2, "low": 2, "lower": 4, "lp_loss": 4, "lr": 5, "lr_master_": 2, "lr_master_g": 2, "lr_polici": 0, "lrpolici": 5, "m": 3, "main": [1, 2, 3, 4, 5], "main_direct": [0, 1], "mainli": [2, 3, 4, 5], "make": 5, "map": [2, 4], "margin": 3, "mask": [2, 5], "mask_selc": 2, "master": 5, "max": [2, 4], "md": 0, "mean": 5, "measur": 4, "method": [0, 4], "min": [2, 4], "minjun": [2, 3, 4, 5], "mitig": 0, "mix": 2, "mode": 5, "model": [0, 2, 3, 5], "model2list": 5, "model2state_dict": 5, "model_dict": 2, "model_nam": 3, "model_path": [3, 5], "model_teach": 2, "model_transform": 0, "modifi": [0, 4], "modul": [1, 3, 4, 5], "momentum": 2, "mse": 4, "multi": 5, "multi_step": 5, "my_util": 0, "n": 5, "n_epoch": 5, "n_thread": 2, "name": [2, 3, 5], "nation": [2, 3, 4, 5], "nearest": 4, "netopt": [2, 5], "ngpu": 5, "nll": 3, "nn": 5, "none": [2, 3, 4, 5], "norm": 4, "normal": [0, 2, 3, 5], "num_batch": 3, "num_bit": 4, "num_class": [2, 5], "num_epoch": 5, "num_featur": 2, "number": [3, 5], "object": [2, 3, 5], "onli": 4, "opt_stat": 0, "opt_typ": 2, "optimizer_st": 2, "option": [0, 1, 5], "org": 5, "origin": 2, "our": 0, "output": [2, 3, 4, 5], "outputhook": 3, "overal": 0, "overview": 0, "p": 4, "packag": 0, "page": [], "paper": 0, "parallel": 5, "param": [2, 3, 4, 5], "paramet": [2, 4, 5], "params_dict": 5, "paramscheck": [1, 2, 5], "pars": 3, "pass": [0, 2, 3, 4, 5], "path": [2, 3, 5], "pip": 0, "pixel": 5, "place": 4, "pleas": [2, 3, 4, 5], "point": 4, "polici": 5, "pre": 0, "precis": [2, 4], "pred": 4, "predict": 4, "prepar": [1, 2], "pretrain": 2, "print": 5, "print_result": 5, "print_tensors_shap": 5, "project": 0, "propag": 4, "propos": 0, "purpos": [2, 3, 4, 5], "py": [0, 1], "python": 0, "pytorch": 0, "pytorchcv": 0, "quant_modul": 0, "quant_util": 0, "quantact": 4, "quantactdsg": 4, "quantactms": 4, "quantconv2d": 4, "quantconv2ddsg": 4, "quantiz": [2, 3, 5], "quantization_util": [0, 4], "quantize_model": [1, 2], "quantlinear": 4, "quantlineardsg": 4, "r": 0, "rang": [4, 5], "rate": [2, 5], "read": 2, "readm": 0, "recognit": 5, "reduc": 2, "reduce_minmax": [1, 2], "reduct": 4, "refer": 5, "refin": 3, "refined_gaussian": 3, "remain": 5, "repositori": 0, "reproduc": 5, "requir": 0, "research": [2, 3, 4, 5], "reset": 5, "residu": 5, "resnet": [0, 5], "resnet18": 3, "resnet34_get_model": 5, "result": 5, "retain_graph": 2, "return": [3, 5], "round": 4, "rtx": 0, "run": [0, 1, 2, 4], "run_count": 2, "run_generate_imagenet": 0, "run_imagenet": 0, "running_stat": 4, "salienc": 2, "salineci": 2, "same": 5, "saturation_max": 4, "saturation_min": 4, "save": [2, 3], "save_path_head": 3, "scale": 4, "search": [], "second": 0, "seed": 5, "select": 2, "seoul": [2, 3, 4, 5], "sep": [2, 3, 4, 5], "sequanti": 5, "sequenc": 5, "sequenti": 5, "set": [0, 2, 4, 5], "set_logg": [1, 2], "set_param": [4, 5], "set_save_path": [1, 2], "set_target_lay": [1, 2], "setup": 5, "setup_log": 5, "setup_logging_with_path": 5, "sgd": 2, "sh": 0, "shape": 5, "shift": 4, "shot": [2, 3, 4, 5], "should": 5, "sign": 4, "silver": 0, "singl": 4, "size": [2, 3, 5], "smallest": 4, "smooth": 3, "snippet": 0, "snu": [2, 3, 4, 5], "softwar": [2, 3, 4, 5], "spatial": 2, "spatial_attent": [1, 2], "squeezenet": 5, "src": 0, "standard": 5, "starlab": [2, 3, 4, 5], "stat": 4, "state_dict": 5, "static": 4, "std": 5, "store": [0, 2, 5], "str": 2, "string": 5, "student": 2, "sub": [0, 1], "subpackag": [], "support": 4, "sw": [2, 3, 4, 5], "symmetric_linear_quantization_params_dsg": 4, "symmetricquantfunctiondsg": 4, "synq": [2, 3, 4, 5], "synthes": 5, "synthesi": [2, 3, 4, 5], "synthet": [0, 3], "target": [2, 3, 4, 5], "target_lay": 5, "target_layer_nam": 5, "teacher": [2, 3], "teacher_model": 3, "teacher_output": 2, "ten_crop": 2, "tensor": [2, 3, 4, 5], "tensorboard_logg": 2, "test": [0, 1, 2, 5], "test_load": 2, "tgt": 4, "thi": [0, 2, 3, 4, 5], "time": 5, "time_str": 5, "to_devic": 5, "todo": [2, 4], "top1": 5, "top1_error": 5, "top1_loss": 5, "top5": 5, "top5_error": 5, "top5_flag": 5, "top5error": 5, "torch": 5, "torchvis": [0, 5], "total": 5, "total_tim": 5, "track_running_stat": 2, "train": [0, 1, 2, 5], "train_load": 2, "trainer": [0, 1, 2], "trainer_direct": [0, 1], "transform": 5, "true": [2, 4], "truth": 5, "tune": [2, 3, 4, 5], "txt": 0, "type": [3, 5], "u": [2, 3, 4, 5], "ukang": [2, 3, 4, 5], "under": [0, 2, 3, 4, 5], "undo": 5, "unfix": 4, "unfreez": 2, "unfreeze_model": [1, 2], "unit": 0, "unit_test": 0, "univers": [2, 3, 4, 5], "unsign": 4, "up": 5, "updat": [2, 5], "update_cam": [1, 2], "update_lr": [1, 2], "upper": 4, "us": [0, 3, 4, 5], "usag": 5, "use_mix": 2, "util": 0, "val": 5, "valu": [2, 3, 4, 5], "vario": 2, "vector": 2, "verbos": 2, "version": [0, 2, 3, 4, 5], "vgg": 5, "visualize_cam": 5, "w": 5, "wa": 0, "warm": 5, "warmup": 0, "warn": 5, "we": 0, "weight": [2, 4], "weight_bit": 4, "where": 0, "whether": [4, 5], "which": [0, 5], "within": 0, "work": 0, "workstat": 0, "written": 0, "x": [2, 3, 4, 5], "x_max": 4, "x_min": 4, "xeon": 0, "z": 2, "zero": [2, 3, 4, 5], "zero_pint": 4, "zero_point": 4, "zeropoint": 4, "zeroq": [0, 2, 3, 4, 5], "zsq": 0, "zysxmu": 0}, "titles": ["SynQ documentation", "src", "Sub Modules", "Data Generate", "Quantization Utils", "Utils"], "titleterms": {"accur": 0, "awar": 0, "code": 0, "comput": 5, "conditional_batchnorm": [], "content": 0, "contitional_batchnorm": 2, "data": 3, "data_gener": [], "data_load": 2, "dataload": [], "descript": 0, "distill_data": 3, "document": 0, "fine": 0, "gener": 3, "generate_data": 3, "get_resnet34": 5, "gradcam": [2, 5], "index": 0, "indic": [], "log_print": 5, "lr_polici": 5, "main_direct": 2, "model_transform": 5, "modul": [0, 2], "my_util": 5, "opt_stat": 5, "option": 2, "packag": [], "prerequisit": 0, "py": [2, 3, 4, 5], "quant_modul": 4, "quant_util": 4, "quantiz": [0, 4], "quantization_util": [], "shot": 0, "src": 1, "sub": 2, "subpackag": [], "synq": 0, "synthesi": 0, "tabl": [], "trainer_direct": 2, "tune": 0, "usag": 0, "util": [4, 5], "warmup": 5, "zero": 0}})