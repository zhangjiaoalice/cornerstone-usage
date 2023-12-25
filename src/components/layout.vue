<template>
    <div class="cornerstone-demo-container">
        <header-nav/>
        <div class="layout-content__inner">
            <tool-list/>
            <image-viewport/>
        </div>
    </div>
</template>

<script>
import HeaderNav from './header-nav.vue';
import ToolList from './tool-list.vue';
import ImageViewport from './image-viewport.vue';
export default {
    name: 'PageLayout',
    components: {
        HeaderNav,
        ToolList,
        ImageViewport,
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.cornerstone-demo-container {
    width: 100%;
    height: 100%;
    background-color: #282A36;
    margin: 0;
    .layout-content__inner {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
}
</style>