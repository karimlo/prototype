<script setup>
import HeroSlider from '../components/HeroSlider.vue'
import FinanceCards from '../components/FinanceCards.vue'
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
    <!-- Hero slider: hidden on mobile to give more room to cards and AI chat -->
    <div class="hidden md:block">
      <HeroSlider />
    </div>
    <FinanceCards />
  </div>
</template>

