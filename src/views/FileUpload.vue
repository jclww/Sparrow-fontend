<template>
    <div id="fileUpload">
        <!-- <el-upload class="upload-demo" ref="upload" action="http://localhost:8089/fileupload" :on-preview="handlePreview" :on-remove="handleRemove" :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">单文件小于5MB,总文件小于10MB</div>
        </el-upload> -->
        <el-upload class="upload-demo" drag :action="submitFileURL()" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">单文件小于5MB,总文件小于10MB</div>
        </el-upload>
        <el-button type="primary" @click="onClickTest">测试</el-button>
    </div>
</template>

<script>
import { request, URL } from '../common/request'

export default {
  name: 'FileUpload',
  methods: {
    onClickTest() {
      request(URL.site('server_url', '/get'), {
        method: 'GET'
      }).then(res => {
        console.log(res)
      })
    },
    submitFileURL() {
      return URL.site('server_url', '/fileupload')
    }
  }

  //   methods: {
  //     submitUpload() {
  //       this.$refs.upload.submit()
  //     },
  //     handleRemove(file, fileList) {
  //       console.log(file, fileList)
  //     },
  //     handlePreview(file) {
  //       console.log(file)
  //     }
  //   }
}
</script>

<style>
</style>

