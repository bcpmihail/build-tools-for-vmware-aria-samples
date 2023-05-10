###
# #%L
# abx-all_abxps1
# %%
# Copyright (C) 2023 VMWARE
# %%
# Copyright 2023 VMware, Inc.
# 
# This product is licensed to you under the BSD 2 clause (the "License"). You may not use this product except in compliance with the License.
# 
# This product may include a number of subcomponents with separate copyright notices and license terms. Your use of these subcomponents is subject to the terms and conditions of the subcomponent's license, as noted in the LICENSE file.
# #L%
###
import json

def handler(context, inputs):
    jsonOut=json.dumps(inputs, separators=(',', ':'))
    print("Inputs were {0}".format(jsonOut))

    print("Executing the ABX action from the Demo pacakge")
    print(context)
    return {"test": "testval"}

