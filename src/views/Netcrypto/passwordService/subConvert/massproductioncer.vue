<template>
  <!-- <div class="rootKey">
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
        <el-input v-model="rootKeyDNForm.rootKeyDN" :rows="10" type="textarea" placeholder="" style="width: 250px" />
        <el-button type="primary" style="margin-left: 20px">下载根证</el-button>
      </el-form-item>
    </el-form>
  </div> -->
  <div class="numberCer">
    <h5>生成证书数量</h5>
    <el-form :model="numberCerForm" :rules="numberCerFormRules" ref="numberCerFormRef" label-width="130px" size="small">
      <el-form-item label="证书个数" prop="filenum">
        <el-input v-model="numberCerForm.filenum" placeholder="请输入证书个数" style="width: 250px" />
      </el-form-item>
    </el-form>
  </div>
  <div class="informationCer">
    <h5>证书信息设置</h5>
    <el-form :model="informationCerForm" :rules="informationCerFormRules" ref="informationCerFormRef" label-width="130px" size="small">
      <el-form-item label="证书类型" prop="certype">
        <el-radio-group v-model="informationCerForm.certype" style="width: 250px">
          <el-radio label="RSA">RSA</el-radio>
          <el-radio label="SM2">SM2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="证书文件">
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
          style="width: 100vw"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>
      <el-form-item label="证书文件密码" prop="passwd">
        <el-input v-model="informationCerForm.passwd" placeholder="请输入证书文件密码" style="width: 250px" />
      </el-form-item>
      <el-form-item label="证书时间" prop="time">
        <el-date-picker
          v-model="informationCerForm.time"
          type="datetimerange"
          start-placeholder="请选择证书开始时间"
          end-placeholder="请选择证书结束时间"
          size="small"
          style="max-width: 300px"
          :default-time="defaultTime"
        />
      </el-form-item>
      <el-form-item label="生成文件类型" prop="outfiletype">
        <el-select v-model="informationCerForm.outfiletype" placeholder="请选择生成文件类型" style="width: 250px">
          <el-option label="pfx" value="pfx" />
          <el-option label="cer" value="cer" />
          <!-- <el-option label="der" value="der" />
          <el-option label="pem" value="pem" /> -->
        </el-select>
      </el-form-item>
      <el-form-item label="证书序列号">
        <el-input v-model="informationCerForm.serialNumber" placeholder="" style="width: 250px" />
      </el-form-item>
      <el-form-item label="密钥长度" prop="keyLen">
        <el-input v-model="informationCerForm.keyLen" placeholder="" style="width: 250px" />
      </el-form-item>
      <el-form-item label="使用者DN类型" prop="dntype">
        <el-select v-model="informationCerForm.dntype" placeholder="请选择使用者DN类型" style="width: 250px" @change="changeDNType">
          <el-option label="group" value="group" />
          <el-option label="string" value="string" />
        </el-select>
      </el-form-item>
      <el-form-item label="使用者DN" prop="subjName">
        <el-input v-model="informationCerForm.subjName" :rows="10" type="textarea" placeholder="请输入使用者DN" style="width: 250px" />
      </el-form-item>
      <el-form-item label="签名算法" prop="digetType">
        <el-select v-model="informationCerForm.digetType" placeholder="请选择生成文件类型" style="width: 250px">
          <el-option label="sm3" value="sm3" />
          <el-option label="sha1" value="sha1" />
          <el-option label="sha256" value="sha256" />
          <el-option label="sha384" value="sha384" />
        </el-select>
      </el-form-item>
      <el-form-item label="生成证书密钥" prop="outfilepassw">
        <el-input v-model="informationCerForm.outfilepassw" placeholder="请设置生成证书密钥" style="width: 250px" />
      </el-form-item>
      <el-form-item label="添加扩展">
        <el-radio-group v-model="addExtstrlist" style="width: 250px" :disabled="informationCerForm.dntype == 'string' ? true : false">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form :model="informationCerForm.extstrlist" ref="extstrlistFormRef" v-if="addExtstrlist == '1'" label-width="130px" size="small">
        <el-row :gutter="24" v-for="(item, index) in informationCerForm.extstrlist" :key="'extstrlist' + index">
          <el-col :span="6">
            <el-form-item
              :label="`扩展项${index + 1}(OID)`"
              :prop="'item[' + index + '].name'"
              :rules="{ required: false, message: '扩展项不能为空', trigger: 'blur' }"
            >
              <el-input v-model="item.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item
              :label="`扩展项值${index + 1}(value)`"
              :prop="'item[' + index + '].variable'"
              :rules="{ required: false, message: '扩展项值不能为空', trigger: 'blur' }"
            >
              <el-input v-model="item.variable"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">
            <el-button @click="addExtstrlistForm" size="small" :icon="CirclePlus" circle></el-button>
          </el-col>
          <el-col :span="3" v-if="informationCerForm.extstrlist.length !== 1">
            <el-button @click="removeExtstrlistFormForm(item)" :icon="Delete" size="small" circle> </el-button>
          </el-col>
        </el-row>
      </el-form>
      <el-form-item label="">
        <el-button size="small" type="primary" @click="generateCer()">生成证书</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="download" v-if="resultUrl !== ''">
    <h5>批量证书生成状态</h5>
    <span class="status">成功！</span>
    <el-button size="small" type="primary" @click="toDownFile">点击下载</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElDatePicker } from 'element-plus'
