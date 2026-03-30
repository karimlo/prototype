<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({ open: Boolean })
const emit = defineEmits(['close'])
const router = useRouter()

const accountsExpanded = ref(true)

const topLinks = [
  {
    label: 'Home', to: '/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`
  },
  {
    label: 'Investments', to: '/investments',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>`
  },
  {
    label: 'Spending', to: '/spending',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>`
  },
]

const accountSubLinks = [
  {
    label: 'Loans', to: '/loans',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`
  },
  {
    label: 'Credit Cards', to: '/credit-cards',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>`
  },
  {
    label: 'Retirement', to: '/retirement',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>`
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
        <!-- Home -->
        <button
          @click="navigate(topLinks[0].to)"
          class="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl mb-1
            text-gray-700 dark:text-gray-300
            hover:bg-gray-50 dark:hover:bg-gray-800
            transition-all duration-200 text-left"
        >
          <span v-html="topLinks[0].icon" class="flex-shrink-0 text-gray-500 dark:text-gray-400" />
          <span class="font-medium text-sm">{{ topLinks[0].label }}</span>
        </button>

        <!-- Accounts parent — tappable row + chevron toggle -->
        <div class="mb-1">
          <div class="flex items-center rounded-xl overflow-hidden
            hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
            <button
              @click="navigate('/accounts')"
              class="flex-1 flex items-center gap-4 px-4 py-3.5 text-left"
            >
              <span class="flex-shrink-0 text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
              </span>
              <span class="font-medium text-sm text-gray-700 dark:text-gray-300">Accounts</span>
            </button>
            <button
              @click="accountsExpanded = !accountsExpanded"
              class="px-3 py-3.5 text-gray-400 dark:text-gray-500 transition-transform duration-200"
              :class="accountsExpanded ? 'rotate-180' : ''"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>

          <!-- Sub-items under Accounts -->
          <Transition name="sub-expand">
            <div v-if="accountsExpanded" class="ml-4 mt-0.5 border-l border-gray-200 dark:border-gray-700 pl-3 space-y-0.5">
              <button
                v-for="sub in accountSubLinks"
                :key="sub.to"
                @click="navigate(sub.to)"
                class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                  text-gray-600 dark:text-gray-400
                  hover:bg-gray-50 dark:hover:bg-gray-800
                  transition-all duration-200 text-left"
              >
                <span v-html="sub.icon" class="flex-shrink-0 text-gray-400 dark:text-gray-500" />
                <span class="font-medium text-sm">{{ sub.label }}</span>
              </button>
            </div>
          </Transition>
        </div>

        <!-- Investments & Spending -->
        <button
          v-for="link in topLinks.slice(1)"
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

.sub-expand-enter-active, .sub-expand-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.sub-expand-enter-from, .sub-expand-leave-to { opacity: 0; transform: translateY(-6px); }
</style>

