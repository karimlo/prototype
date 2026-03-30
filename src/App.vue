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

const { isOpen: desktopChatOpen, panelWidth, toggle: toggleDesktopChat } = useDesktopChat()
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

      <!-- Desktop floating AI button — bottom-right, hidden on mobile -->
      <button
        @click="toggleDesktopChat()"
        class="hidden md:flex fixed bottom-6 right-6 z-50
          w-14 h-14 items-center justify-center rounded-2xl
          bg-gradient-to-br from-violet-500 to-indigo-600
          shadow-lg shadow-violet-500/40
          hover:shadow-xl hover:shadow-violet-500/50 hover:scale-105
          active:scale-95 transition-all duration-200"
        :class="desktopChatOpen ? 'ring-2 ring-white/40' : ''"
        aria-label="Toggle SCOUT AI"
      >
        <!-- Sparkle icon when closed, X when open -->
        <Transition name="icon-swap" mode="out-in">
          <svg v-if="!desktopChatOpen" key="open" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
          </svg>
          <svg v-else key="close" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </Transition>
      </button>
    </template>

  </div>
</template>

<style>
.page-fade-enter-active, .page-fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.page-fade-enter-from { opacity: 0; transform: translateY(8px); }
.page-fade-leave-to { opacity: 0; transform: translateY(-8px); }

.icon-swap-enter-active, .icon-swap-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.icon-swap-enter-from { opacity: 0; transform: scale(0.6) rotate(-30deg); }
.icon-swap-leave-to { opacity: 0; transform: scale(0.6) rotate(30deg); }
</style>
