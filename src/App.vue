<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AiNavbar from './components/narbar/AiNavbar.vue';
import './assets/style.scss'
import { ElNotification } from 'element-plus';
import { onMounted } from 'vue';

const AlertNotice = () => {
  ElNotification({
    title: '标题名称',
    message: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
    type: 'success',
    duration: 15000,
  });
};

onMounted(() => {
  // AlertNotice()
})
</script>

<template>
  <el-header class="nav-bar-bg">
      <AiNavbar />
  </el-header>
    <RouterView />
</template>

<style scoped>
.el-header{
  padding: 0;
}
</style>
