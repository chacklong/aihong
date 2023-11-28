<template>
  <div class="aihong">
    <AboutSection></AboutSection>
    <HeroSection></HeroSection>
    <ProjectSection></ProjectSection>
    <LatestNewsSection></LatestNewsSection>
    <ActivitySection></ActivitySection>
    <FooterSection></FooterSection>
  </div>
</template>
<script lang="ts" setup>
import AboutSection from './AboutSection.vue';
import HeroSection from './HeroSection.vue';
import ProjectSection from './layout/ProjectSection.vue';
import LatestNewsSection from './news/LatestNewsSection.vue'
import ActivitySection from './ActivitySection.vue';
import FooterSection from './FooterSection.vue';
</script>
<style scoped>
</style>