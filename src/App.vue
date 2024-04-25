<template>
  <div id="app" class="d-flex justify-center align-center" style="height: 100vh;">
    <Tabs />
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue';

export default {
  name: 'App',
  components: {
    Tabs
  }
};
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