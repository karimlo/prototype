<template>
  <header class="bg-white border-b border-gray-200 px-6 py-5 mb-6">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div class="flex-1">
        <h1 class="text-2xl md:text-[1.75rem] font-bold text-gray-900 leading-tight mb-1">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-sm text-gray-500 leading-relaxed">
          {{ subtitle }}
        </p>
      </div>
      <div v-if="showActions" class="flex items-center gap-3">
        <slot name="actions">
          <button
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors"
          >
            Export
          </button>
          <button
            class="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 shadow-sm hover:shadow transition-all active:translate-y-px"
          >
            Create New
          </button>
        </slot>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Dashboard'
  },
  subtitle: {
    type: String,
    default: ''
  },
  showActions: {
    type: Boolean,
    default: true
  }
})
</script>
