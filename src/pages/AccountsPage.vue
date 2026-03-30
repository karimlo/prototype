<script setup>
const accounts = [
  { name: 'Chase Checking', balance: '$4,820.50', type: 'Checking', change: '+$3,500 today', positive: true },
  { name: 'Chase Savings', balance: '$6,814.00', type: 'Savings', change: '+$200 this week', positive: true },
  { name: 'Ally HYSA', balance: '$12,440.00', type: 'High-Yield Savings', change: '+$48.20 interest', positive: true },
  { name: 'Direct Deposit', balance: '$3,500.00', type: 'NIL Income', change: 'Received today', positive: true },
]
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300 px-4 md:px-8 py-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">Accounts</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">All your connected bank accounts in one place.</p>

      <!-- Summary -->
      <div class="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 mb-6 text-white">
        <p class="text-sm text-white/70 mb-1">Total Balance</p>
        <p class="text-4xl font-bold">$27,574.50</p>
        <p class="text-sm text-white/60 mt-2">Across 4 accounts · Updated just now</p>
      </div>

      <!-- AI Tip -->
      <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/50 rounded-2xl p-4 mb-6 flex gap-3">
        <span class="text-xl">💡</span>
        <p class="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
          <strong>SCOUT AI Tip:</strong> Your Ally HYSA is earning a competitive rate — consider auto-transferring 10% of each NIL deposit to keep growing your emergency fund passively.
        </p>
      </div>

      <div class="space-y-3">
        <div v-for="acc in accounts" :key="acc.name"
          class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5
            hover:shadow-md transition-all duration-300 flex items-center justify-between gap-4">
          <div>
            <p class="font-semibold text-sm text-gray-900 dark:text-white">{{ acc.name }}</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ acc.type }}</p>
          </div>
          <div class="text-right">
            <p class="font-bold text-gray-900 dark:text-white">{{ acc.balance }}</p>
            <p class="text-xs mt-0.5" :class="acc.positive ? 'text-emerald-500' : 'text-rose-500'">{{ acc.change }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

