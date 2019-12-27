<template>
  <div class="chapter_info">
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left" @click.native="prevChapter">上一章</el-button>
      <el-button type="primary" icon="el-icon-house" @click.native="catalog">目录</el-button>
      <el-button type="primary" @click.native="nextChapter">
        下一章
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </el-button-group>
    <ul class="chapter_info">
      <p v-for="item in this.items" align="left"> &nbsp;&nbsp;&nbsp;&nbsp; 
 {{ item }}</p>
    </ul>
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left" @click.native="prevChapter">上一章</el-button>
      <el-button type="primary" icon="el-icon-house" @click.native="catalog">目录</el-button>
      <el-button type="primary" @click.native="nextChapter">
        下一章
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </el-button-group>
  </div>
</template>

<script>
import { request, URL } from "../common/request";

export default {
  name: "chapter",
  data() {
    return {
      resourceId: 0,
      chapterId: 0,
      nextChapterId: 0,
      prevChapterId: 0,
      items: []
    };
  },
  methods: {
    prevChapter: function() {
      this.$router.push(
        "/chapter?resourceId=" +
          this.resourceId +
          "&chapterId=" +
          this.prevChapterId
      );
    },
    nextChapter: function() {
      this.$router.push(
        "/chapter?resourceId=" +
          this.resourceId +
          "&chapterId=" +
          this.nextChapterId
      );
    },
    catalog: function() {
      this.$router.push("/catalog?resourceId=" + this.resourceId);
    }
  },

  created: function() {
    this.resourceId = parseInt(this.$route.query.resourceId);
    this.chapterId = parseInt(this.$route.query.chapterId);
    this.nextChapterId = this.chapterId + 1;
    this.prevChapterId = this.chapterId - 1;

    console.log(this.resourceId + "" + this.chapterId);

    request(URL.site("server_url", "/api/novel/chapter"), {
      method: "GET",
      params: {
        novelId: this.resourceId,
        chapterId: this.chapterId
      }
    }).then(res => {
      this.items = res.response.data.content;
      console.log(res);
    });
  }
};
</script>

<style>
.chapter_info{
  padding-inline-start:0px;
}
</style>

