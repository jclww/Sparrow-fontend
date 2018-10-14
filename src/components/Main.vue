<template>
    <div id="main">
        <el-container>
            <el-header>
                我也不知道写啥，就这样排版吧～
            </el-header>
        </el-container>
        <el-row>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    <Left />
                </div>
            </el-col>
            <el-col :span="20">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Left from './Left'
export default {
  name: 'main',
  components: {
    Left
  }
}
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  height: 100%;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
