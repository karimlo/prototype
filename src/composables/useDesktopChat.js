import { ref } from 'vue'

// Shared singleton state — any component can open/close the desktop panel
const isOpen = ref(false)
const panelWidth = ref(400)

export function useDesktopChat() {
  return {
    isOpen,
    panelWidth,
    open:   () => { isOpen.value = true },
    close:  () => { isOpen.value = false },
    toggle: () => { isOpen.value = !isOpen.value },
  }
}

