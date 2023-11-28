<template>
  <div class="not-found">
    <el-card>
      <div class="not-found-content">
        <h2>505 Not Found</h2>
        <p>抱歉，正在加班加点开发中...</p>
        <p>Sorry, we are working overtime and developing...</p>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AiNotFound',
});
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.not-found-content {
  text-align: center;
}
</style>
