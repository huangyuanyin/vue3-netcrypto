<template>
  <div>
    <el-tabs>
      <el-tab-pane label="裸签名验签">
        <RawSign />
      </el-tab-pane>
      <el-tab-pane label="Attached签名验签">
        <AttachedSign />
      </el-tab-pane>
      <el-tab-pane label="Detached签名验签">
        <DetachedSign />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import RawSign from './subSign/rawsign.vue'
import AttachedSign from './subSign/attachedsign.vue'
import DetachedSign from './subSign/detachedsign.vue'
</script>
