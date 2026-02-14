<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">
        Tailwind CSS Example
      </h1>
      <p class="text-gray-600">
        This component demonstrates Tailwind CSS utility classes
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <!-- Card 1 -->
      <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
          <span class="text-2xl">🎨</span>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Design</h3>
        <p class="text-gray-600 text-sm">
          Beautiful, responsive designs with Tailwind CSS utilities
        </p>
      </div>

      <!-- Card 2 -->
      <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          <span class="text-2xl">⚡</span>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
        <p class="text-gray-600 text-sm">
          Optimized CSS with automatic purging of unused styles
        </p>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <span class="text-2xl">📱</span>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Responsive</h3>
        <p class="text-gray-600 text-sm">
          Mobile-first responsive design with breakpoint utilities
        </p>
      </div>
    </div>

    <!-- Buttons -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Button Examples</h2>
      <div class="flex flex-wrap gap-3">
        <button class="bg-primary-500 hover:bg-primary-600 text-white font-medium px-4 py-2 rounded-md transition-colors">
          Primary Button
        </button>
        <button class="bg-white hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-md border border-gray-300 transition-colors">
          Secondary Button
        </button>
        <button class="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md transition-colors">
          Success Button
        </button>
        <button class="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-md transition-colors">
          Danger Button
        </button>
      </div>
    </div>

    <!-- Form Example -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Form Example</h2>
      <form class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input 
            type="email" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea 
            rows="4"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <button 
          type="submit"
          class="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium px-4 py-2 rounded-md transition-colors"
        >
          Submit
        </button>
      </form>
    </div>

    <!-- Alert Examples -->
    <div class="mt-8 space-y-4">
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <div class="flex">
          <div class="flex-shrink-0">
            <span class="text-blue-500">ℹ️</span>
          </div>
          <div class="ml-3">
            <p class="text-sm text-blue-700">
              This is an informational alert using Tailwind CSS classes
            </p>
          </div>
        </div>
      </div>

      <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded">
        <div class="flex">
          <div class="flex-shrink-0">
            <span class="text-green-500">✓</span>
          </div>
          <div class="ml-3">
            <p class="text-sm text-green-700">
              Success! Your changes have been saved
            </p>
          </div>
        </div>
      </div>

      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <div class="flex">
          <div class="flex-shrink-0">
            <span class="text-yellow-500">⚠️</span>
          </div>
          <div class="ml-3">
            <p class="text-sm text-yellow-700">
              Warning: Please review your information
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Tailwind CSS example component
</script>

<style scoped>
/* No custom styles needed - everything is done with Tailwind! */
</style>

