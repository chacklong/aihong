<template>
  <section class="latest-news">
    <div class="container">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="container-title">
            <h2 class="section-title">最新村报</h2>
          </div>
        </el-col>
        <div>
          <el-col v-for="newsItem in newsItems" :key="newsItem.id" :span="8">
            
          </el-col>
        </div>
      </el-row>
    </div>
  </section>
</template>
  
<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import { ElRow, ElCol, ElCard } from 'element-plus';

const newsItems = ref([
  { id: 1, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
  { id: 2, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
  { id: 3, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
  { id: 4, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
  { id: 5, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
  { id: 6, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
  { id: 7, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
  { id: 8, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
  { id: 9, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
]);

const goToNews = (link: string) => {
  window.location.href = link;
};

onBeforeMount(() => {
  setTimeout(() => { // 确保 DOM 元素已渲染
    const cards = document.querySelectorAll('.slide-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      observer.observe(card);
    });
  }, 0);
});
const startAnimation = (entries: any[], observer: { unobserve: (arg0: any) => void; }) => {
  entries.forEach((entry: { isIntersecting: any; target: { classList: { add: (arg0: string) => void; }; }; }) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
};
</script>
  
<style scoped>
.el-row,
.el-col {
  margin: 0 !important;
  margin-top: 14px !important;
}

.container {
  border: 1px #276749 solid;
  padding: 12px;
  background-color: #276749;
  backdrop-filter: var(--backdrop-blur-1);
}

.latest-news {
  padding: 2rem 0;
  background: var(--aihong-bg-color-5);
  backdrop-filter: var(--backdrop-blur-4);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3 rem;

}

.news-image {
  width: 100%;
  object-fit: cover;
}

.news-title {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

.news-summary {
  margin-bottom: 1rem;
  color: #666;
}

.el-link {
  color: #276749;
}

.el-link:hover {
  color: #4A5568;
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
  animation: slideIn 3s ease-out;
  transform-origin: center;
}

.animate {
  animation: slideIn 3s ease-out;
}

@media (max-width: 768px) {
  .slide-in {
    animation: slideIn 3s ease-out;
  }
}</style>
  