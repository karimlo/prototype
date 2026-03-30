<script setup>
import { useRouter } from 'vue-router'

defineProps({ open: Boolean })
const emit = defineEmits(['close'])
const router = useRouter()

const navLinks = [
  {
    label: 'Home', to: '/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`
  },
  {
    label: 'Accounts', to: '/accounts',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg>`
  },
  {
    label: 'Spending', to: '/spending',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>`
  },
  {
    label: 'Opportunities', to: '/more',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>`
  },
]

function navigate(to) {
  router.push(to)
  emit('close')
}
</script>

<template>
  <!-- Backdrop -->
  <Transition name="fade">
    <div
      v-if="open"
      class="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
      @click="emit('close')"
    />
  </Transition>

  <!-- Slide-in drawer -->
  <Transition name="slide-right">
    <div
      v-if="open"
      class="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden
        bg-white dark:bg-gray-900
        shadow-2xl flex flex-col"
    >
      <!-- Header -->
      <div class="flex items-center justify-between px-5 h-16 border-b border-gray-100 dark:border-gray-800">
        <span class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Menu</span>
        <button
          @click="emit('close')"
          class="w-8 h-8 flex items-center justify-center rounded-full
            text-gray-400 hover:text-gray-600 dark:hover:text-gray-200
            hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Nav links -->
      <nav class="flex-1 overflow-y-auto py-4 px-3">
        <button
          v-for="link in navLinks"
          :key="link.to"
          @click="navigate(link.to)"
          class="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl mb-1
            text-gray-700 dark:text-gray-300
            hover:bg-gray-50 dark:hover:bg-gray-800
            transition-all duration-200 text-left"
        >
          <span v-html="link.icon" class="flex-shrink-0 text-gray-500 dark:text-gray-400" />
          <span class="font-medium text-sm">{{ link.label }}</span>
        </button>
      </nav>

      <!-- Footer -->
      <div class="px-5 py-4 border-t border-gray-100 dark:border-gray-800">
        <p class="text-xs text-gray-400 dark:text-gray-600 text-center">SCOUT · Athlete Finance</p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-right-enter-active, .slide-right-leave-active { transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.slide-right-enter-from, .slide-right-leave-to { transform: translateX(100%); }


</style>

