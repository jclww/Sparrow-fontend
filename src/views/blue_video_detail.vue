<template>
  <div id="catalog">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img :src="data.imgBase64" style="width: 220px" />
        </div>
      </el-col>
      <el-col :span="14">
        <el-form label-position="left" label-width="80px" class="demo-table-expand">
          <el-form-item label="片名">
            <span>{{ title }}</span>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <div style="height: 100px"></div>
    <el-row>
      <el-button type="primary" @click.native="lu1">线路1</el-button>
      <el-button type="success" @click.native="lu2">线路2</el-button>
      <el-button type="warning" @click.native="lu3">线路3</el-button>
    </el-row>
  </div>
</template>

<script>
import { request, URL } from "../common/request";

export default {
  // :href='"#/chapter?resourceId=" + video.resourceID + "&chapterId=" + video.lastSerialid '
  data() {
    return {
      resourceId: 0,
      imgBase64: "",
      original: "",
      title: "",
      page: 1,
      pageSize: 10,
      data: {}
    };
  },
  created: function() {
    this.resourceId = parseInt(this.$route.query.videoId);
    this.title = this.$route.query.videoName;
    this.original = this.$route.query.original;

    if (this.resourceId == undefined || this.resourceId == NaN) {
      return;
    }
    request(URL.site("server_url", "/api/video/blue/detail"), {
      method: "GET",
      params: {
        id: this.resourceId,
        original: this.original
      }
    }).then(res => {
      this.data = res.response.data;
    });
  },
  methods: {
    lu1: function() {
      window.open(this.data.host + this.data.path, "_blank");

      console.log(this.data.host + this.data.path);
    },
    lu2: function() {
      window.open(this.data.host2 + this.data.path, "_blank");
      console.log(this.data.host2 + this.data.path);
    },
    lu3: function() {
      window.open(this.data.host3 + this.data.path, "_blank");
      console.log(this.data.host3 + this.data.path);
    }
  },
  name: "blue_video_detail"
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