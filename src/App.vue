<script setup>
import Tabs from './components/Tabs.vue'
</script>

<template>
  <Tabs />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: black;
  font-family: 'Roboto', sans-serif;
  margin: 20px;
}

h1 {
  color: white;
  font-weight: 500;
  text-align: center;
  margin: 60px 0;
}

footer {
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin: 50px 0;
}

footer a {
  color: #999999;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
</style>
