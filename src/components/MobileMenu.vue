<script setup>
import { useRouter } from 'vue-router'

defineProps({ open: Boolean })
const emit = defineEmits(['close'])
const router = useRouter()

const navLinks = [
  { label: 'Home', to: '/', icon: '🏠' },
  { label: 'Accounts', to: '/accounts', icon: '🏦' },
  { label: 'Investments', to: '/investments', icon: '📈' },
  { label: 'Expenses', to: '/expenses', icon: '💳' },
  { label: 'Loans', to: '/loans', icon: '🏛️' },
  { label: 'Credit Cards', to: '/credit-cards', icon: '💰' },
  { label: 'Retirement', to: '/retirement', icon: '🎯' },
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
          <span class="text-xl">{{ link.icon }}</span>
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

