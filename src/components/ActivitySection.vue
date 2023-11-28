<template>
    <section class="activity-section">
      <div class="icon-content">
        <img class="icon-left" src="../assets/images/running_4.png" alt="">
        <!-- <img class="icon-right" src="../assets/images/running_2.png" alt=""> -->
      </div>
      <div class="activity-content">
        <h1 class="activity-title">活动中心</h1>
        <p class="activity-subtitle">了解我们最新的发展和创新，与我们的成长一同前行。</p>
        <el-button size="large" type="success" plain>进入活动</el-button>
      </div>
    </section>
  </template>
  
  <script>
  import { ElButton } from 'element-plus';
  
  export default {
    name: 'ActivitySection',
    components: {
      ElButton,
    },
  }
  </script>
  
  <style scoped>
  .activity-section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    background: var(--main-bg);
    backdrop-filter: var(--backdrop-blur-6);
  }
  
  .activity-content {
    text-align: center;
    height: 50%;
    width: 100%;
    padding: 22px;
    margin-left: 12px;
    margin-right: 12px;
    z-index: 2;
    justify-content: space-between;
  }
  .icon-content {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: space-between;
  }
  .icon-content .icon-left {
    width: 200px;
    height: 200px;
    margin-left: -700px;
  }
  .icon-content .icon-right {
    width: 100px;
    height: 20%;
    margin-right: -700px;
  }
  .icon-content img{
    width: 100%;
    height: 120px;
  }
  
  .activity-title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .activity-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    .activity-title {
      font-size: 2rem;
    }
  
    .activity-subtitle {
      font-size: 1rem;
    }
  }
  </style>