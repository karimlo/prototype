<script setup>
const cards = [
  {
    type: 'alert',
    icon: '⚡',
    color: 'amber',
    title: 'Tax Deadline Approaching',
    body: 'You have $4,200 in estimated taxes due in 18 days. SCOUT recommends transferring funds now.',
    action: 'Review Tax Summary',
    badge: 'Action Required',
  },
  {
    type: 'insight',
    icon: '📊',
    color: 'indigo',
    title: 'Spending Insight',
    body: 'Your dining expenses are up 32% this month. You\'re on track to exceed your budget by $180.',
    action: 'View Expenses',
    badge: 'AI Insight',
  },
  {
    type: 'opportunity',
    icon: '📈',
    color: 'emerald',
    title: 'Investment Opportunity',
    body: 'Based on your cash flow, you can invest an additional $500/month without impacting your savings goals.',
    action: 'Explore Options',
    badge: 'Opportunity',
  },
  {
    type: 'info',
    icon: '🏦',
    color: 'blue',
    title: 'Direct Deposit Received',
    body: 'Your NIL payment of $3,500 from SportsGear Co. was deposited today. 25% has been auto-allocated to taxes.',
    action: 'View Account',
    badge: 'New',
  },
  {
    type: 'info',
    icon: '💳',
    color: 'purple',
    title: 'Credit Score Update',
    body: 'Your credit score improved by 12 points to 742. Keep up the on-time payments!',
    action: 'View Credit Report',
    badge: 'Update',
  },
  {
    type: 'opportunity',
    icon: '🎯',
    color: 'rose',
    title: 'Savings Goal Progress',
    body: 'You\'re 68% toward your $10,000 emergency fund goal. At your current rate, you\'ll hit it in 4 months.',
    action: 'View Goals',
    badge: 'Goal',
  },
]

const colorMap = {
  amber:   { badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-200 dark:border-amber-800/50' },
  indigo:  { badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'bg-indigo-50 dark:bg-indigo-900/20', border: 'border-indigo-200 dark:border-indigo-800/50' },
  emerald: { badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'bg-emerald-50 dark:bg-emerald-900/20', border: 'border-emerald-200 dark:border-emerald-800/50' },
  blue:    { badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800/50' },
  purple:  { badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800/50' },
  rose:    { badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400', icon: 'bg-rose-50 dark:bg-rose-900/20', border: 'border-rose-200 dark:border-rose-800/50' },
}
</script>

<template>
  <section class="px-4 md:px-8 py-8">
    <div class="max-w-5xl mx-auto">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-lg font-bold text-gray-900 dark:text-white">AI Recommendations</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Personalized insights from your SCOUT AI</p>
        </div>
        <span class="text-xs px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium">
          {{ cards.length }} updates
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(card, i) in cards"
          :key="i"
          class="group bg-white dark:bg-gray-900 rounded-2xl border p-5 shadow-sm
            hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          :class="colorMap[card.color].border"
        >
          <div class="flex items-start gap-3 mb-3">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
              :class="colorMap[card.color].icon">
              {{ card.icon }}
            </div>
            <div class="flex-1 min-w-0">
              <span class="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-1"
                :class="colorMap[card.color].badge">
                {{ card.badge }}
              </span>
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white leading-snug">{{ card.title }}</h3>
            </div>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{{ card.body }}</p>
          <button class="text-xs font-semibold text-indigo-600 dark:text-indigo-400
            hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200
            flex items-center gap-1 group-hover:gap-2">
            {{ card.action }}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

