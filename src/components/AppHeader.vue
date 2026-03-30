<script setup>
import { useRouter } from 'vue-router'
import { useTheme } from '../composables/useTheme.js'
import { useAuth } from '../composables/useAuth.js'
import { useDesktopChat } from '../composables/useDesktopChat.js'
import logoBlack from '../assets/images/scountlogo-black.svg'
import logoWhite from '../assets/images/scountlogo-white.svg'

const { isDark, toggleTheme } = useTheme()
const { logout } = useAuth()
const router = useRouter()
const { isOpen: desktopChatOpen, toggle: toggleDesktopChat } = useDesktopChat()

const emit = defineEmits(['toggle-menu'])

function handleLogout() {
  logout()
  router.push('/login')
}

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
          [&.router-link-active]:text-scout"
      >
        {{ link.label }}
      </router-link>

      <!-- Scout AI button -->
      <button
        @click="toggleDesktopChat()"
        class="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 px-3 py-1.5 rounded-full border"
        :class="desktopChatOpen
          ? 'text-white bg-scout border-scout'
          : 'text-scout border-scout/40 hover:bg-scout/10 dark:hover:bg-scout/20'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
        </svg>
        Scout AI
      </button>
    </nav>

    <div class="ml-auto flex items-center gap-3">
      <!-- Settings -->
      <router-link
        to="/settings"
        class="w-9 h-9 flex items-center justify-center rounded-full
          text-gray-500 dark:text-gray-400
          hover:bg-gray-100 dark:hover:bg-gray-800
          transition-all duration-200
          [&.router-link-active]:text-scout"
        aria-label="Settings"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </router-link>

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

      <!-- Logout -->
      <button
        @click="handleLogout"
        class="w-9 h-9 flex items-center justify-center rounded-full
          text-gray-500 dark:text-gray-400
          hover:bg-gray-100 dark:hover:bg-gray-800
          hover:text-rose-500 dark:hover:text-rose-400
          transition-all duration-200"
        aria-label="Log out"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
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

