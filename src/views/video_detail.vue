<template>
  <div id="catalog">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img :src="video.pic" style="width: 120px; height: 120px" />
        </div>
      </el-col>
      <el-col :span="14">
        <el-form label-position="left" label-width="80px" class="demo-table-expand">
          <el-form-item label="片名">
            <span>{{ video.name }}</span>
          </el-form-item>
          <el-form-item label="主演">
            <span>{{ video.zhuyan }}</span>
          </el-form-item>
          <el-form-item label="导演">
            <span>{{ video.daoyan }}</span>
          </el-form-item>
          <el-form-item label="年份">
            <span>{{ video.year }}</span>
          </el-form-item>
          <el-form-item label="简介">
            <div class="jianjie">
              <span>{{ video.text }}</span>
            </div>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <div style="height: 100px"></div>
    <el-table :data="jishu" style="width: 100%" @row-click="handdle">
      <el-table-column align="center" style="width: 30%" prop="name" label="选集"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { request, URL } from "../common/request";

export default {
  // :href='"#/chapter?resourceId=" + video.resourceID + "&chapterId=" + video.lastSerialid '
  data() {
    return {
      resourceId: 0,
      page: 1,
      pageSize: 10,
      video: {},
      jishu: []
    };
  },
  created: function() {
    this.resourceId = parseInt(this.$route.query.videoId);
    if (this.resourceId == undefined || this.resourceId == NaN) {
      return;
    }
    request(URL.site("server_url", "/api/video/detail"), {
      method: "GET",
      params: {
        id: this.resourceId
      }
    }).then(res => {
      this.video = res.response.data;
      this.jishu = res.response.data.zu[0].ji;
    });
  },
  methods: {
    handdle(row, event, column) {
      console.log(row);
      window.open(row.purl, "_blank");
    }
  },
  name: "catalog"
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
.jianjie {
  font-size: 10px;
  line-height: 5px;
  height: 20px;
  padding: 0px;
  line-height: 1.5;
}
</style>