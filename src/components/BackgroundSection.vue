<template>
    <div class="background-wrapper">
        <div class="overlay" style="z-index: 999" :class="{ 'overlay-visible': isOverlayVisible }">
            <div class="text-content" v-for="message in messages" :key="message.id">
                <p>{{ typingText }}<span class="cursor"></span></p>
            </div>
        </div>
        <div class="background-video" v-if="backgroundVideos.length > 0">
            <video autoplay loop muted playsinline :style="videoStyle">
                <source :src="backgroundVideos[0].attributes.url" type="video/mp4" />
            </video>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue';
import { getMessage, getBackgroundVideo } from '@/utils/api';

const videoStyle = computed(() => ({
    width: '100%',
    height: '100%',
}));
const isOverlayVisible = ref(false);
const messages = ref<Message[]>([]);
const backgroundVideos = ref<BackVideo[]>([]);
const typingText = ref('');
let typingInterval: number | undefined;

interface Message {
    id: string;
    attributes: {
        message: string;
    };
}
interface BackVideo {
    id: string;
    attributes: {
        url: string;
    };
}
function clearTypingInterval() {
    if (typingInterval) {
        clearInterval(typingInterval);
        typingInterval = undefined;
    }
}
onMounted(async () => {
    setTimeout(async () => {
        isOverlayVisible.value = true;
        await Promise.all([fetchMessage(), fetchBackground()]);

        if (messages.value.length > 0) {
            startTyping(messages.value[0].attributes.message);
        }
    }, 1000);
});

onUnmounted(() => {
    clearTypingInterval();
    if (typingInterval) {
        clearInterval(typingInterval);
    }
});

async function fetchMessage() {
    try {
        const response = await getMessage();
        messages.value = Array.isArray(response.data) ? response.data : [response.data];
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
}

async function fetchBackground() {
    try {
        const response = await getBackgroundVideo();
        const basePath = 'http://localhost:1337';
        backgroundVideos.value = response.data.attributes.background.data.map((video: any) => ({
            id: video.id,
            attributes: {
                url: `${basePath}${video.attributes.url}`,
            },
        }));
        // currentVideo.value = backgroundVideos.value
        console.log('This is backgroundVideos:', backgroundVideos.value);
    } catch (error) {
        console.error('Error fetching background video:', error);
    }
}

function startTyping(text: string) {
    clearTypingInterval();
    let currentIndex = 0;
    typingText.value = '';

    typingInterval = window.setInterval(() => {
        typingText.value += text[currentIndex];
        currentIndex++;
        if (currentIndex >= text.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                isOverlayVisible.value = false;
            }, 1000);
        }
    }, 100);
}
watchEffect(() => {
    if (messages.value.length > 0 && !typingText.value) {
        startTyping(messages.value[0].attributes.message);
    }
});
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
    opacity: 0;
    transform: translateY(100%);
    transition: all 1s ease;
    z-index: 999;
}

.overlay-visible {
    opacity: 1;
    transform: translateY(0);
}

.overlay-hidden {
    opacity: 0;
    transform: translateY(-100%);
    transition: transform 2s ease-out;
}

.overlay>div,
.overlay>h2 {
    text-align: center;
}

.text-content {
    height: auto;
    width: auto;
    padding: 30px;
}

.text-content p {
    font-size: 18px;
    color: #000000;
    text-align: left;
}

.cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background-color: rgb(253, 253, 253);
    margin-left: 2px;
    animation: blink 1s step-start infinite;
}

@keyframes blink {
    50% {
        background-color: transparent;
    }
}
</style>
