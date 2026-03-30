import { ref, watch } from 'vue'

const isDark = ref(document.documentElement.classList.contains('dark'))

watch(isDark, (val) => {
  if (val) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('scout-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('scout-theme', 'light')
  }
})

export function useTheme() {
  function toggleTheme() {
    isDark.value = !isDark.value
  }
  return { isDark, toggleTheme }
}

