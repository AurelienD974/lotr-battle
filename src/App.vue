<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import '@/bootstrap/dist/css/bootstrap.css'

export default Vue.extend({
  name: 'app',
  components: {

  },
});
</script>

<style lang="scss">
#app {

  font-family: 'Open sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
