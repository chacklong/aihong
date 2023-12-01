<template>
    <el-menu
      :default-active="activeIndex"
      class="navbar"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <img
          style="border-radius: 100%;width: 50px;"
          src="../../assets/images/logo.png"
          alt="logo"
        />
        <span class="logo-title" style="margin-left: 12px;font-size: 20px;">矮红村</span>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1" @click="()=>router.push('/')">首页</el-menu-item>
      <el-menu-item index="2" @click="()=>router.push('/dev')">关于我们</el-menu-item>
      <el-menu-item index="3" @click="()=>router.push('/dev')">最新村报</el-menu-item>
      <el-menu-item index="4" @click="()=>router.push('/dev')">村委会</el-menu-item>
      <el-menu-item index="4" @click="()=>router.push('/dev')">助农</el-menu-item>
    </el-menu>
    <!-- <transition name="fade">
      <router-view></router-view>
    </transition> -->
  </template>
  
  <script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
    let latestScrollTop = ref(0)
    const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const navbar = document.querySelector('.navbar') as HTMLElement; // Type assertion

  if (scrollTop > latestScrollTop.value) {
    // Scrolling down
    const opacity = Math.max(0, 1 - scrollTop / 200);
    if (navbar) {
      navbar.style.opacity = String(opacity);
    }
  } else {
    // Scrolling up
    if (navbar) {
      navbar.style.opacity = '1';
    }
  }

  latestScrollTop.value = scrollTop;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
  </script>
  
  <style scoped>
  .flex-grow {
    flex-grow: 1;
  }
  .navbar {
    background-color: rgba(201, 207, 212, 0.581) !important; 
    backdrop-filter: blur(2px); 
    background-color: var(--el-menu-active-color);
    transition: opacity 0.5s ease-in-out;
    position: fixed;
    top: 0 ;
    left: 0 ;
    width: 100% ;
    z-index: 999 ;
}
.navbar-hidden {
  top: -100px;
}
  </style>
  