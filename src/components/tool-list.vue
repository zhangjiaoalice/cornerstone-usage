<template>
    <div class="tool-container">
        <div class="tool-inner">
            <div class="tool-item">工具1</div>
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
            height: 42px;
            width: 42px;
            font-size: 12px;
            color: #eee;
            border: 1px solid #007ACC;
            border-radius: 8%;
            cursor: pointer;
        }
    }
} 
</style>