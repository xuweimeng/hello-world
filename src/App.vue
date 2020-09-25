<template>
  <div id="app">
    App
    <parsent></parsent>
    <br>
    <child></child>

  </div>
</template>

<script>
import Parsent from '@/containers/Parsent';
import Child from '@/containers/Child';
export default {
  name: 'App',
  components: {
    Parsent,
    Child
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
