<template>
  <div class="rootKey">
    <h5>根密钥</h5>
    <el-form :model="rootKeyForm" :rules="rootKeyFormRules" ref="rootKeyFormRef" label-width="130px" size="small">
      <el-form-item label="证书文件" prop="certfile">
        <el-upload
          ref="upload"
          class="upload-demo"
          action="myfile"
          drag
          :on-change="handleChange"
          :limit="1"
          :on-exceed="handleExceed"
          accept=".pem,.pfx"
          :file-list="fileList"
          :auto-upload="false"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>
      <el-form-item label="" prop="">
        <el-button size="small" type="primary">提交</el-button>
        <el-button size="small">选回默认证书</el-button>
      </el-form-item>
    </el-form>
    <el-form
      :model="rootKeyDNForm"
      :rules="rootKeyDNFormRules"
      ref="rootKeyDNFormRef"
      class="rootKeyDNForm"
      label-width="130px"
      size="small"
    >
      <el-form-item label="根证书DN" prop="rootKeyDN">
        <el-input v-model="rootKeyDNForm.rootKeyDN" :rows="10" type="textarea" placeholder="" style="width: 180px" />
        <el-button type="primary" style="margin-left: 20px">下载根证</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="informationCer">
    <h5>证书信息设置</h5>
    <el-form :model="informationCerForm" :rules="informationCerFormRules" ref="informationCerFormRef" label-width="130px" size="small">
      <el-form-item label="证书类型">
        <el-radio-group v-model="informationCerForm.certype" style="width: 180px">
          <el-radio label="RSA">RSA</el-radio>
          <el-radio label="SM2">SM2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="使用者DN">
        <el-input v-model="numberCerForm.subjName" placeholder="请输入使用者DN" style="width: 180px" />
      </el-form-item>
      <el-form-item label="证书时间">
        <el-date-picker
          v-model="numberCerForm.time"
          class="timePicker"
          type="daterange"
          range-separator="To"
          start-placeholder="请选择证书开始时间"
          end-placeholder="请选择证书结束时间"
          size="small"
          style="max-width: 300px"
        />
      </el-form-item>
      <el-form-item label="证书格式">
        <el-select v-model="informationCerForm.outfiletype" placeholder="请选择证书格式" style="width: 180px">
          <el-option label="pfx" value="pfx" />
          <el-option label="cer" value="cer" />
          <el-option label="der" value="der" />
          <el-option label="pem" value="pem" />
        </el-select>
      </el-form-item>
      <el-form-item label="签名算法">
        <el-select v-model="informationCerForm.suanfa" placeholder="请选择签名算法" style="width: 180px">
          <el-option label="RSA SHA1" value="RSA SHA1" />
          <el-option label="SM2 SM3" value="SM2 SM3" />
        </el-select>
      </el-form-item>
      <el-form-item label="密钥长度">
        <el-input v-model="numberCerForm.keyLen" placeholder="" style="width: 180px" />
      </el-form-item>
      <el-form-item label="证书密钥口令设置">
        <el-input v-model="numberCerForm.DN" placeholder="请设置证书密钥口令" style="width: 180px" />
      </el-form-item>
      <el-form-item label="序列号">
        <el-input v-model="numberCerForm.serialNumber" placeholder="" style="width: 180px" />
      </el-form-item>
      <el-form-item label="">
        <el-button size="small" type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElDatePicker } from 'element-plus'

const rootKeyDN = ref('')
const files = ref([])
const fileList = ref([]) // 上传文件
const rootKeyForm = reactive({
  certfile: 'upload'
})
const rootKeyFormRef = ref<FormInstance>()
const rootKeyFormRules = reactive<FormRules>({
  Sourceformat: [{ required: true, message: '', trigger: 'blur' }]
})
const numberCerForm = reactive({
  filenum: ''
})
const numberCerFormRef = ref<FormInstance>()
const informationCerForm = reactive({
  certype: '',
  time: '',
  subjName: '',
  outfiletype: '',
  suanfa: '',
  keyLen: '',
  DN: '',
  serialNumber: ''
})
const informationCerFormRef = ref<FormInstance>()
const informationCerFormRules = reactive<FormRules>({
  Sourceformat: [{ required: true, message: '', trigger: 'blur' }]
})
const rootKeyDNForm = reactive({
  rootKeyDN: ''
})
const rootKeyDNFormRef = ref<FormInstance>()
const rootKeyDNFormRules = reactive<FormRules>({
  rootKeyDN: [{ required: true, message: '请输入根证书DN', trigger: 'blur' }]
})
const uploadStyle = 'upload'
const numberCer = ref('')

// 监听上传文件数目，此处限制1个
const handleExceed = (files, fileList) => {
  ElMessage.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
}

const handleChange = (file, fileList) => {
  files.value.push(file.raw)
}
</script>

<style lang="scss">
.upload-demo {
  display: flex;
}
</style>
