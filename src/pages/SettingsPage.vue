<script setup>
import { useRouter } from 'vue-router'
import { useTheme } from '../composables/useTheme.js'
import { useAuth } from '../composables/useAuth.js'

const router = useRouter()
const { isDark, toggleTheme } = useTheme()
const { logout } = useAuth()

function handleLogout() {
  logout()
  router.push('/login')
}

const accountItems = [
  {
    label: 'Profile',
    desc: 'Name, email, photo',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
  },
  {
    label: 'Notifications',
    desc: 'Alerts, push, email preferences',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>`,
  },
  {
    label: 'Membership',
    desc: 'Plan, billing, upgrades',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>`,
  },
  {
    label: 'Security',
    desc: 'Password, 2FA, sessions',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>`,
  },
  {
    label: 'Linked Accounts',
    desc: 'Banks, brokerages, cards',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>`,
  },
  {
    label: 'Documents',
    desc: 'Tax forms, statements, contracts',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>`,
  },
]

const prefItems = [
  {
    label: 'Spending Settings',
    desc: 'Budget limits, categories',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>`,
  },
  {
    label: 'AI Financial Profile',
    desc: 'Risk level, goals, preferences',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>`,
  },
]

const resourceItems = [
  {
    label: 'Help & Support',
    desc: 'FAQs, contact, live chat',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>`,
  },
  {
    label: 'Privacy Policy',
    desc: 'How we handle your data',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" /></svg>`,
  },
]
</script>

<template>
  <div class="max-w-2xl mx-auto px-4 py-6 space-y-8">

    <!-- Page header -->
    <div>
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your account &amp; preferences</p>
    </div>

    <!-- Account -->
    <section>
      <h2 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Account</h2>
      <div class="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm divide-y divide-gray-100 dark:divide-gray-800 overflow-hidden">
        <button
          v-for="item in accountItems"
          :key="item.label"
          class="w-full flex items-center gap-3 px-4 py-3.5
            hover:bg-gray-50 dark:hover:bg-gray-800/60
            active:scale-[0.99] transition-all duration-200 text-left"
        >
          <span class="text-gray-400 dark:text-gray-500 shrink-0" v-html="item.icon" />
          <div class="flex-1 min-w-0">
            <p class="font-medium text-gray-900 dark:text-white text-sm">{{ item.label }}</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ item.desc }}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-300 dark:text-gray-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>

    <!-- Preferences -->
    <section>
      <h2 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Preferences</h2>
      <div class="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm divide-y divide-gray-100 dark:divide-gray-800 overflow-hidden">
        <button
          v-for="item in prefItems"
          :key="item.label"
          class="w-full flex items-center gap-3 px-4 py-3.5
            hover:bg-gray-50 dark:hover:bg-gray-800/60
            active:scale-[0.99] transition-all duration-200 text-left"
        >
          <span class="text-gray-400 dark:text-gray-500 shrink-0" v-html="item.icon" />
          <div class="flex-1 min-w-0">
            <p class="font-medium text-gray-900 dark:text-white text-sm">{{ item.label }}</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ item.desc }}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-300 dark:text-gray-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <!-- Appearance toggle row -->
        <div class="flex items-center gap-3 px-4 py-3.5">
          <span class="text-gray-400 dark:text-gray-500 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </span>
          <div class="flex-1 min-w-0">
            <p class="font-medium text-gray-900 dark:text-white text-sm">Dark Mode</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ isDark ? 'On' : 'Off' }}</p>
          </div>
          <button
            @click="toggleTheme"
            :class="isDark ? 'bg-scout' : 'bg-gray-200'"
            class="relative w-11 h-6 rounded-full transition-colors duration-300 shrink-0"
            aria-label="Toggle dark mode"
          >
            <span
              :class="isDark ? 'translate-x-5' : 'translate-x-0.5'"
              class="absolute top-0.5 left-0 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>

    <!-- Resources -->
    <section>
      <h2 class="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Resources</h2>
      <div class="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm divide-y divide-gray-100 dark:divide-gray-800 overflow-hidden">
        <button
          v-for="item in resourceItems"
          :key="item.label"
          class="w-full flex items-center gap-3 px-4 py-3.5
            hover:bg-gray-50 dark:hover:bg-gray-800/60
            active:scale-[0.99] transition-all duration-200 text-left"
        >
          <span class="text-gray-400 dark:text-gray-500 shrink-0" v-html="item.icon" />
          <div class="flex-1 min-w-0">
            <p class="font-medium text-gray-900 dark:text-white text-sm">{{ item.label }}</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ item.desc }}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-300 dark:text-gray-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>

    <!-- Log out -->
    <button
      @click="handleLogout"
      class="w-full py-4 rounded-2xl font-semibold text-sm text-rose-500 dark:text-rose-400
        bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800
        hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:border-rose-200 dark:hover:border-rose-800
        active:scale-[0.99] transition-all duration-200 shadow-sm"
    >
      Log Out
    </button>

    <p class="text-center text-xs text-gray-300 dark:text-gray-600 pb-2">SCOUT v1.0 · Athlete Finance Platform</p>

  </div>
</template>

