<template>
    <div class="background-wrapper">
        <div class="overlay" style="z-index: 999">
            <div>title</div>
            <h2>this dmeo page
                
            </h2>
        </div>
        <div class="background-video">
            <video autoplay loop muted playsinline :style="videoStyle">
                <source :src="backgroundVideo" type="video/mp4" />
            </video>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
// import '../assets/background.scss'

const backgroundVideo = ref('/src/assets/video/bg.mp4');

const videoStyle = computed(() => ({
    width: '100%',
    height: '100%',
}));
</script>

<style scoped>
.background-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    z-index: 10;
}
.background-video {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    z-index: -1;
}
video {
    width: 100%;
    height: 100%;
}
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 50%;
  position: absolute;
  border-radius: 15px;
  margin-top: -165px;
  backdrop-filter: var(--backdrop-blur-4);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
}
.overlay > div, .overlay > h2 {
  text-align: center;
}
</style>
