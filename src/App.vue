<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import MobileMenu from './components/MobileMenu.vue'
import AppBottomNav from './components/AppBottomNav.vue'
import AIChatBox from './components/AIChatBox.vue'

const mobileMenuOpen = ref(false)
const chatOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <!-- Header -->
    <AppHeader @toggle-menu="mobileMenuOpen = true" />

    <!-- Mobile slide-in menu -->
    <MobileMenu :open="mobileMenuOpen" @close="mobileMenuOpen = false" />

    <!-- Main content — padded for header and mobile bottom nav -->
    <main class="pt-16 pb-20 md:pb-0">
      <router-view v-slot="{ Component }">
        <Transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>

    <!-- Mobile bottom nav -->
    <AppBottomNav @open-chat="chatOpen = true" />

    <!-- AI Chat box -->
    <AIChatBox :open="chatOpen" @close="chatOpen = false" />
  </div>
</template>

<style>
.page-fade-enter-active, .page-fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.page-fade-enter-from { opacity: 0; transform: translateY(8px); }
.page-fade-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
