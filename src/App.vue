<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import MobileMenu from './components/MobileMenu.vue'
import AppBottomNav from './components/AppBottomNav.vue'
import AIChatBox from './components/AIChatBox.vue'

const route = useRoute()
const mobileMenuOpen = ref(false)
const chatOpen = ref(false)

const isLoginPage = () => route.meta.public === true
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">

    <template v-if="!isLoginPage()">
      <!-- Header -->
      <AppHeader @toggle-menu="mobileMenuOpen = true" />
      <!-- Mobile slide-in menu -->
      <MobileMenu :open="mobileMenuOpen" @close="mobileMenuOpen = false" />
    </template>

    <!-- Main content -->
    <main :class="!isLoginPage() ? 'pt-16 pb-20 md:pb-0' : ''">
      <router-view v-slot="{ Component }">
        <Transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>

    <template v-if="!isLoginPage()">
      <!-- Mobile bottom nav -->
      <AppBottomNav @open-chat="chatOpen = true" />
      <!-- AI Chat box -->
      <AIChatBox :open="chatOpen" @close="chatOpen = false" />
    </template>

  </div>
</template>

<style>
.page-fade-enter-active, .page-fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.page-fade-enter-from { opacity: 0; transform: translateY(8px); }
.page-fade-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
