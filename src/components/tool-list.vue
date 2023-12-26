<template>
    <div class="tool-container">
        <div class="tool-inner">
            <div class="tool-item"><i class="iconfont icon-measure"></i></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToolList',
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.tool-container {
    width: 3vw;
    background-color: transparent;
    height: 100%;
    padding: 16px;
    .tool-inner {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .tool-item{
            height: 40px;
            width: 40px;
            color: #eee;
            border: 2px solid #348CFD;
            border-radius: 8%;
            cursor: pointer;
            background-color: #424c50;
            display: flex;
            justify-content: center;
            align-items: center;
            .iconfont {
                font-size: 30px;
            }
        }
    }
} 
</style>