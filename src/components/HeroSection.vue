<template>
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">发现最新的动向</h1>
        <p class="hero-subtitle">了解我们最新的发展和创新，与我们的成长一同前行。</p>
        <el-button size="large" plain>了解更多</el-button>
      </div>
    </section>
  </template>
  
  <script>
  import { ElButton } from 'element-plus';
  import '../assets/components/hero.scss'
  export default {
    name: 'HeroSection',
    components: {
      ElButton,
    },
    // Component logic goes here
  }
  </script>
  
  <style scoped>
  .hero-section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: var(--main-bg);
    backdrop-filter: var(--backdrop-blur);
  }
  .hero-content {
    text-align: center;
    max-width: 600px;
  }
  
  .hero-title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }
  
    .hero-subtitle {
      font-size: 1rem;
    }
  }
  </style>