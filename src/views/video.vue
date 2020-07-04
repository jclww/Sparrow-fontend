<template>
  <div id="video_search">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label>
        <el-input v-model="formInline.videoName" placeholder="搜索"></el-input>
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
                  <img :src="props.row.pic" style="width: 100px; height: 100px" />
                </div>
              </el-col>
              <el-col :span="14">
                <el-form-item label="片名">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="类型">
                  <span>{{ props.row.type }}</span>
                </el-form-item>
                <el-form-item label="看过">
                  <span>{{ props.row.hits }}</span>
                </el-form-item>
                <el-form-item label="评分">
                  <span>{{ props.row.pf }}</span>
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
        videoName: ""
      },
      tableData: [
      ]
    };
  },
  methods: {
    onSubmit() {
      if (this.formInline.videoName === "") {
        return false;
      }
      request(URL.site("server_url", "/api/video/search"), {
        method: "GET",
        params: {
          key: this.formInline.videoName
        }
      }).then(res => {
        console.log(res.response);

        this.tableData = res.response.data;
        console.log(this.tableData);
      });
    },
    handdle(row, event, column) {
      this.$router.push("/video_detail?videoId=" + row.id);
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

