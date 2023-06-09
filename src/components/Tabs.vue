
<script setup>
import { ref } from 'vue';

const tabs = ref([
  {
    id: 1,
    tabTitle: 'Tab 1',
    title: 'Title 1',
    content: 'In sint do non adipisicing incididunt excepteur sit. Voluptate esse aliqua pariatur dolor ex occaecat sunt eu. Pariatur ullamco id dolore sint proident sint nostrud nisi sit id est. Duis et excepteur cupidatat sint nisi dolore qui irure qui in id excepteur irure laboris. Pariatur mollit duis cupidatat nisi Lorem non et in dolor aliquip ea sint aute. Dolore aute duis laboris exercitation occaecat sunt. Enim veniam Lorem do ipsum aliqua qui eu ipsum consectetur ex dolore ea ipsum.'
  },
  {
    id: 2,
    tabTitle: 'Tab 2',
    title: 'Title 2',
    content: 'Non aliquip fugiat velit ad officia Lorem tempor cillum incididunt elit proident mollit. Reprehenderit qui nisi ut occaecat minim velit deserunt occaecat quis magna mollit. Veniam proident consectetur sunt mollit est magna Lorem voluptate enim cupidatat consequat. Et pariatur aliquip commodo nisi deserunt exercitation enim officia voluptate in nisi. Eu ea esse qui est ea pariatur nostrud non elit irure. Ad exercitation Lorem exercitation ipsum eiusmod ea duis ad mollit veniam aliquip veniam. Lorem pariatur elit ea duis.'
  },
  {
    id: 3,
    tabTitle: 'Tab 3',
    title: 'Title 3',
    content: 'Deserunt et elit elit ad dolor magna. Nisi amet consectetur Lorem eiusmod dolore adipisicing do reprehenderit. Voluptate consequat magna nostrud in officia labore. Minim excepteur consectetur quis nostrud nisi magna duis sunt sint qui. Fugiat ea reprehenderit eiusmod proident officia. Consequat labore qui velit Lorem consectetur incididunt ut nisi.'
  },
  {
    id: 4,
    tabTitle: 'Tab 4',
    title: 'Title 4',
    content: 'Minim in dolor do fugiat laborum duis labore consectetur. Amet ut sint ipsum dolor ad nostrud commodo sunt veniam enim aliquip nulla sint ullamco. Do cupidatat et quis laborum esse est commodo. Commodo sunt consectetur do consequat minim occaecat id magna ullamco consequat irure.'
  }
])
const currentTab = ref(1)
const handleTabClick = (tabId) => {
  currentTab.value = tabId;
};

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
