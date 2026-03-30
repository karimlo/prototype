<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import MobileMenu from './components/MobileMenu.vue'
import AppBottomNav from './components/AppBottomNav.vue'
import AIChatBox from './components/AIChatBox.vue'
import DesktopAIPanel from './components/DesktopAIPanel.vue'
import { useDesktopChat } from './composables/useDesktopChat.js'

const route = useRoute()
const mobileMenuOpen = ref(false)
const chatOpen = ref(false)

// Computed ensures the header/nav/padding update the instant the route changes —
// avoids the iOS Safari "pinch to repaint" timing glitch.
const isLoginPage = computed(() => route.meta.public === true)

const { isOpen: desktopChatOpen, panelWidth } = useDesktopChat()
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">

    <template v-if="!isLoginPage">
      <!-- Header -->
      <AppHeader @toggle-menu="mobileMenuOpen = true" />
      <!-- Mobile slide-in menu -->
      <MobileMenu :open="mobileMenuOpen" @close="mobileMenuOpen = false" />
    </template>

    <!-- Main content — padding-right shifts content left when desktop panel is open -->
    <main
      :class="!isLoginPage ? 'pt-16 pb-32 md:pb-0' : ''"
      :style="!isLoginPage && desktopChatOpen ? { paddingRight: panelWidth + 'px' } : {}"
      class="transition-[padding-right] duration-300"
    >
      <router-view v-slot="{ Component }">
        <Transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>

    <template v-if="!isLoginPage">
      <!-- Mobile bottom nav -->
      <AppBottomNav @open-chat="chatOpen = true" />
      <!-- Mobile AI Chat box (slide-up modal) -->
      <AIChatBox :open="chatOpen" @close="chatOpen = false" />
      <!-- Desktop AI Panel (fixed right panel, desktop only) -->
      <DesktopAIPanel />
    </template>

  </div>
</template>

<style>
.page-fade-enter-active, .page-fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.page-fade-enter-from { opacity: 0; transform: translateY(8px); }
.page-fade-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
