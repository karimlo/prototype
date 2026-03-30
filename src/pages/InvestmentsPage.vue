<script setup>
const holdings = [
  { name: 'S&P 500 Index Fund', ticker: 'VOO', value: '$64,800.00', gain: '+22.4%', positive: true },
  { name: 'Total Market ETF', ticker: 'VTI', value: '$38,450.00', gain: '+18.6%', positive: true },
  { name: 'Apple Inc.', ticker: 'AAPL', value: '$21,300.00', gain: '+31.7%', positive: true },
  { name: 'Tesla Inc.', ticker: 'TSLA', value: '$8,940.00', gain: '-6.3%', positive: false },
]
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300 px-4 md:px-8 py-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">Investments</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Your portfolio performance and holdings.</p>

      <div class="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 mb-6 text-white">
        <p class="text-sm text-white/70 mb-1">Portfolio Value</p>
        <p class="text-4xl font-bold">$133,490.00</p>
        <p class="text-sm text-emerald-200 mt-2">▲ +$28,640.00 (27.3%) all time</p>
      </div>

      <!-- AI Tip -->
      <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/50 rounded-2xl p-4 mb-6 flex gap-3">
        <span class="text-xl">💡</span>
        <p class="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
          <strong>SCOUT AI Tip:</strong> Your TSLA position is down 8.1%. Consider rebalancing into VOO — index funds historically outperform individual stocks for long-term wealth building, especially early in your career.
        </p>
      </div>

      <div class="space-y-3">
        <div v-for="h in holdings" :key="h.ticker"
          class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5
            hover:shadow-md transition-all duration-300 flex items-center justify-between gap-4">
          <div>
            <p class="font-semibold text-sm text-gray-900 dark:text-white">{{ h.name }}</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ h.ticker }}</p>
          </div>
          <div class="text-right">
            <p class="font-bold text-gray-900 dark:text-white">{{ h.value }}</p>
            <p class="text-xs mt-0.5" :class="h.positive ? 'text-emerald-500' : 'text-rose-500'">{{ h.gain }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

