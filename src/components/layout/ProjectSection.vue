<template>
    <el-row class="wrapper">
      <div class="title-tag tg-left">
        <span>村项目</span>
      </div>
      <el-divider />
      <el-col :span="12" class="text-section">
        <h1>精准农业</h1>
        <p>利用卫星图像和地理信息系统（GIS）对农田进行详细分析，以实现作物种植和管理的精准。通过对数据的详细分析，农民可以更精确地施肥、灌溉和处理病虫害，提高作物产量和质量。</p>
      </el-col>
      <el-col :span="12" class="image-section">
        <el-carousel>
          <el-carousel-item v-for="item in items" :key="item.image">
            <img class="carousel-image" :src="item.image" alt="Carousel item" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <el-row class="wrapper">
      <div class="title-tag tg-right">
        <span>村项目</span>
      </div>
      <el-divider />
      <el-col :span="12" class="image-section">
        <el-carousel>
          <el-carousel-item v-for="item in items" :key="item.image">
            <img class="carousel-image" :src="item.image" alt="Carousel item" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="12" class="text-section">
        <h1>智能农业系统</h1>
        <p>这些系统利用物联网（IoT）技术，通过传感器收集农田数据（如土壤湿度、温度、作物生长情况等），并通过自动化系统（如自动灌溉和施肥）优化作物生长条件。这有助于提高产量和效率，同时降低资源消耗。</p>
      </el-col>
    </el-row>
  </template>
  
  <script>
  export default {
    name: 'SplitLayout',
    data() {
      return {
        items: [
          { image: 'http://localhost:5173/public/project_1.png' },
          { image: 'http://localhost:5173/public/project_2.png' },
          { image: 'http://localhost:5173/public/project_3.png' },
          { image: 'http://localhost:5173/public/project_4.png' },
        ],
      };
    },
  };
  </script>
  <style scoped>
  .title-tag{
    border: 4px solid #276749; 
    width: 140px;
    height: 40px;
    border-top: 0;
    border-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tg-left{
    margin-right: auto; /* Aligns to the left */
    border-right: 0;
  }
  .tg-right {
    margin-left: auto; /* Aligns to the right */
    border-left: 0;
  }
  .title-tag-left, 
  .title-tag-right,
   span{
    color: #276749;
    font-size: 25px;
  }
  .wrapper {
    background: var(--main-bg);
    backdrop-filter: var(--backdrop-blur);
  }
  .el-col{
    margin-bottom: 56px;
  
  }
  .el-carousel{
    width: 80%;
  }
  .el-divider{
    border: 0;
  }
  
  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
  }
  
  .image-section {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>