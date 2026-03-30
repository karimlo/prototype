import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AccountsPage from '../pages/AccountsPage.vue'
import InvestmentsPage from '../pages/InvestmentsPage.vue'
import ExpensesPage from '../pages/ExpensesPage.vue'
import LoansPage from '../pages/LoansPage.vue'
import CreditCardsPage from '../pages/CreditCardsPage.vue'
import RetirementPage from '../pages/RetirementPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/accounts', component: AccountsPage },
  { path: '/investments', component: InvestmentsPage },
  { path: '/expenses', component: ExpensesPage },
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

export default router

