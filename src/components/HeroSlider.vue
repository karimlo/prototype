<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    title: 'Your Money, Your Future',
    subtitle: 'AI-powered financial management built exclusively for college athletes.',
    bg: 'from-indigo-900 via-indigo-800 to-purple-900',
    accent: 'text-indigo-300',
  },
  {
    title: 'NIL Income Made Simple',
    subtitle: 'Track sponsorships, manage taxes, and grow your brand revenue with confidence.',
    bg: 'from-slate-900 via-slate-800 to-indigo-900',
    accent: 'text-cyan-300',
  },
  {
    title: 'Invest in Your Legacy',
    subtitle: 'Start building wealth today. SCOUT helps you invest, save, and plan for life after the game.',
    bg: 'from-gray-900 via-indigo-950 to-slate-900',
    accent: 'text-emerald-300',
  },
]

const current = ref(0)
let timer = null

function next() {
  current.value = (current.value + 1) % slides.length
}

function goTo(i) {
  current.value = i
  resetTimer()
}

function resetTimer() {
  clearInterval(timer)
  timer = setInterval(next, 5000)
}

onMounted(() => { timer = setInterval(next, 5000) })
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="relative overflow-hidden h-[480px] md:h-[560px]">
    <!-- Slides -->
    <TransitionGroup name="slide-fade" tag="div" class="relative w-full h-full">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        v-show="current === i"
        class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br"
        :class="slide.bg"
      >
        <!-- Animated background orbs -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-pulse" />
          <div class="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-pulse" style="animation-delay:1s" />
        </div>

        <div class="relative z-10 max-w-2xl">
          <span class="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-white/10 text-white/70">
            SCOUT · Athlete Finance
          </span>
          <h1 class="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            {{ slide.title }}
          </h1>
          <p class="text-base md:text-lg text-white/70 leading-relaxed mb-8">
            {{ slide.subtitle }}
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <router-link to="/accounts"
              class="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold text-sm
                hover:bg-gray-100 transition-all duration-200 shadow-lg">
              Get Started
            </router-link>
            <button
              class="px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm
                hover:bg-white/10 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </TransitionGroup>

    <!-- Dots -->
    <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
      <button
        v-for="(_, i) in slides"
        :key="i"
        @click="goTo(i)"
        class="transition-all duration-300 rounded-full"
        :class="current === i ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/60'"
      />
    </div>

    <!-- Prev/Next arrows (desktop) -->
    <button @click="goTo((current - 1 + slides.length) % slides.length)"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex
        w-10 h-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20
        text-white transition-all duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
    <button @click="goTo((current + 1) % slides.length)"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex
        w-10 h-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20
        text-white transition-all duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.slide-fade-enter-active { transition: opacity 0.6s ease, transform 0.6s ease; }
.slide-fade-leave-active { transition: opacity 0.4s ease, transform 0.4s ease; }
.slide-fade-enter-from { opacity: 0; transform: translateX(40px); }
.slide-fade-leave-to { opacity: 0; transform: translateX(-40px); }
</style>

