<script setup>
const accounts = [
  { name: 'Roth IRA', provider: 'Fidelity', balance: '$4,200', contribution: '$500/yr', progress: 28 },
  { name: '401(k)', provider: 'Employer Plan', balance: '$1,800', contribution: '$150/mo', progress: 12 },
]
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300 px-4 md:px-8 py-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">Retirement</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Build wealth for the long game.</p>

      <div class="bg-gradient-to-br from-teal-600 to-emerald-800 rounded-2xl p-6 mb-6 text-white">
        <p class="text-sm text-white/70 mb-1">Total Retirement Savings</p>
        <p class="text-4xl font-bold">$6,000</p>
        <p class="text-sm text-teal-200 mt-2">On track for $1.2M by age 65 · Keep it up!</p>
      </div>

      <!-- AI Tip -->
      <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/50 rounded-2xl p-4 mb-6 flex gap-3">
        <span class="text-xl">💡</span>
        <p class="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
          <strong>SCOUT AI Tip:</strong> Maxing out your Roth IRA ($7,000/yr) now means tax-free growth for 40+ years. Consider increasing your contribution by $542/month.
        </p>
      </div>

      <div class="space-y-4">
        <div v-for="acc in accounts" :key="acc.name"
          class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5
            hover:shadow-md transition-all duration-300">
          <div class="flex items-start justify-between mb-1">
            <div>
              <p class="font-semibold text-sm text-gray-900 dark:text-white">{{ acc.name }}</p>
              <p class="text-xs text-gray-400 dark:text-gray-500">{{ acc.provider }} · {{ acc.contribution }}</p>
            </div>
            <p class="font-bold text-sm text-gray-900 dark:text-white">{{ acc.balance }}</p>
          </div>
          <div class="mt-3 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div class="h-full rounded-full bg-emerald-500 transition-all duration-500" :style="`width: ${acc.progress}%`" />
          </div>
          <p class="text-xs text-gray-400 dark:text-gray-500 mt-1.5">{{ acc.progress }}% of annual goal</p>
        </div>
      </div>
    </div>
  </div>
</template>

