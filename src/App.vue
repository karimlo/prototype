<script setup>
import { ref } from 'vue'
import TopNavBar from './components/TopNavBar.vue'
import LeftNav from './components/LeftNav.vue'
import PageHeader from './components/PageHeader.vue'

const sidebarExpanded = ref(false)
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Top Navigation -->
    <TopNavBar />

    <!-- Left Navigation -->
    <LeftNav @update:expanded="sidebarExpanded = $event" />

    <!-- Main Content Area -->
    <main
      class="pt-14 transition-all duration-300 ease-in-out"
      :class="sidebarExpanded ? 'pl-52' : 'pl-16'"
    >
      <!-- Page Header -->
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back! Here's what's happening with your prototypes today."
      />

      <!-- Page Body / Content -->
      <div class="px-6 pb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <!-- Example placeholder cards -->
          <div class="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                </svg>
              </div>
              <h3 class="text-sm font-semibold text-gray-900">Components</h3>
            </div>
            <p class="text-sm text-gray-500 leading-relaxed">Reusable UI components built for rapid prototyping.</p>
          </div>

          <div class="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 class="text-sm font-semibold text-gray-900">Status</h3>
            </div>
            <p class="text-sm text-gray-500 leading-relaxed">All systems running. Last deployed successfully.</p>
          </div>

          <div class="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 class="text-sm font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <p class="text-sm text-gray-500 leading-relaxed">Track the latest changes and updates here.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
