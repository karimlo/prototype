<script setup>
import { ref, nextTick, watch } from 'vue'

defineProps({ open: Boolean })
const emit = defineEmits(['close'])

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
  "Great question! With your current loan at 6.5% APR and $12,400 remaining, paying an extra $200/month would save you $1,840 in interest and cut 8 months off your term.",
  "As a college athlete with NIL income, I recommend setting aside 25-30% for federal and state taxes. Based on your $48,000 annual NIL income, that's roughly $12,000-$14,400 per year.",
  "Your portfolio is currently 60% in index funds, 25% in individual stocks, and 15% in cash. I'd suggest reducing cash holdings and increasing your index fund allocation for long-term growth.",
  "Your savings rate is currently 12% of income. Financial experts recommend 20%. Consider automating an additional $180/month into your high-yield savings account.",
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
  if (messagesEl.value) {
    messagesEl.value.scrollTop = messagesEl.value.scrollHeight
  }
}

watch(() => props => props.open, (val) => {
  if (val) scrollToBottom()
})
</script>

<template>
  <!-- Backdrop -->
  <Transition name="fade">
    <div v-if="open" class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" @click="emit('close')" />
  </Transition>

  <!-- Chat panel slides up -->
  <Transition name="slide-up">
    <div v-if="open" class="fixed bottom-0 left-0 right-0 z-60 flex flex-col
      bg-white dark:bg-gray-900 rounded-t-2xl shadow-2xl
      h-[75vh] md:max-w-lg md:mx-auto md:rounded-2xl md:bottom-6 md:left-1/2 md:-translate-x-1/2">

      <!-- Handle + Header -->
      <div class="flex flex-col items-center pt-3 pb-2 px-5 border-b border-gray-100 dark:border-gray-800">
        <div class="w-10 h-1 rounded-full bg-gray-300 dark:bg-gray-700 mb-3" />
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-semibold text-gray-900 dark:text-white leading-tight">SCOUT AI</p>
              <p class="text-[10px] text-green-500 font-medium">Online</p>
            </div>
          </div>
          <button @click="emit('close')" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Messages -->
      <div ref="messagesEl" class="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        <div v-for="(msg, i) in messages" :key="i" class="flex" :class="msg.role === 'user' ? 'justify-end' : 'justify-start'">
          <div class="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
            :class="msg.role === 'user'
              ? 'bg-indigo-600 text-white rounded-br-sm'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm'">
            {{ msg.text }}
          </div>
        </div>
        <!-- Typing indicator -->
        <div v-if="isTyping" class="flex justify-start">
          <div class="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
            <span v-for="n in 3" :key="n" class="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" :style="`animation-delay: ${(n-1)*0.15}s`" />
          </div>
        </div>
      </div>

      <!-- Suggestions -->
      <div class="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-none">
        <button v-for="s in suggestions" :key="s" @click="sendMessage(s)"
          class="shrink-0 text-xs px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800
            text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30
            transition-colors duration-200 whitespace-nowrap">
          {{ s }}
        </button>
      </div>

      <!-- Input -->
      <div class="px-4 pb-4 pt-2 flex items-center gap-2">
        <input v-model="input" @keydown.enter="sendMessage()" type="text" placeholder="Ask anything about your finances..."
          class="flex-1 px-4 py-2.5 rounded-full text-sm border border-gray-200 dark:border-gray-700
            bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
        <button @click="sendMessage()"
          class="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700
            text-white transition-colors duration-200 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-up-enter-active, .slide-up-leave-active { transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
.slide-up-enter-from, .slide-up-leave-to { transform: translateY(100%); }

.scrollbar-none { scrollbar-width: none; }
.scrollbar-none::-webkit-scrollbar { display: none; }
</style>