import { CirclePlus, Delete } from '@element-plus/icons-vue'
import { BatchMakeCer } from '@/api/Netcrypto/openssl'

const files = ref([])
const fileList = ref([]) // 上传文件
const addExtstrlist = ref('0')
const defaultTime: [Date, Date] = [new Date(2000, 1, 1, 12, 0, 0), new Date(2000, 2, 1, 8, 0, 0)] // '12:00:00', '08:00:00'
const resultUrl = ref('')
const rootKeyDN = ref('')
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
const numberCerFormRules = reactive<FormRules>({
  filenum: [{ required: true, message: '请输入证书个数', trigger: 'blur' }]
})
const informationCerForm = reactive({
  filenum: '',
  certype: '',
  passwd: '',
  time: '',
  dntype: '',
  subjName: '',
  outfiletype: '',
  digetType: '',
  keyLen: '',
  outfilepassw: '',
  serialNumber: '',
  extstrlist: [{ name: '', variable: '' }]
})
const informationCerFormRef = ref<FormInstance>()
const informationCerFormRules = reactive<FormRules>({
  certype: [{ required: true, message: '请选择证书类型', trigger: 'change' }],
  passwd: [{ required: true, message: '请输入证书文件密码', trigger: 'blur' }],
  time: [{ required: true, message: '请选择证书时间', trigger: 'blur' }],
  dntype: [{ required: true, message: '请选择使用者DN类型', trigger: 'blur' }],
  subjName: [{ required: true, message: '请输入使用者DN', trigger: 'blur' }],
  outfiletype: [{ required: true, message: '请选择证书格式', trigger: 'change' }],
  digetType: [{ required: true, message: '请选择生成文件类型', trigger: 'change' }],
  keyLen: [{ required: true, message: '请设置密钥长度', trigger: 'blur' }],
  outfilepassw: [{ required: true, message: '请设置生成证书密钥', trigger: 'blur' }]
})
const extstrlistFormRef = ref<FormInstance>()
const rootKeyDNForm = reactive({
  rootKeyDN: ''
})
const rootKeyDNFormRef = ref<FormInstance>()
const rootKeyDNFormRules = reactive<FormRules>({
  rootKeyDN: [{ required: true, message: '请输入根证书DN', trigger: 'blur' }]
})

// 监听上传文件数目，此处限制1个
const handleExceed = (files, fileList) => {
  ElMessage.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
}

const handleChange = (file, fileList) => {
  files.value.push(file.raw)
}

const addExtstrlistForm = () => {
  informationCerForm.extstrlist.push({
    name: '',
    variable: ''
  })
}

const removeExtstrlistFormForm = item => {
  var index = informationCerForm.extstrlist.indexOf(item)
  if (index !== -1) {
    informationCerForm.extstrlist.splice(index, 1)
  }
}

const changeDNType = it => {
  if (it === 'string') {
    addExtstrlist.value = '0'
  }
}

const toDownFile = () => {
  location.href = resultUrl.value
}

const generateCer = () => {
  numberCerFormRef.value.validate(async valid => {
    if (!valid) return
    // if (addExtstrlist.value == '1') {
    //   extstrlistFormRef.value.validate(async valid => {
    //     if (!valid) return
    //     generateCer2()
    //   })
    // } else {
    //   generateCer2()
    // }
    generateCer2()
  })
}

// 生成证书
const generateCer2 = () => {
  informationCerFormRef.value.validate(async valid => {
    if (!valid) return
    if (files.value.length == 0) {
      return ElMessage.error('请上传证书文件')
    }
    let extstrlistFormArray = []
    informationCerForm.extstrlist.map(item => {
      let res = []
      res[0] = item.name
      res[1] = item.variable
      extstrlistFormArray.push(res)
    })
    let formData = new FormData()
    for (var i in files.value) {
      formData.append('caPfxFile', files.value[i])
    }
    formData.append('filenum', numberCerForm.filenum)
    formData.append('certype', informationCerForm.certype)
    formData.append('passwd', informationCerForm.passwd)
    formData.append('dntype', informationCerForm.dntype)
    formData.append('subjName', informationCerForm.subjName)
    formData.append('startTime', String(new Date(informationCerForm.time[0]).getTime() / 1000))
    formData.append('endTime', String(new Date(informationCerForm.time[1]).getTime() / 1000))
    formData.append('outfiletype', informationCerForm.outfiletype)
    formData.append('digetType', informationCerForm.digetType)
    formData.append('keyLen', informationCerForm.keyLen)
    formData.append('outfilepassw', informationCerForm.outfilepassw)
    formData.append('serialNumber', informationCerForm.serialNumber)
    addExtstrlist.value == '1' ? formData.append('extstrlist', JSON.stringify(extstrlistFormArray)) : formData.append('extstrlist', '[]')
    let res = await BatchMakeCer(formData)
    let { code, msg, url } = res
    if (code == '1000') {
      resultUrl.value = url
      ElMessage.success(msg || '批量生成证书成功')
    } else {
      ElMessage.error({
        message: msg,
        center: true
      })
    }
  })
}
</script>

<style lang="scss" scoped>
.upload-demo {
  display: flex;
  :deep(.el-upload-list) {
    min-width: 200px;
  }
}
.download {
  .status {
    display: inline-block;
    margin-left: 80px;
    color: #67c23a;
  }
}
</style>
