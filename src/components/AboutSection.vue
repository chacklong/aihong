<template>
  <DrividerSection />
  <el-container class="about-us">
    <el-main class="container">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="14">
          <h2 class="main-title">天街矮红</h2>
          <p>这里是关于我们的介绍文本。</p>
          <p>矮红村是贵州省铜仁市松桃苗族自治县牛郎镇下辖的一个村，位于牛郎镇西南边，距镇政府所在地20公里</p>
        </el-col>
      </el-row>
      <el-row :gutter="10" type="flex" justify="center" class="card-row">
        <el-col :span="6" v-for="group in groups" :key="group.id">
          <el-card class="about-image slide-in" shadow="hover" :body-style="{ padding: '0px' }">
            <img :src="getImageUrl(group.attributes.image.data.attributes)" :alt="group.attributes.title" />
            <div style="padding: 14px;">
              <p>{{ group.attributes.title }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import { ref,onMounted } from 'vue'
import DrividerSection from './layout/DrividerSection.vue'
import '../assets/animation.scss'
import {getGroup} from '@/utils/api';

interface Group {
  id: string;
  attributes: {
    title: string;
    image: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  }
}
const groups = ref<Group[]>([])
const fetchGroup = async ()=>{
  try {
    const response = await getGroup()
    groups.value = response.data
    console.log('This is groups:',groups.value)
  } catch (error){
    console.error('request faied:',error)
  }
}
function getImageUrl(image: { url: any; }) {
    return `http://localhost:1337${image.url}`;
 }
const cards = ref([])
onMounted(() => {
  window.history.scrollRestoration = 'manual';
  setTimeout(() => {
    const cards = document.querySelectorAll('.about-image');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        }
      });
    }, { threshold: 0.3 });

    cards.forEach(card => {
      observer.observe(card);
    });
  }, 0);
  fetchGroup()
});
</script>
  
<style scoped>
.card-row {
  width: 80%;
  justify-content: center;
  overflow-y: hidden;
}

.about-image {
  margin: 1px;
  margin-top: 2rem;
  overflow: hidden;
}

.about-image img {
  width: 100%;
  height: auto;
  transition: transform .5s ease;
}

.about-image:hover img {
  transform: scale(1.05);
}

.img el-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-us {
  text-align: center;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--aihong-bg-color-5);
  backdrop-filter: var(--backdrop-blur-4);
}

.main-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .main-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .card-row .el-col {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.slide-in {
  animation: slideIn 5s ease-out;
}
@media (max-width: 768px) {
  .slide-in {
    animation: slideIn 2s ease-out;
  }
}
</style>
  