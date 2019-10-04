<template>
  <div id="app">
    <projectCards/>
  </div>
</template>

<script>
import ProjectCards from './components/projectCards.vue'

export default {
  name: 'app',
  components: {
    ProjectCards
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  body {
    margin: 0px;
    padding: 0px;
    background-color: #f0f0f0;
    overflow: hidden;
  }
</style>
