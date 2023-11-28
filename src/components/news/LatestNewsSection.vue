<template>
    <section class="latest-news">
      <el-row :gutter="20">
        <el-col :span="24">
          <h2 class="section-title">最新村报</h2>
        </el-col>
        <el-col
          v-for="newsItem in newsItems"
          :key="newsItem.id"
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6"
          :xl="4"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
          >
            <img
              :src="newsItem.imageUrl"
              class="news-image"
              alt="newsItem.title"
            />
            <div style="padding: 14px;">
              <h3 class="news-title">{{ newsItem.title }}</h3>
              <div class="news-summary">{{ newsItem.summary }}</div>
              <!-- <el-button type="text" @click="goToNews(newsItem.link)" style="color: #67C23A;">阅读更多</el-button> -->
              <el-link  @click="goToNews(newsItem.link)" type="success">查看村报</el-link>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>
  </template>
  
  <script>
  import { ElRow, ElCol, ElCard } from 'element-plus';
  
  export default {
    components: {
      ElRow,
      ElCol,
      ElCard,
    },
    data() {
      return {
        newsItems: [
          // Mock data; replace with actual data and image URLs from an API
          { id: 1, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
          { id: 1, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
          { id: 1, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
          { id: 1, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
          { id: 1, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
          { id: 1, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
          { id: 1, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
          { id: 1, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
          { id: 1, title: '新闻标题1', summary: '摘要信息...', link: '#', imageUrl: 'http://localhost:5173/public/bg.jpg' },
          // ...more news items
        ]
      };
    },
    methods: {
      goToNews(link) {
        // Logic to navigate to the news detail page
        window.location.href = link;
      }
    }
  };
  </script>
  
  <style scoped>
  .el-row ,
  .el-col {
    margin: 0 !important;
    margin-top: 14px !important;
  }
  
  .latest-news {
    padding: 2rem 0;
    background: var(--main-bg);
    backdrop-filter: var(--backdrop-blur);
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
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
  </style>
  