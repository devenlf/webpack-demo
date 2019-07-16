<!-- app.vue -->
<template>
  <div id="app">
    {{`hello world${devText.BASE_URL}`}}
  </div>
</template>

<script>
import dev from './../config/index'
import './theme/list.less'
export default {
  name: 'app',
  data(){
    return {
      devText: dev
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  transform: rotate(0deg);
}
</style>

