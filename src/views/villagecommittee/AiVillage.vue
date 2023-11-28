<template>
    <el-container>
      <el-main>
        <div class="content">
          <div class="" style="border: 1px solid red;min-height: 72.3vh;">
            <h2>欢迎来到矮红村村委会</h2>
          <p>这里是矮红村的管理和服务中心，我们致力于为村民提供全方位的服务和支持。</p>
          <p>在这里，你可以找到关于村庄的最新动态、活动安排、政策解读以及各类村务公开信息。</p>
          <p>我们期待您的参与和建议，共同打造更加美好的矮红村。</p>
          </div>
        </div>
        <div class="content func-box">
          <div class="">
            <h2>欢迎来到矮红村村委会</h2>
          <p>这里是矮红村的管理和服务中心，我们致力于为村民提供全方位的服务和支持。</p>
          <p>在这里，你可以找到关于村庄的最新动态、活动安排、政策解读以及各类村务公开信息。</p>
          <p>我们期待您的参与和建议，共同打造更加美好的矮红村。</p>
          </div>
          
        </div>
      </el-main>
  
      <el-footer>
        <p>联系我们: xxx@xxx.com | 电话: 123-456-7890</p>
      </el-footer>
    </el-container>
  </template>
  
  <script lang="ts" setup>
  import { ElContainer, ElHeader, ElMain, ElFooter } from 'element-plus';
  
  // 这里可以添加一些逻辑或数据处理
  </script>
  
  <style scoped>
  .el-main {
  display: flex;
  justify-content: space-between; /* 使两个内容部分平均分布 */
  padding: 20px;
}

  .el-header {
    /* background-color: #81E6D9; */
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 20px;
  }
  
  .content {
  flex: 1; /* 让每个内容区域拥有相同的空间 */
  padding: 10px; /* 或根据需要调整 */
  margin: 0 10px; /* 添加一些外边距 */
  min-height: 100vh;
  }
  .content .bg{
    border: 1px solid #ec0909;
  }
  .function{
    flex: 2;
  }
  .func-box {
    border: 1px solid #ec0909;
    max-width: 300px;

  }
  
  .el-footer {
    background-color: #276749;
    color: white;
    text-align: center;
    padding: 10px;
  }
  @media (max-width: 768px) {
  .el-main {
    flex-direction: column;
  }
  .content {
    margin: 10px 0; /* 调整为垂直外边距 */
  }
}
  </style>
  