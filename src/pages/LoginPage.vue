<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth.js'
import { useTheme } from '../composables/useTheme.js'
import logoWhite from '../assets/images/scountlogo-white.svg'
import logoBlack from '../assets/images/scountlogo-black.svg'
import bgSlide1 from '../assets/images/bp-desktop1.png'
import bgSlide2 from '../assets/images/bp-desktop2.jpg'
import bgSlide3 from '../assets/images/bp-desktop3.jpg'
import bgMobile1 from '../assets/images/bg-mobile1a.jpg'
import bgMobile2 from '../assets/images/bg-mobile2a.jpg'
import bgMobile3 from '../assets/images/bg-mobile3a.jpg'
import bgMobile4 from '../assets/images/bg-mobile4a.jpg'

const router = useRouter()
const { login } = useAuth()
const { isDark } = useTheme()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

// Slideshows — desktop (3 images) and mobile (4 images), same index drives both
const desktopSlides = [bgSlide1, bgSlide2, bgSlide3]
const mobileSlides  = [bgMobile1, bgMobile2, bgMobile3, bgMobile4]
const currentSlide  = ref(0)

// Responsive breakpoint
const isDesktop = ref(false)
let _mq = null
let _mqHandler = null
let _slideTimer = null

onMounted(() => {
  _mq = window.matchMedia('(min-width: 768px)')
  isDesktop.value = _mq.matches
  _mqHandler = (e) => { isDesktop.value = e.matches }
  _mq.addEventListener('change', _mqHandler)

  // Cycle every 5 s — wraps around whichever array is active
  _slideTimer = setInterval(() => {
    const len = isDesktop.value ? desktopSlides.length : mobileSlides.length
    currentSlide.value = (currentSlide.value + 1) % len
  }, 5000)
})

onUnmounted(() => {
  if (_mq && _mqHandler) _mq.removeEventListener('change', _mqHandler)
  if (_slideTimer) clearInterval(_slideTimer)
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
    class="min-h-screen flex items-center justify-center px-5 relative overflow-hidden"
    :class="isDark ? '' : 'bg-gray-50'"
  >

    <!-- ── Desktop dark mode: crossfade slideshow ── -->
    <template v-if="isDark && isDesktop">
      <div
        v-for="(slide, i) in desktopSlides"
        :key="`d-${i}`"
        class="slide-layer"
        :style="{ backgroundImage: `url(${slide})`, opacity: i === currentSlide ? 1 : 0 }"
      />
      <!-- 30% dark overlay, no blur — keeps images crisp -->
      <div class="absolute inset-0 bg-black/30" />
    </template>

    <!-- ── Mobile dark mode: crossfade slideshow (4 images) ── -->
    <template v-else-if="isDark && !isDesktop">
      <div
        v-for="(slide, i) in mobileSlides"
        :key="`m-${i}`"
        class="slide-layer"
        :style="{ backgroundImage: `url(${slide})`, opacity: i === currentSlide ? 1 : 0 }"
      />
      <div class="absolute inset-0 bg-black/30" />
    </template>

    <!-- ── Card ── -->
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

<style scoped>
/* Shared base for every slide layer */
.slide-layer {
  position: absolute;
  inset: 0;
  background-size: auto 100%;
  background-position: top center;
  background-repeat: no-repeat;
  /* Cross-fade transition — matches the 5 s interval comfortably */
  transition: opacity 1.5s ease-in-out;
  will-change: opacity;
}
</style>


