<script setup>
import { useTheme } from '../composables/useTheme.js'
import logoBlack from '../assets/images/scountlogo-black.svg'
import logoWhite from '../assets/images/scountlogo-white.svg'

const { isDark, toggleTheme } = useTheme()

const emit = defineEmits(['toggle-menu'])

const navLinks = [
  { label: 'Accounts', to: '/accounts' },
  { label: 'Investments', to: '/investments' },
  { label: 'Expenses', to: '/expenses' },
  { label: 'Loans', to: '/loans' },
  { label: 'Credit Cards', to: '/credit-cards' },
  { label: 'Retirement', to: '/retirement' },
]
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-4 md:px-8
    bg-white/90 dark:bg-gray-950/90 backdrop-blur-md
    border-b border-gray-200 dark:border-gray-800
    transition-colors duration-300">

    <!-- Logo -->
    <router-link to="/" class="flex items-center shrink-0">
      <img :src="isDark ? logoWhite : logoBlack" alt="SCOUT" class="h-8 w-auto" />
    </router-link>

    <!-- Desktop nav -->
    <nav class="hidden md:flex items-center gap-6 ml-10">
      <router-link
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="text-sm font-medium text-gray-600 dark:text-gray-400
          hover:text-gray-900 dark:hover:text-white
          transition-colors duration-200
          [&.router-link-active]:text-indigo-600 dark:[&.router-link-active]:text-indigo-400"
      >
        {{ link.label }}
      </router-link>
    </nav>

    <div class="ml-auto flex items-center gap-3">
      <!-- Dark mode toggle -->
      <button
        @click="toggleTheme"
        class="w-9 h-9 flex items-center justify-center rounded-full
          text-gray-500 dark:text-gray-400
          hover:bg-gray-100 dark:hover:bg-gray-800
          transition-all duration-200"
        aria-label="Toggle theme"
      >
        <!-- Sun icon -->
        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
        <!-- Moon icon -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      </button>

      <!-- Hamburger (mobile only) -->
      <button
        @click="emit('toggle-menu')"
        class="md:hidden w-9 h-9 flex items-center justify-center rounded-full
          text-gray-500 dark:text-gray-400
          hover:bg-gray-100 dark:hover:bg-gray-800
          transition-all duration-200"
        aria-label="Open menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  </header>
</template>

