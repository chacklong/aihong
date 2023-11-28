<script setup lang="ts">
import HongSecton from '@/components/HongSecton.vue'
import BackgroundSection from '@/components/BackgroundSection.vue';
// import AiAboutSection from '@/components/AiAboutSection.vue';
</script>

<template>
  <el-main>
    <BackgroundSection />
    <HongSecton />
    <AiAboutSection />
  </el-main>
</template>
<style scoped>
.el-main{
  padding: 0;
}
</style>
