<template>
  <div class="app-wrapper">
    <TopMenu class="sidebar-container" />
    <!-- <div class="main-container">
      conview
      <navbar/>
      <tags-view/>
      <app-main/>
    </div> -->
    <router-view :key="key" />
  </div>
</template>

<script>
import TopMenu from '../components/TopMenu'

export default {
  name: 'Layout',
  components: {
    TopMenu
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style>
</style>
