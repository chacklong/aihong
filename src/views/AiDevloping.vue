<template>
  <div class="not-found">
    <el-card>
      <div class="not-found-content">
        <h2>505 Not Found</h2>
        <p>抱歉，正在加班加点开发中...</p>
        <p>Sorry, we are working overtime and developing...</p>
      </div>
    </el-card>
    <!-- <el-card>
      <div class="not-found-content" v-if="user">
        <h2>mock 测试</h2>
        <p>ID: {{ user.id }}</p>
        <p>Name: {{ user.name }}</p>
      </div>
    </el-card> -->
  </div>
</template>

<script lang="ts" setup> 
// AiDevloping.vue
// import { instance as axios } from '../utils/mock'
// import {ref, onMounted} from 'vue'

// const user = ref(null as any)

// onMounted(async ()=>{
//   const response = await axios.get('/api/user')
//   user.value = response.data.users[0]
//   console.log(response.data.users[0].name)
// })
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.not-found-content {
  text-align: center;
}
</style>
