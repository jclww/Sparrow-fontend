<template>
  <div id="blue_video_tag">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="分类：">
        <el-input v-model="formInline.tag" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label='分页：'>
        <el-input-number v-model="formInline.num" :min="1" :max="10" label="分页"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%" @row-click="handdle">
      <el-table-column prop="date" style="width: 100%">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-row :gutter="20">
              <el-col :span="10">
                <div class="grid-content bg-purple">
                  <img :src="props.row.imgBase64" style="width: 200px"/>
                </div>
              </el-col>
              <el-col :span="14">
                <el-form-item label="片名">
                  <span>{{ props.row.title }}</span>
                </el-form-item>
                <el-form-item label="时间">
                  <span>{{ props.row.date }}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
import { request, URL } from "../common/request";

export default {
  data() {
    return {
      formInline: {
        num: 1,
        tag: ""
      },
      tableData: []
    };
  },
  methods: {
    onSubmit() {
      if (this.formInline.videoName === "") {
        return false;
      }
      request(URL.site("server_url", "/api/video/blue/list"), {
        method: "GET",
        params: {
          tag: this.formInline.tag,
          page: this.formInline.num
        }
      }).then(res => {
        // console.log(res.response);
        this.tableData = res.response.data;
      });
    },
    handdle(row, event, column) {
      this.$router.push("/blue_video_detail?videoId=" + row.id+"&videoName="+row.title+"&original="+row.original);
    },
    handleChange(value) {
      // console.log(value);
    }
  }
};
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 80px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
</style>

