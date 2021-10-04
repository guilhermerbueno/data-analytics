<template>
  <div
    data-analytics-show 
    data-analytics-event="my-page-click"
    data-analytics-event-category="my-application:my-page"
    data-analytics-event-action="click:my-button"
    data-analytics-event-label="my-label-button"
    data-analytics-screen-name="my-page"
    data-analytics-dimension-22="my-dimension-value"
    id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
