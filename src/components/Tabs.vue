<template>
  <v-card class="">
    <v-toolbar color="primary" class="">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Your Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="value" align-tabs="title" >
          <v-tab v-for="(tab, index) in tabs" :key="tab.id" :value="tab.id">
            {{ tab.label }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-window v-model="value" class="">
      <v-window-item v-for="(tab, index) in tabs" :key="tab.id" :value="tab.id" class="">
        <v-card flat color="white" class="">
          <v-card-text class="black--text">
            <h2>{{ tab.title }}</h2>
            <p>{{ tab.content }}</p>
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import { ref, onMounted } from 'vue';
// import { VTab, VTabs, VWindow, VWindowItem, VCard, VCardText, VToolbar, VAppBarNavIcon, VToolbarTitle, VSpacer, VBtn, VIcon } from 'vuetify';

export default {
  name: 'Tabs',
  components: {
    
  },
  setup() {
    const value = ref(0);
    const tabs = ref([]);

    onMounted(async () => {
      const response = await fetch('http://localhost:3003/tabs');
      tabs.value = await response.json();
    });

    return { value, tabs };
  }
};
</script>
<style>

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>