<template>
  <div class="main-layout">
    <TopNavBar />
    <SideNavBar />
    <main class="main-content">
      <PageHeader 
        :title="pageTitle" 
        :subtitle="pageSubtitle" 
      />
      <PageBody />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TopNavBar from './TopNavBar.vue'
import SideNavBar from './SideNavBar.vue'
import PageHeader from './PageHeader.vue'
import PageBody from './PageBody.vue'

const pageTitle = ref('Dashboard')
const pageSubtitle = ref('Welcome back! Here\'s what\'s happening today.')
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  background-color: #f9fafb;
}

.main-content {
  margin-left: 250px;
  margin-top: 60px;
  min-height: calc(100vh - 60px);
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 200px;
  }
}
</style>

