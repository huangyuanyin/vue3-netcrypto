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
        <Base64 />
      </el-tab-pane>
      <el-tab-pane label="URL编码/解码" name="url">
        <Url />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import Symm from '././subEncrypt/symm.vue'
import Asymm from './subEncrypt/asymm.vue'
import Hash from './subEncrypt/hash.vue'
import Base64 from './subEncrypt/base64.vue'
import Url from './subEncrypt/url.vue'
import { ref } from 'vue'

const activeName = ref('symm')
</script>
