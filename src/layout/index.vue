<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <sides></sides>
      </el-aside>
      <el-container>
        <el-header>
          <AppHeader></AppHeader>
        </el-header>
        <el-main>
          <!-- 子路由 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import sides from './components/app-sides.vue'
import AppHeader from './components/app-header.vue'
export default Vue.extend({
  name: 'LayoutIndex',
  components: { sides, AppHeader }
})
</script>
<style lang="scss" scoped>
.el-container {
  min-height: 100vh;
  min-width: 980px;
}
.el-aside {
  background: #d3dce6;
}
.el-header {
  background: #fff;
}
.el-main {
  background: #e9eef3;
}
</style>
