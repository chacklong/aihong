<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="qrcode">
                <img src="../assets/images/footer.jpg" alt="微信公众号二维码" />
                <p>扫描关注我们的微信公众号</p>
            </div>
            <div class="info">
                <p>© 2022 Chacklong. All rights reserved.</p>
                <p>粤ICP备12345678号</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "iFooter",
}
</script>

<style scoped>
.footer {
    background-color: #276749;
    padding: 2rem 0;
    text-align: center;
    color: #fff;
    margin-top: 50px;
}
.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.qrcode img {
    width: 100px;
    height: 100px;
    border-radius: 12px;
}

.info p {
    margin: 0;
}

@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
    }

    .qrcode, .info {
        margin-bottom: 1rem;
    }
}
</style>