<template>
    <div class="img-content">
        <el-row :gutter="0">
            <el-col v-for="image in images" :key="image.id" :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                <img :src="image.url" class="image" alt="image.description" />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { ElRow, ElCol } from 'element-plus';

export default {
    components: {
        ElRow,
        ElCol,
    },
    data() {
        return {
            images: [
                // Mock data; replace with actual data and image URLs from an API
                { id: 1, url: 'http://localhost:5173/public/cloud_3.png', description: 'Image 1' },
                { id: 1, url: 'http://localhost:5173/public/cloud_3.png', description: 'Image 1' },
                { id: 1, url: 'http://localhost:5173/public/cloud_3.png', description: 'Image 1' },
                { id: 1, url: 'http://localhost:5173/public/cloud_3.png', description: 'Image 1' },
            ]
        };
    },
};
</script>

<style scoped>
.el-row {
    /* z-index: -1; */
    height: 50px;
}
.img-content{
    overflow: hidden;
}
.image {
    width: 100%;
    height: 20%;
    object-fit: contain;
    animation: slide 5s infinite linear;
}

@keyframes slide {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>