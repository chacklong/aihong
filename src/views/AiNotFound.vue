<template>
  <div class="not-found">
    <el-card>
      <div class="not-found-content">
        <h2>404 Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
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
