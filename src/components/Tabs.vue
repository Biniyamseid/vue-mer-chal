<template>
  <div>
    <ul>
      <li v-for="tab in tabs" :key="tab.id" @click="selectTab(tab)">
        {{ tab.label }}
      </li>
    </ul>
    <div v-if="selectedTab">
      <h3>{{ selectedTab.label }}</h3>
      <p>{{ selectedTab.content }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'Tabs',
  setup() {
    const tabs = ref([]);
    const selectedTab = ref(null);

    const fetchTabs = async () => {
      try {
        const response = await axios.get('http://localhost:3003/tabs');
        tabs.value = response.data;
      } catch (error) {
        console.error('Failed to fetch tabs:', error);
      }
    };

    const selectTab = (tab) => {
      selectedTab.value = tab;
    };

    onMounted(() => {
      fetchTabs();
    });

    return { tabs, selectedTab, selectTab };
  }
}
</script>
