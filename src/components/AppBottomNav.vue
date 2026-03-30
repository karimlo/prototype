<script setup>
import { useRoute } from 'vue-router'

const emit = defineEmits(['open-chat'])
const route = useRoute()

const navLinks = [
  {
    label: 'Accounts', to: '/accounts',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg>`
  },
  {
    label: 'Investments', to: '/investments',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>`
  },
  {
    label: 'Spending', to: '/spending',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>`
  },
  {
    label: 'More', to: '/more',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>`
  },
]
</script>

<template>
  <nav class="fixed left-3 right-3 z-40 md:hidden floating-nav
    bg-white/95 dark:bg-gray-950/95 backdrop-blur-md
    border border-gray-200 dark:border-gray-800
    rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/40
    transition-colors duration-300">
    <div class="flex items-stretch h-[4.25rem]">
      <!-- Nav links -->
      <router-link
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="flex-1 flex flex-col items-center justify-center gap-1 px-1 relative
          text-gray-400 dark:text-gray-500
          transition-all duration-300
          [&.router-link-active]:text-scout"
      >
        <span v-html="link.icon" />
        <!-- Label slides in when active -->
        <span
          class="text-[10px] font-medium overflow-hidden transition-all duration-300 leading-tight text-center"
          :class="route.path === link.to ? 'max-h-4 opacity-100' : 'max-h-0 opacity-0'"
        >{{ link.label }}</span>
        <!-- Active indicator dot -->
        <span
          v-if="route.path === link.to"
          class="absolute top-1 w-1 h-1 rounded-full bg-scout"
        />
      </router-link>

      <!-- Divider -->
      <div class="w-px my-3 bg-gray-200 dark:bg-gray-800 flex-shrink-0" />

      <!-- AI Assistant button — gradient accent, visually separate -->
      <button
        @click="emit('open-chat')"
        class="flex items-center justify-center px-4 self-center
          transition-all duration-300 group"
      >
        <div class="flex flex-col items-center gap-1">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center
            bg-gradient-to-br from-violet-500 to-indigo-600
            shadow-md shadow-violet-500/30
            group-hover:shadow-lg group-hover:shadow-violet-500/40
            group-active:scale-95 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
            </svg>
          </div>
          <span class="text-[10px] font-semibold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">AI</span>
        </div>
      </button>
    </div>
  </nav>
</template>

<style scoped>
/* Float above the browser chrome + device safe area (home indicator / gesture bar) */
.floating-nav {
  bottom: calc(env(safe-area-inset-bottom) + 0.75rem);
}
</style>
