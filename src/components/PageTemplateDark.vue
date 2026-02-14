<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Dark Menu -->
    <DarkMenu />

    <!-- Main Content Area (Empty for now) -->
    <main class="main-content">
      <div class="container mx-auto px-4 py-8">
        <!-- Content will go here -->
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup>
import DarkMenu from './DarkMenu.vue'
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - 80px);
}
</style>

