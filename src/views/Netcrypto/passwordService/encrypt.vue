<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="对称加解密" name="symm">
        <Symm />
      </el-tab-pane>
      <el-tab-pane label="非对称加解密" name="asymm">
        <Asymm />
      </el-tab-pane>
      <el-tab-pane label="散列/哈希" name="hash">
        <Hash />
      </el-tab-pane>
      <el-tab-pane label="Base64" name="base64">
        <!-- <base64-com></base64-com> -->
      </el-tab-pane>
      <el-tab-pane label="URL编码/解码" name="url">
        <!-- <url-com></url-com> -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import Symm from '././subEncrypt/symm.vue'
import Asymm from './subEncrypt/asymm.vue'
import Hash from './subEncrypt/hash.vue'
// const base64 = () => import('./subEncrypt/base64')
// const url = () => import('./subEncrypt/url')
import { ref } from 'vue'

const activeName = ref('symm')
</script>
