<template>
  <div id="catalog">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img :src="novel.picurl" style="width: 120px; height: 120px" />
        </div>
      </el-col>
      <el-col :span="14">
        <el-form label-position="left" label-width="80px" class="demo-table-expand">
          <el-form-item label="书名">
            <span>{{ novel.resourceName }}</span>
          </el-form-item>
          <el-form-item label="作者">
            <span>{{ novel.author }}</span>
          </el-form-item>
          <el-form-item label="最新章节">
            <el-link
              type="primary"
              :href='"#/chapter?resourceId=" + novel.resourceID + "&chapterId=" + novel.lastSerialid '
            >{{ novel.lastSerialname }}</el-link>
          </el-form-item>
          <el-form-item label="简介">
            <div class="jianjie">
              <span>{{ novel.summary }}</span>
            </div>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <div style="height: 100px"></div>
    <el-table :data="tableData" style="width: 100%" @row-click="handdle">
      <el-table-column align="center" style="width: 100%" prop="serialname" label="章节"></el-table-column>
    </el-table>

    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left" @click.native="prevChapter">上一页</el-button>
      <el-button type="primary" @click.native="nextChapter">
        下一页
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </el-button-group>
  </div>
</template>

<script>
import { request, URL } from "../common/request";

export default {
  // :href='"#/chapter?resourceId=" + novel.resourceID + "&chapterId=" + novel.lastSerialid '
  data() {
    return {
      resourceId: 0,
      page: 1,
      pageSize: 10,
      novel: {
        resourceID: "1100565711",
        resourceName: "掠天记",
        author: "黑山老鬼",
        lastSerialid: 1821,
        serialnum: 200,
        lastSerialname: "新书《大劫主》发布啦，求票求收藏求关注！",
        picurl: "http://wfqqreader.3g.qq.com/cover/711/565711/t3_565711.jpg",
        summary:
          "有人说他是修行界里的一粒老鼠屎，坏了礼义廉耻，乱了道门秩序！有人说他是南瞻部州最大的败类，勾结魔道，坑蒙拐骗，无恶不作！对于所有污蔑，方行说：“没错，我就是那粒传说中的老鼠屎，有问题吗？”       【掠天记总群： 193466328】"
      },
      tableData: [
        {
          resourceid: "1100565711",
          serialid: "181",
          serialname: "第181章 宗主陈玄华"
        },
        {
          resourceid: "1100565711",
          serialid: "181",
          serialname: "第181章 宗主陈玄华"
        }
      ]
    };
  },
  created: function() {
    this.resourceId = parseInt(this.$route.query.resourceId);

    request(URL.site("server_url", "/api/novel/detail"), {
      method: "GET",
      params: {
        novelId: this.resourceId
      }
    }).then(res => {
      this.novel = res.response.data.bookInfo;
    });

    request(URL.site("server_url", "/api/novel/catalog"), {
      method: "GET",
      params: {
        novelId: this.resourceId,
        page: this.page,
        pageSize: this.pageSize
      }
    }).then(res => {
      this.tableData = res.response.rows;
      console.log(res);
    });
  },
  methods: {
    handdle(row, event, column) {
      this.$router.push(
        "/chapter?resourceId=" + row.resourceid + "&chapterId=" + row.serialid
      );
      console.log(row);
    },
    prevChapter: function() {
      if (this.page === 1) {
        return;
      }

      request(URL.site("server_url", "/api/novel/catalog"), {
        method: "GET",
        params: {
          novelId: this.resourceId,
          page: this.page--,
          pageSize: this.pageSize
        }
      }).then(res => {
        this.tableData = res.response.rows;
        console.log(res);
      });
    },
    nextChapter: function() {
      
      request(URL.site("server_url", "/api/novel/catalog"), {
        method: "GET",
        params: {
          novelId: this.resourceId,
          page: this.page++,
          pageSize: this.pageSize
        }
      }).then(res => {
        this.tableData = res.response.rows;
        console.log(res);
      });
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