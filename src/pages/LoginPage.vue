<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth.js'
import logoWhite from '../assets/images/scountlogo-white.svg'
import bgMobile from '../assets/images/bg-2.jpg'
import bgDesktop from '../assets/images/bg-1.jpg'

const router = useRouter()
const { login } = useAuth()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

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
  <div class="login-bg min-h-screen flex items-center justify-center px-5 relative">
    <!-- Dark overlay — no blur so the image stays crisp -->
    <div class="absolute inset-0 bg-black/45" />

    <!-- Card -->
    <div class="relative z-10 w-full max-w-sm">
      <!-- Logo -->
      <div class="flex justify-center mb-8">
        <img :src="logoWhite" alt="SCOUT" class="h-10 w-auto" />
      </div>

      <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-8 py-10 shadow-2xl">
        <p class="text-sm text-white/60 text-center mb-8">Sign in to your SCOUT account</p>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Email -->
          <input
            v-model="email"
            type="email"
            placeholder="Email address"
            autocomplete="email"
            class="w-full px-5 py-4 rounded-xl text-sm leading-none
              bg-white/10 border border-white/20 text-white placeholder-white/40
              focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40
              transition-all duration-200"
          />

          <!-- Password -->
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            autocomplete="current-password"
            class="w-full px-5 py-4 rounded-xl text-sm leading-none
              bg-white/10 border border-white/20 text-white placeholder-white/40
              focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40
              transition-all duration-200"
          />

          <!-- Error -->
          <p v-if="error" class="text-xs text-rose-300 text-center">{{ error }}</p>

          <!-- Register / Forgot password row -->
          <div class="flex justify-between">
            <button type="button" class="text-xs text-scout hover:text-scout/80 transition-colors duration-200 py-1">
              Register
            </button>
            <button type="button" class="text-xs text-scout hover:text-scout/80 transition-colors duration-200 py-1">
              Forgot password?
            </button>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full px-6 py-4 rounded-xl font-semibold text-sm uppercase tracking-wide
              bg-white text-gray-900
              hover:bg-white/90 active:scale-[0.98]
              disabled:opacity-60 disabled:cursor-not-allowed
              transition-all duration-200 shadow-lg"
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

        <p class="text-center text-xs text-white/30 mt-10">
          SCOUT · Athlete Finance Platform
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-bg {
  background-image: v-bind("'url(' + bgMobile + ')'");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (min-width: 768px) {
  .login-bg {
    background-image: v-bind("'url(' + bgDesktop + ')'");
  }
}
</style>
