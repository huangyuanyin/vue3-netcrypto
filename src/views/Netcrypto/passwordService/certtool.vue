<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="证书转换工具" name="certConvert">
      <Certconvert />
    </el-tab-pane>
    <el-tab-pane label="私钥提取" name="extractPri">
      <Extractpri />
    </el-tab-pane>
    <el-tab-pane label="批量生成证书" name="genCert">
      <Massproductioncer />
    </el-tab-pane>
    <el-tab-pane label="P10生成证书" name="p10Cert">
      <P10productioncer />
    </el-tab-pane>
    <el-tab-pane label="生成CRL" name="crlCert">
      <CRLproductioncer />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import Certconvert from './subConvert/certconvert.vue'
import Extractpri from './subConvert/extractpri.vue'
import Massproductioncer from './subConvert/massproductioncer.vue'
import P10productioncer from './subConvert/p10productioncer.vue'
import CRLproductioncer from './subConvert/crlproductioncer.vue'
import { ref } from 'vue'

const activeName = ref('certConvert')
</script>
