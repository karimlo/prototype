<script setup>
const loans = [
  { name: 'Student Loan', lender: 'Federal', balance: '$52,400', rate: '4.99% APR', monthly: '$680/mo', progress: 22 },
  { name: 'Auto Loan', lender: 'Toyota Financial', balance: '$28,600', rate: '6.5% APR', monthly: '$540/mo', progress: 35 },
]
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300 px-4 md:px-8 py-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">Loans</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Track and manage your outstanding loans.</p>

      <div class="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-6 mb-6 text-white">
        <p class="text-sm text-white/70 mb-1">Total Loan Balance</p>
        <p class="text-4xl font-bold">$81,000</p>
        <p class="text-sm text-slate-400 mt-2">$1,220/month total payments</p>
      </div>

      <!-- AI Tip -->
      <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/50 rounded-2xl p-4 mb-6 flex gap-3">
        <span class="text-xl">💡</span>
        <p class="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
          <strong>SCOUT AI Tip:</strong> Adding $200/month extra to your auto loan (6.5% APR) could save you ~$3,800 in interest and cut 14 months off your payoff. Always attack the highest-rate balance first.
        </p>
      </div>

      <div class="space-y-4">
        <div v-for="loan in loans" :key="loan.name"
          class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5
            hover:shadow-md transition-all duration-300">
          <div class="flex items-start justify-between mb-1">
            <div>
              <p class="font-semibold text-sm text-gray-900 dark:text-white">{{ loan.name }}</p>
              <p class="text-xs text-gray-400 dark:text-gray-500">{{ loan.lender }} · {{ loan.rate }}</p>
            </div>
            <p class="font-bold text-gray-900 dark:text-white text-sm">{{ loan.balance }}</p>
          </div>
          <p class="text-xs text-indigo-500 dark:text-indigo-400 mb-3">{{ loan.monthly }}</p>
          <div class="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div class="h-full rounded-full bg-indigo-500 transition-all duration-500" :style="`width: ${loan.progress}%`" />
          </div>
          <p class="text-xs text-gray-400 dark:text-gray-500 mt-1.5">{{ loan.progress }}% paid off</p>
        </div>
      </div>
    </div>
  </div>
</template>

