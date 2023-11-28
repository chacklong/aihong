<template>
  <div class="ai-news">
    <el-card>
      <div class="news-content">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AiNews',
  data() {
    return {
      title: '新闻标题',
      content: '这是一条新闻通知的内容。',
    };
  },
});
</script>

<style scoped>
.ai-news {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.news-content {
  padding: 20px;
}
</style>
