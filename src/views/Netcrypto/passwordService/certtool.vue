<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="证书转换工具" name="certConvert">
        <Certconvert />
      </el-tab-pane>
      <el-tab-pane label="私钥提取" name="extractPri">
        <Extractpri />
      </el-tab-pane>
      <el-tab-pane label="批量生成证书" name="genCert"></el-tab-pane>
      <el-tab-pane label="P10生成证书" name="p10Cert"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import Certconvert from './subConvert/certconvert.vue'
import Extractpri from './subConvert/extractpri.vue'
import { ref } from 'vue'

const activeName = ref('certConvert')
</script>
