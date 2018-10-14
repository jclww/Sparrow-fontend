<template>
  <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

    <el-menu-item v-for="route in menuList" :key="route.path" :index="route.path" :title="route.name">{{route.name}}</el-menu-item>
  </el-menu>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    }
  },
  computed: {
    ...mapGetters([
      'menuList'
    ])
  }
}
</script>

<style>
</style>
