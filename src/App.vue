<template>
  <div id="app">
    <page-layout/>
  </div>
</template>

<script>
// import ImageViewport from '@/components/image-viewport.vue'
import PageLayout from '@/components/layout.vue';

export default {
  name: 'App',
  components: {
    PageLayout,
  }
}
</script>

<style>
body{
  padding: unset;
  margin: unset;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>
