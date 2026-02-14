<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Top Menu -->
    <ResponsiveMenu 
      :brand-name="brandName"
      :menu-items="menuItems"
    />

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
import { ref } from 'vue'
import ResponsiveMenu from './ResponsiveMenu.vue'

// Props
const props = defineProps({
  brandName: {
    type: String,
    default: 'MyApp'
  },
  menuItems: {
    type: Array,
    default: () => [
      { name: 'Dashboard', href: '#dashboard', icon: '📊', active: true },
      { name: 'Projects', href: '#projects', icon: '📁' },
      { name: 'Team', href: '#team', icon: '👥' },
      { name: 'Analytics', href: '#analytics', icon: '📈' },
      { name: 'Settings', href: '#settings', icon: '⚙️' }
    ]
  }
})
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - 80px);
}
</style>

