<script setup>
const cards = [
  { name: 'Chase Sapphire Reserve', last4: '4821', balance: '$1,240', limit: '$10,000', utilization: 12, due: 'Apr 15' },
  { name: 'Amex Gold', last4: '9034', balance: '$680', limit: '$5,000', utilization: 14, due: 'Apr 22' },
]
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300 px-4 md:px-8 py-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">Credit Cards</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Balances, utilization, and upcoming payments.</p>

      <div class="bg-gradient-to-br from-purple-600 to-indigo-800 rounded-2xl p-6 mb-6 text-white">
        <p class="text-sm text-white/70 mb-1">Total Credit Card Balance</p>
        <p class="text-4xl font-bold">$1,920</p>
        <p class="text-sm text-purple-200 mt-2">13% average utilization · Great score impact</p>
      </div>

      <!-- Promotional AI Tip -->
      <div class="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-700/50 rounded-2xl p-4 mb-6 flex gap-3">
        <span class="text-xl">🎉</span>
        <div class="flex-1">
          <p class="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">SCOUT AI — Exclusive Offer</p>
          <p class="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
            You may qualify for the <strong>SCOUT Student Rewards Card</strong> — <strong>0% APR</strong> for 15 months, <strong>no annual fee</strong>, and 3× points on dining &amp; travel. Perfect for athletes building credit early. Earn a <strong>10,000-point welcome bonus</strong> after your first purchase.
          </p>
        </div>
      </div>

      <div class="space-y-4">
        <div v-for="card in cards" :key="card.last4"
          class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5
            hover:shadow-md transition-all duration-300">
          <div class="flex items-start justify-between mb-3">
            <div>
              <p class="font-semibold text-sm text-gray-900 dark:text-white">{{ card.name }}</p>
              <p class="text-xs text-gray-400 dark:text-gray-500">····  {{ card.last4 }}</p>
            </div>
            <div class="text-right">
              <p class="font-bold text-sm text-gray-900 dark:text-white">{{ card.balance }}</p>
              <p class="text-xs text-gray-400 dark:text-gray-500">of {{ card.limit }}</p>
            </div>
          </div>
          <div class="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-1.5">
            <div class="h-full rounded-full bg-purple-500 transition-all duration-500" :style="`width: ${card.utilization}%`" />
          </div>
          <div class="flex justify-between text-xs text-gray-400 dark:text-gray-500">
            <span>{{ card.utilization }}% utilization</span>
            <span>Due {{ card.due }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

