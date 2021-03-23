<template>
  <div class="container">
    <div class="box" id="box"></div>
  </div>
</template>

<script>
import { Viewer } from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
import zhanting from '../assets/zhanting.jpg';

export default {
  name: 'HelloWorld',
  mounted () {
    this.initPanorama();
  },
  methods: {
    initPanorama() {
      const viewer = new Viewer({
        container: document.querySelector('#box'),
        panorama: zhanting,
        caption: '720全景图',
        // plugins: [
        //   // Viewer.GyroscopePlugin,
        //    Viewer.SettingsPlugin,
        // ],
        navbar: false
      });
      console.log(viewer);
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
}

.box {
  width: 80vw;
  height: 60vh;
  border-radius: 10px;
  border: 1px solid #4a4a4a;
}
</style>
