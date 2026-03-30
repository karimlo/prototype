import { ref } from 'vue'

const isLoggedIn = ref(sessionStorage.getItem('scout-auth') === 'true')

export function useAuth() {
  function login() {
    isLoggedIn.value = true
    sessionStorage.setItem('scout-auth', 'true')
  }

  function logout() {
    isLoggedIn.value = false
    sessionStorage.removeItem('scout-auth')
  }

  return { isLoggedIn, login, logout }
}

