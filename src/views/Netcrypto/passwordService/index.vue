<template>
  <div>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="加解/解密" name="encry">
        <Encrypt />
      </el-tab-pane>
      <el-tab-pane label="签名/验签" name="sign">
        <Signverify />
      </el-tab-pane>
      <el-tab-pane label="证书工具" name="cert">
        <Certtool />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import Encrypt from './encrypt.vue'
import Signverify from './signverify.vue'
import Certtool from './certtool.vue'
import { ref } from 'vue'
const activeName = ref('encry')
const handleClick = () => {}
</script>
