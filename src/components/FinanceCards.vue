<script setup>
// Thin monochrome SVG icon paths (Heroicons outline, stroke-width 1.5)
const icons = {
  clock:    'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  chart:    'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
  trending: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
  banknote: 'M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z',
  card:     'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z',
  flag:     'M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5',
}

const cards = [
  { icon: 'clock',    badge: 'Action Required', title: 'Tax Deadline Approaching',  body: 'You have $4,200 in estimated taxes due in 18 days. SCOUT recommends transferring funds now.',                                        action: 'Review Tax Summary'  },
  { icon: 'chart',    badge: 'AI Insight',       title: 'Spending Insight',           body: "Your dining expenses are up 32% this month. You're on track to exceed your budget by $180.",                                           action: 'View Expenses'       },
  { icon: 'trending', badge: 'Opportunity',      title: 'Investment Opportunity',     body: 'Based on your cash flow, you can invest an additional $500/month without impacting your savings goals.',                               action: 'Explore Options'     },
  { icon: 'banknote', badge: 'New',              title: 'Direct Deposit Received',    body: 'Your NIL payment of $3,500 from SportsGear Co. was deposited today. 25% has been auto-allocated to taxes.',                           action: 'View Account'        },
  { icon: 'card',     badge: 'Update',           title: 'Credit Score Update',        body: 'Your credit score improved by 12 points to 742. Keep up the on-time payments!',                                                       action: 'View Credit Report'  },
  { icon: 'flag',     badge: 'Goal',             title: 'Savings Goal Progress',      body: "You're 68% toward your $10,000 emergency fund goal. At your current rate, you'll hit it in 4 months.",                                action: 'View Goals'          },
]
</script>

<template>
  <section class="px-6 md:px-10 py-8">
    <div class="max-w-5xl mx-auto">

      <!-- Section header -->
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-lg font-bold text-gray-900 dark:text-white">AI Recommendations</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Personalized insights from your SCOUT AI</p>
        </div>
        <span class="text-xs font-medium px-3 py-1.5 rounded-full
          bg-scout/10 text-scout
          border border-scout/20">
          {{ cards.length }} updates
        </span>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(card, i) in cards"
          :key="i"
          class="group flex flex-col
            bg-white/70 dark:bg-white/[0.04]
            backdrop-blur-sm
            border border-gray-200/80 dark:border-white/[0.08]
            rounded-2xl p-6 shadow-sm
            hover:shadow-md hover:-translate-y-0.5
            transition-all duration-300 cursor-pointer"
        >
          <!-- Icon + badge row -->
          <div class="flex items-center gap-3 mb-4">
            <!-- Monochrome thin-line icon -->
            <div class="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center
              bg-amber-400/10 dark:bg-amber-400/[0.08]
              border border-amber-400/20 dark:border-amber-400/15">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-amber-600 dark:text-amber-400"
                fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" :d="icons[card.icon]" />
              </svg>
            </div>
            <!-- Badge -->
            <span class="text-[10px] font-semibold tracking-wide uppercase
              px-2.5 py-1 rounded-full
              bg-scout/10 text-scout
              border border-scout/20">
              {{ card.badge }}
            </span>
          </div>

          <!-- Title -->
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white leading-snug mb-2">
            {{ card.title }}
          </h3>

          <!-- Body -->
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-1">
            {{ card.body }}
          </p>

          <!-- Action button — proper padding so text never touches border -->
          <button class="self-start inline-flex items-center gap-2
            text-xs font-semibold
            text-scout
            bg-scout/10
            border border-scout/20
            hover:bg-scout/20
            px-4 py-2 rounded-lg
            transition-all duration-200
            group-hover:gap-3">
            {{ card.action }}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

