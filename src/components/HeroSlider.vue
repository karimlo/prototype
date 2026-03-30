<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import banner1 from '../assets/images/banner-1a.jpg'
import banner2 from '../assets/images/banner-2a.jpg'
import banner3 from '../assets/images/banner-3a.jpg'
import banner4 from '../assets/images/banner-4a.jpg'

const slides = [
  {
    image: banner1,
    title: 'Your Money, Your Future',
    subtitle: 'AI-powered financial management built exclusively for college athletes.',
  },
  {
    image: banner2,
    title: 'NIL Income Made Simple',
    subtitle: 'Track sponsorships, manage taxes, and grow your brand revenue with confidence.',
  },
  {
    image: banner3,
    title: 'Invest in Your Legacy',
    subtitle: 'Start building wealth today. SCOUT helps you invest, save, and plan for life after the game.',
  },
  {
    image: banner4,
    title: 'Build Your Financial Playbook',
    subtitle: 'From budgeting to retirement, SCOUT gives you the tools to win beyond the field.',
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

    <!-- ── Background image layers (crossfade) ── -->
    <div
      v-for="(slide, i) in slides"
      :key="`bg-${i}`"
      class="hero-bg-layer"
      :style="{ backgroundImage: `url(${slide.image})`, opacity: i === current ? 1 : 0 }"
    />

    <!-- Dark overlay so text is always legible -->
    <div class="absolute inset-0 bg-black/45 z-10" />

    <!-- ── Slide content (fades per slide) ── -->
    <TransitionGroup name="content-fade" tag="div" class="absolute inset-0 z-20">
      <div
        v-for="(slide, i) in slides"
        :key="`content-${i}`"
        v-show="current === i"
        class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
      >
        <div class="max-w-2xl">
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

    <!-- ── Dots ── -->
    <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
      <button
        v-for="(_, i) in slides"
        :key="i"
        @click="goTo(i)"
        class="transition-all duration-300 rounded-full"
        :class="current === i ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/60'"
      />
    </div>

    <!-- ── Prev / Next arrows ── -->
    <button
      @click="goTo((current - 1 + slides.length) % slides.length)"
      class="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex
        w-10 h-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20
        text-white transition-all duration-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
    <button
      @click="goTo((current + 1) % slides.length)"
      class="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex
        w-10 h-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20
        text-white transition-all duration-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
/* Background image layers — same crossfade pattern as the login page */
.hero-bg-layer {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 1.5s ease-in-out;
  will-change: opacity;
}

/* Text content fade */
.content-fade-enter-active { transition: opacity 0.7s ease, transform 0.7s ease; }
.content-fade-leave-active  { transition: opacity 0.4s ease, transform 0.4s ease; }
.content-fade-enter-from    { opacity: 0; transform: translateY(12px); }
.content-fade-leave-to      { opacity: 0; transform: translateY(-8px); }
</style>

