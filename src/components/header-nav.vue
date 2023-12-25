<template>
    <div class="header-nav-container">
        <div class="header-title">
            <img class="logo" src="../assets/images/platform-logo.png" alt="" width="62" height="40">
            <span>医学影像成像平台-学习版</span>
        </div>
        <div class="help-docs">
            帮助文档
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header Nav',
    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
.header-nav-container {
    width: 100%;
    height: 65px;
    border-bottom: 1px solid #bbb;
    box-shadow: 2px 2px 20px #8989;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    justify-content: space-between;
    .header-title {
        color: #cece;
        font-size: 20px;
        font-weight: bolder;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }
    .help-docs {
        color: aquamarine;
        font-size: 20px;
    }
}
.logo {
    margin: 0 -8px 0 12px;
}
</style>