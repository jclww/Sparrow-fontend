<template>
  <el-menu
    router="true"
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">我的笔记</el-menu-item>
    <el-menu-item index="2">我的博客</el-menu-item>
    <el-submenu index="3">
      <template slot="title">小工具</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    <el-menu-item index="2">设置</el-menu-item> 
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
</style>
