<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const categories = [
  {
    label: 'Banking',
    to: null,
    subtitleClass: 'text-sky-400',
    total: '$129,900.75',
    subtitle: '4 accounts · Updated just now',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg>`,
    items: [
      { name: 'Chase Checking', balance: '$18,340.75', sub: 'Checking' },
      { name: 'Chase Savings', balance: '$34,200.00', sub: 'Savings' },
      { name: 'Ally HYSA', balance: '$52,860.00', sub: 'High-Yield Savings' },
      { name: 'NIL Direct Deposit', balance: '$24,500.00', sub: 'NIL Income' },
    ],
  },
  {
    label: 'Investments',
    to: '/investments',
    subtitleClass: 'text-emerald-400',
    total: '$133,490.00',
    subtitle: '▲ +27.3% all time',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>`,
    items: [
      { name: 'S&P 500 (VOO)', balance: '$64,800.00', sub: '+22.4%' },
      { name: 'Total Market (VTI)', balance: '$38,450.00', sub: '+18.6%' },
      { name: 'Apple (AAPL)', balance: '$21,300.00', sub: '+31.7%' },
      { name: 'Tesla (TSLA)', balance: '$8,940.00', sub: '-6.3%' },
    ],
  },
  {
    label: 'Loans',
    to: '/loans',
    subtitleClass: 'text-rose-400',
    total: '$81,000.00',
    subtitle: 'Outstanding balance · 2 loans',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
    items: [
      { name: 'Student Loan', balance: '$52,400.00', sub: '$680/mo' },
      { name: 'Auto Loan', balance: '$28,600.00', sub: '$540/mo' },
    ],
  },
  {
    label: 'Credit Cards',
    to: '/credit-cards',
    subtitleClass: 'text-purple-400',
    total: '$1,920.00',
    subtitle: '13% avg utilization · Great score',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>`,
    items: [
      { name: 'Chase Sapphire Reserve', balance: '$1,240', sub: '····4821 · Due Apr 15' },
      { name: 'Amex Gold', balance: '$680', sub: '····9034 · Due Apr 22' },
    ],
  },
  {
    label: 'Retirement',
    to: '/retirement',
    subtitleClass: 'text-teal-400',
    total: '$6,000.00',
    subtitle: 'On track for $1.2M by age 65',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>`,
    items: [
      { name: 'Roth IRA (Fidelity)', balance: '$4,200', sub: '$500/yr contribution' },
      { name: '401(k) Employer Plan', balance: '$1,800', sub: '$150/mo contribution' },
    ],
  },
]
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300 px-4 md:px-8 py-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">Accounts</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">All your accounts in one place.</p>

      <!-- AI Tip -->
      <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/50 rounded-2xl p-4 mb-6 flex gap-3">
        <span class="text-xl">💡</span>
        <p class="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
          <strong>SCOUT AI Tip:</strong> Your Ally HYSA is earning a competitive rate — consider auto-transferring 10% of each NIL deposit to keep growing your emergency fund passively.
        </p>
      </div>

      <!-- Stacked category cards -->
      <div class="space-y-4">
        <div
          v-for="cat in categories"
          :key="cat.label"
          class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800
            overflow-hidden hover:shadow-md transition-all duration-300"
        >
          <!-- Category header -->
          <div
            class="p-4 flex items-center justify-between
              bg-transparent dark:bg-black/70
              backdrop-blur-md border-b border-gray-200 dark:border-white/10"
            @click="cat.to && router.push(cat.to)"
            :style="cat.to ? 'cursor: pointer' : ''"
          >
            <div class="flex items-center gap-3">
              <span v-html="cat.icon" class="text-gray-900 dark:text-amber-400" />
              <div>
                <p class="font-medium text-base leading-tight uppercase tracking-widest text-gray-900 dark:text-amber-400">{{ cat.label }}</p>
                <p class="text-xs mt-0.5" :class="cat.subtitleClass">{{ cat.subtitle }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="font-medium text-lg text-gray-900 dark:text-amber-400">{{ cat.total }}</p>
              <span v-if="cat.to" class="text-gray-900/50 dark:text-amber-400/60 text-xs">View all →</span>
            </div>
          </div>

          <!-- Account rows -->
          <div class="divide-y divide-gray-100 dark:divide-gray-800">
            <div
              v-for="item in cat.items"
              :key="item.name"
              class="flex items-center justify-between px-4 py-3"
            >
              <div>
                <p class="text-sm font-medium text-gray-800 dark:text-gray-200">{{ item.name }}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ item.sub }}</p>
              </div>
              <p class="font-bold text-sm text-gray-900 dark:text-white">{{ item.balance }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

