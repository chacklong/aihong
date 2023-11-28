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
          <el-col :span="6" v-for="(image, index) in images" :key="index">
            <el-card class="about-image" shadow="hover" :body-style="{ padding: '0px' }">
              <img :src="image.src" :alt="image.description" />
              <div style="padding: 14px;">
                <p>{{ image.description }}</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </template>
  <script lang="ts" setup>
  import '../assets/components/about.scss'
  import DrividerSection from './layout/DrividerSection.vue'
  const images = [
    { src: 'http://localhost:5173/public/bg.jpg', description: '深冲组🌳🎍。' },
    { src: 'http://localhost:5173/public/bg.jpg', description: '瓢田坝组🌳🎍。' },
    { src: 'http://localhost:5173/public/bg.jpg', description: '兴隆组🌳🎍。' },
    { src: 'http://localhost:5173/public/bg.jpg', description: '秧田组🌳🎍。' },
  ]
  </script>
  
  <style scoped>
  .card-row {
    width: 80%;
    justify-content: center;
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
    background: var(--main-bg);
    backdrop-filter: var(--backdrop-blur);
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
  </style>
  