<script setup>
import { ref, nextTick } from 'vue'
import { useDesktopChat } from '../composables/useDesktopChat.js'

const { isOpen, close, panelWidth } = useDesktopChat()

const input = ref('')
const messagesEl = ref(null)
const isTyping = ref(false)

const messages = ref([
  { role: 'ai', text: "Hi! I'm your SCOUT AI assistant. Ask me anything about your finances — budgeting, investments, taxes, and more." }
])

const suggestions = [
  "How's my spending this month?",
  "Should I pay off my loan early?",
  "How much should I save for taxes?",
  "Review my investment portfolio",
]

const aiReplies = [
  "Based on your spending patterns, you've used 78% of your monthly budget. Your biggest category is dining at $420 this month — consider setting a cap of $300.",
  "With your current loan at 6.5% APR and $12,400 remaining, paying an extra $200/month would save you $1,840 in interest and cut 8 months off your term.",
  "As a college athlete with NIL income, I recommend setting aside 25-30% for federal and state taxes. Based on $48,000 annual NIL income, that's roughly $12,000–$14,400/year.",
  "Your portfolio is 60% index funds, 25% individual stocks, and 15% cash. Consider reducing cash and increasing index fund allocation for long-term growth.",
  "Your savings rate is currently 12% of income. Financial experts recommend 20%. Automating an extra $180/month into a high-yield savings account would close that gap.",
]

let replyIndex = 0

async function sendMessage(text) {
  const msg = text || input.value.trim()
  if (!msg) return
  input.value = ''
  messages.value.push({ role: 'user', text: msg })
  await scrollToBottom()
  isTyping.value = true
  await new Promise(r => setTimeout(r, 1200 + Math.random() * 800))
  isTyping.value = false
  messages.value.push({ role: 'ai', text: aiReplies[replyIndex % aiReplies.length] })
  replyIndex++
  await scrollToBottom()
}

async function scrollToBottom() {
  await nextTick()
  if (messagesEl.value) messagesEl.value.scrollTop = messagesEl.value.scrollHeight
}

// ─── Resize drag ────────────────────────────────────────────────────────────
function startResize(e) {
  e.preventDefault()
  const startX = e.clientX
  const startW = panelWidth.value

  function onMove(e) {
    // Dragging left → panel grows; dragging right → panel shrinks
    const diff = startX - e.clientX
    panelWidth.value = Math.max(300, Math.min(760, startW + diff))
  }
  function onUp() {
    document.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseup', onUp)
    document.body.style.cursor = ''
    document.body.style.userSelect = ''
  }

  document.body.style.cursor = 'ew-resize'
  document.body.style.userSelect = 'none'
  document.addEventListener('mousemove', onMove)
  document.addEventListener('mouseup', onUp)
}
</script>

<template>
  <!-- Desktop only: hidden on mobile -->
  <Transition name="slide-right">
    <div
      v-if="isOpen"
      class="hidden md:flex fixed top-16 right-0 bottom-0 z-40 flex-col
        bg-white dark:bg-gray-900
        border-l border-gray-200 dark:border-gray-800
        shadow-2xl"
      :style="{ width: panelWidth + 'px' }"
    >
      <!-- ── Drag handle ── -->
      <div
        class="absolute left-0 top-0 bottom-0 w-1.5 cursor-ew-resize z-10 group"
        @mousedown="startResize"
      >
        <div class="absolute inset-0 group-hover:bg-scout/40 transition-colors duration-150 rounded-r" />
      </div>

      <!-- ── Header ── -->
      <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800 shrink-0">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full bg-scout flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
            </svg>
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-900 dark:text-white leading-tight">SCOUT AI</p>
            <p class="text-[10px] text-green-500 font-medium">Online</p>
          </div>
        </div>
        <button
          @click="close()"
          class="w-8 h-8 flex items-center justify-center rounded-full text-gray-400
            hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-200
            transition-colors"
          aria-label="Close panel"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- ── Messages ── -->
      <div ref="messagesEl" class="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
        <div v-for="(msg, i) in messages" :key="i" class="flex" :class="msg.role === 'user' ? 'justify-end' : 'justify-start'">
          <div
            class="max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
            :class="msg.role === 'user'
              ? 'bg-scout text-white rounded-br-sm'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm'"
          >
            {{ msg.text }}
          </div>
        </div>
        <!-- Typing indicator -->
        <div v-if="isTyping" class="flex justify-start">
          <div class="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
            <span v-for="n in 3" :key="n" class="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" :style="`animation-delay:${(n-1)*0.15}s`" />
          </div>
        </div>
      </div>

      <!-- ── Suggestions ── -->
      <div class="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-none shrink-0">
        <button
          v-for="s in suggestions" :key="s"
          @click="sendMessage(s)"
          class="shrink-0 text-xs px-3 py-1.5 rounded-full border border-scout/30 dark:border-scout/40
            text-scout hover:bg-scout/10 dark:hover:bg-scout/20
            transition-colors duration-200 whitespace-nowrap"
        >{{ s }}</button>
      </div>

      <!-- ── Input ── -->
      <div class="px-4 pb-4 pt-2 flex items-center gap-2 shrink-0">
        <input
          v-model="input"
          @keydown.enter="sendMessage()"
          type="text"
          placeholder="Ask anything about your finances…"
          class="flex-1 px-4 py-2.5 rounded-full text-sm border border-gray-200 dark:border-gray-700
            bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-scout/40 transition-all"
        />
        <button
          @click="sendMessage()"
          class="w-9 h-9 flex items-center justify-center rounded-full bg-scout hover:bg-scout/90
            text-white transition-colors duration-200 shrink-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-right-enter-from, .slide-right-leave-to {
  transform: translateX(100%);
}
.scrollbar-thin { scrollbar-width: thin; }
.scrollbar-none { scrollbar-width: none; }
.scrollbar-none::-webkit-scrollbar { display: none; }
</style>

