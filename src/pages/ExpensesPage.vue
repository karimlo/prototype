<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const expenses = [
  { category: 'Dining', amount: '$420', budget: '$300', pct: 78, over: true },
  { category: 'Transportation', amount: '$180', budget: '$200', pct: 55, over: false },
  { category: 'Subscriptions', amount: '$95', budget: '$100', pct: 30, over: false },
  { category: 'Shopping', amount: '$340', budget: '$250', pct: 92, over: true },
  { category: 'Entertainment', amount: '$120', budget: '$150', pct: 38, over: false },
]

// AI Tips slideshow — 3 tips cycling every 5 seconds
const aiTips = [
  'Your Dining spend is $120 over budget this month. Try setting a weekly cap of $75 to get back on track — small restaurant swaps can save $400+ over a season.',
  'Shopping is nearly at its limit ($340/$250 budget). Before your next non-essential purchase, wait 48 hours — studies show this reduces impulse buys by up to 60%.',
  'You have 3+ active subscriptions. Audit them this week: canceling even one unused service could free up $100–$200/year to redirect into your Roth IRA.',
]
const currentTip = ref(0)
let _tipTimer = null

onMounted(() => {
  _tipTimer = setInterval(() => {
    currentTip.value = (currentTip.value + 1) % aiTips.length
  }, 5000)
})

onUnmounted(() => {
  if (_tipTimer) clearInterval(_tipTimer)
})
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300 px-4 md:px-8 py-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">Expenses</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Monthly spending breakdown and budgets.</p>

      <div class="bg-gradient-to-br from-rose-500 to-pink-700 rounded-2xl p-6 mb-6 text-white">
        <p class="text-sm text-white/70 mb-1">Total Spent This Month</p>
        <p class="text-4xl font-bold">$1,155</p>
        <p class="text-sm text-rose-200 mt-2">Budget: $1,000 · ▲ $155 over</p>
      </div>

      <!-- AI Tips Slideshow (3 tips, 5s cycle) -->
      <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/50 rounded-2xl p-4 mb-6 overflow-hidden relative min-h-[4.5rem]">
        <Transition name="tip-fade" mode="out-in">
          <div :key="currentTip" class="flex gap-3">
            <span class="text-xl flex-shrink-0">💡</span>
            <p class="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
              <strong>SCOUT AI Tip:</strong> {{ aiTips[currentTip] }}
            </p>
          </div>
        </Transition>
        <!-- Dot indicators -->
        <div class="flex gap-1.5 justify-end mt-3">
          <span
            v-for="(_, i) in aiTips"
            :key="i"
            class="w-1.5 h-1.5 rounded-full transition-all duration-300"
            :class="i === currentTip ? 'bg-indigo-500' : 'bg-indigo-200 dark:bg-indigo-800'"
          />
        </div>
      </div>

      <div class="space-y-4">
        <div v-for="e in expenses" :key="e.category"
          class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5
            hover:shadow-md transition-all duration-300">
          <div class="flex items-center justify-between mb-3">
            <p class="font-semibold text-sm text-gray-900 dark:text-white">{{ e.category }}</p>
            <div class="text-right">
              <span class="font-bold text-sm" :class="e.over ? 'text-rose-500' : 'text-gray-900 dark:text-white'">{{ e.amount }}</span>
              <span class="text-xs text-gray-400 dark:text-gray-500"> / {{ e.budget }}</span>
            </div>
          </div>
          <div class="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div class="h-full rounded-full transition-all duration-500"
              :class="e.over ? 'bg-rose-500' : 'bg-indigo-500'"
              :style="`width: ${Math.min(e.pct, 100)}%`" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tip-fade-enter-active, .tip-fade-leave-active { transition: opacity 0.5s ease; }
.tip-fade-enter-from, .tip-fade-leave-to { opacity: 0; }
</style>
