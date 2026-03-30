<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth.js'
import { useTheme } from '../composables/useTheme.js'
import logoWhite from '../assets/images/scountlogo-white.svg'
import logoBlack from '../assets/images/scountlogo-black.svg'
import bgMobile from '../assets/images/bg-3.jpg'
import bgDesktop from '../assets/images/bp-desktop1.png'

const router = useRouter()
const { login } = useAuth()
const { isDark } = useTheme()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

// Track desktop breakpoint reactively so the correct bg image is always used.
// Using matchMedia avoids the unreliable v-bind() inside @media scoped CSS.
const isDesktop = ref(false)
let _mq = null
let _mqHandler = null
onMounted(() => {
  _mq = window.matchMedia('(min-width: 768px)')
  isDesktop.value = _mq.matches
  _mqHandler = (e) => { isDesktop.value = e.matches }
  _mq.addEventListener('change', _mqHandler)
})
onUnmounted(() => {
  if (_mq && _mqHandler) _mq.removeEventListener('change', _mqHandler)
})

// Background style — images only shown in dark mode
const bgStyle = computed(() => {
  if (!isDark.value) return {}
  return {
    backgroundImage: `url(${isDesktop.value ? bgDesktop : bgMobile})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
  }
})

async function handleLogin() {
  error.value = ''
  if (!email.value || !password.value) {
    error.value = 'Please enter your email and password.'
    return
  }
  loading.value = true
  await new Promise(r => setTimeout(r, 1000))
  loading.value = false
  login()
  router.push('/')
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center px-5 relative transition-colors duration-300"
    :class="isDark ? '' : 'bg-gray-50'"
    :style="bgStyle"
  >
    <!-- Dark overlay — dark mode only, no blur so image stays crisp -->
    <div v-if="isDark" class="absolute inset-0 bg-black/30" />

    <!-- Card -->
    <div class="relative z-10 w-full max-w-sm">

      <!-- Logo: white in dark mode, black in light mode -->
      <div class="flex justify-center mb-8">
        <img :src="isDark ? logoWhite : logoBlack" alt="SCOUT" class="h-10 w-auto" />
      </div>

      <!-- Form card: frosted glass in dark / solid white in light -->
      <div
        class="rounded-3xl px-8 py-10"
        :class="isDark
          ? 'bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl'
          : 'bg-white shadow-xl border border-gray-100'"
      >
        <p
          class="text-sm text-center mb-8"
          :class="isDark ? 'text-white/60' : 'text-gray-500'"
        >Sign in to your SCOUT account</p>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Email -->
          <input
            v-model="email"
            type="email"
            placeholder="Email address"
            autocomplete="email"
            class="w-full px-5 py-4 rounded-xl text-sm leading-none focus:outline-none focus:ring-2 transition-all duration-200"
            :class="isDark
              ? 'bg-white/10 border border-white/20 text-white placeholder-white/40 focus:ring-white/40 focus:border-white/40'
              : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-scout/40 focus:border-scout/40'"
          />

          <!-- Password -->
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            autocomplete="current-password"
            class="w-full px-5 py-4 rounded-xl text-sm leading-none focus:outline-none focus:ring-2 transition-all duration-200"
            :class="isDark
              ? 'bg-white/10 border border-white/20 text-white placeholder-white/40 focus:ring-white/40 focus:border-white/40'
              : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-scout/40 focus:border-scout/40'"
          />

          <!-- Error -->
          <p v-if="error" class="text-xs text-rose-400 text-center">{{ error }}</p>

          <!-- Register / Forgot password row -->
          <div class="flex justify-between">
            <button type="button" class="text-xs text-scout hover:text-scout/80 transition-colors duration-200 py-1">
              Register
            </button>
            <button type="button" class="text-xs text-scout hover:text-scout/80 transition-colors duration-200 py-1">
              Forgot password?
            </button>
          </div>

          <!-- Submit: white button in dark / scout-gold button in light -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full px-6 py-4 rounded-xl font-semibold text-sm uppercase tracking-wide active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
            :class="isDark
              ? 'bg-white text-gray-900 hover:bg-white/90'
              : 'bg-scout text-white hover:bg-scout/90'"
          >
            <span v-if="loading" class="flex items-center justify-center gap-2">
              <svg class="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Signing in…
            </span>
            <span v-else>Sign in</span>
          </button>
        </form>

        <p class="text-center text-xs mt-10" :class="isDark ? 'text-white/30' : 'text-gray-300'">
          SCOUT · Athlete Finance Platform
        </p>
      </div>
    </div>
  </div>
</template>


