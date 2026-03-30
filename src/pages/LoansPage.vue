<script setup>
const loans = [
  { name: 'Student Loan', lender: 'Federal', balance: '$24,800', rate: '4.99% APR', monthly: '$260/mo', progress: 38 },
  { name: 'Auto Loan', lender: 'Toyota Financial', balance: '$12,400', rate: '6.5% APR', monthly: '$280/mo', progress: 52 },
]
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300 px-4 md:px-8 py-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">Loans</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Track and manage your outstanding loans.</p>

      <div class="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-6 mb-6 text-white">
        <p class="text-sm text-white/70 mb-1">Total Loan Balance</p>
        <p class="text-4xl font-bold">$37,200</p>
        <p class="text-sm text-slate-400 mt-2">$540/month total payments</p>
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

