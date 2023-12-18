<template>
  <div id="app">
    <ImageViewport/>
  </div>
</template>

<script>
import ImageViewport from './components/image-viewport.vue'

export default {
  name: 'App',
  components: {
    ImageViewport
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
