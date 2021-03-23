<template>
  <div id="app">
    <el-button @click="setAa" >发送</el-button>
    {{aa}}
    <parsent :aa="b"></parsent>
    <!-- App
    <parsent></parsent>
    <br>
    <child></child> -->

    <!-- <hello-world></hello-world> -->
  </div>
</template>

<script>
import Parsent from '@/containers/Parsent';
// import Child from '@/containers/Child';
// import HelloWorld from '@/components/HelloWorld';
export default {
  name: 'App',
  data() {
    return{
      aa: 1, 
      b:2
    }
  },
  components: {
    Parsent,
    // Child,
    // HelloWorld
  },
  methods: {
    setAa() {
      this.aa++
    }
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
