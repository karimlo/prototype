<script setup>
const holdings = [
  { name: 'S&P 500 Index Fund', ticker: 'VOO', value: '$8,420.00', gain: '+12.4%', positive: true },
  { name: 'Total Market ETF', ticker: 'VTI', value: '$4,210.50', gain: '+9.8%', positive: true },
  { name: 'Apple Inc.', ticker: 'AAPL', value: '$1,840.00', gain: '+4.2%', positive: true },
  { name: 'Tesla Inc.', ticker: 'TSLA', value: '$620.00', gain: '-8.1%', positive: false },
]
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300 px-4 md:px-8 py-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">Investments</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Your portfolio performance and holdings.</p>

      <div class="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 mb-6 text-white">
        <p class="text-sm text-white/70 mb-1">Portfolio Value</p>
        <p class="text-4xl font-bold">$15,090.50</p>
        <p class="text-sm text-emerald-200 mt-2">▲ +$1,248.40 (9.0%) all time</p>
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

