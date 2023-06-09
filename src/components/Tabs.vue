
<script setup>
import { ref } from 'vue';
import { ApiWrapper } from '../api';
const tabs = ref([])
const currentTab = ref(1)
const handleTabClick = (tabId) => {
  currentTab.value = tabId;
};

async function getData() {
  const res = await ApiWrapper.get('/tabs')
  const data = res.data;
  tabs.value = data
}

getData()
</script>

<template>
  <div class="container">
    <!-- TODO: Add tabs here -->
    <div class="tabs">
      <button v-for="tab in tabs" :key="tab.id" :id="tab.id" :disabled="currentTab === tab.id"
        @click="handleTabClick(tab.id)">{{ tab.tabTitle }}</button>
    </div>
    <div class="content">
      <div v-for="tab in tabs" :key="tab.id">
        <div v-if="currentTab === tab.id">
          <p class="title">{{ tab.title }}</p>
          <p>{{ tab.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your CSS styles here */


.container {
  width: 960px;
  margin: 0 auto;
}

.tabs {
  display: flex;
  justify-content: space-between;
}

.tabs button {
  background-color: lightgray;
  border: none;
  color: #888888;
  cursor: pointer;
  padding: 25px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.5s ease-out;
}

.tabs button:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.15);
}

.tabs button:disabled {
  background: rgb(5, 89, 122);
  color: white;
}

.title {
  color: black;
  font-size: medium;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
}

.content {
  padding: 50px 80px;
  background-color: white;
  font-weight: 300;
  line-height: 30px;
  font-size: 16px;
  text-align: justify;
  color: black
}

.content,
button {
  font-size: 15px;
}

@media only screen and (max-width: 960px) {

  .container {
    width: 100%;
  }

  .content {
    padding: 50px;
  }
}
</style>
