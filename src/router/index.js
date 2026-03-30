import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'
import AccountsPage from '../pages/AccountsPage.vue'
import InvestmentsPage from '../pages/InvestmentsPage.vue'
import ExpensesPage from '../pages/ExpensesPage.vue'
import LoansPage from '../pages/LoansPage.vue'
import CreditCardsPage from '../pages/CreditCardsPage.vue'
import RetirementPage from '../pages/RetirementPage.vue'

const routes = [
  { path: '/login', component: LoginPage, meta: { public: true } },
  { path: '/', component: HomePage },
  { path: '/accounts', component: AccountsPage },
  { path: '/investments', component: InvestmentsPage },
  { path: '/spending', component: ExpensesPage },
  { path: '/expenses', redirect: '/spending' },
  { path: '/loans', component: LoansPage },
  { path: '/credit-cards', component: CreditCardsPage },
  { path: '/retirement', component: RetirementPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const loggedIn = sessionStorage.getItem('scout-auth') === 'true'
  if (!to.meta.public && !loggedIn) return '/login'
  if (to.path === '/login' && loggedIn) return '/'
})

export default router

