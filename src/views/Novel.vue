<template>
  <div id="novel_search">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label>
        <el-input v-model="formInline.novelName" placeholder="小说名称"></el-input>
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
                  <img :src="props.row.picurl" style="width: 100px; height: 100px" />
                </div>
              </el-col>
              <el-col :span="14">
                <el-form-item label="书名">
                  <span>{{ props.row.resourcename }}</span>
                </el-form-item>
                <el-form-item label="作者">
                  <span>{{ props.row.author }}</span>
                </el-form-item>
                <el-form-item label="最新章节">
                  <el-link
                    type="primary"
                    :href='"#/chapter?resourceId=" + props.row.resourceid + "&chapterId=" + props.row.lastserialid '
                  >{{ props.row.lastserialname }}</el-link>
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
        novelName: ""
      },
      tableData: [
        // {
        //   resourceid: "1100565711",
        //   resourcename: "掠天记",
        //   author: "黑山老鬼",
        //   lastserialid: 1821,
        //   lastserialname: "新书《大劫主》发布啦，求票求收藏求关注！",
        //   picurl: "http://wfqqreader.3g.qq.com/cover/711/565711/t3_565711.jpg",
        //   summary:
        //     "有人说他是修行界里的一粒老鼠屎，坏了礼义廉耻，乱了道门秩序！有人说他是南瞻部州最大的败类，勾结魔道，坑蒙拐骗，无恶不作！对于所有污蔑，方行说：“没错，我就是那粒传说中的老鼠屎，有问题吗？”       【掠天记总群： 193466328】"
        // },{
        //   resourceid: "1125443555",
        //   resourcename: "九天",
        //   author: "黑山老鬼",
        //   lastserialid: 1821,
        //   lastserialname: "新书《大劫主》发布啦，求票求收藏求关注！",
        //   picurl: "http://wfqqreader.3g.qq.com/cover/555/25443555/t3_25443555.jpg",
        //   summary:
        //     "有人说他是修行界里的一粒老鼠屎，坏了礼义廉耻，乱了道门秩序！有人说他是南瞻部州最大的败类，勾结魔道，坑蒙拐骗，无恶不作！对于所有污蔑，方行说：“没错，我就是那粒传说中的老鼠屎，有问题吗？”       【掠天记总群： 193466328】"
        // }
      ]
    };
  },
  methods: {
    onSubmit() {
      if (this.formInline.novelName === "") {
        return false;
      }
      request(URL.site("server_url", "/api/novel/search"), {
        method: "GET",
        params: {
          key: this.formInline.novelName
        }
      }).then(res => {
                console.log(this.tableData);

        this.tableData = res.response.rows
        console.log(this.tableData);
      });
    },
    handdle(row, event, column) {
      this.$router.push("/catalog?resourceId=" + row.resourceid);
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

