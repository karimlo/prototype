<template>
  <div class="max-w-7xl mx-auto p-6 space-y-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Responsive Menu Examples</h1>
      <p class="text-gray-600">Different menu variations using Tailwind CSS</p>
    </div>

    <!-- Example 1: Default Menu -->
    <div>
      <h2 class="text-xl font-semibold text-gray-900 mb-4">1. Default Menu (Primary Color)</h2>
      <ResponsiveMenu />
    </div>

    <!-- Example 2: Custom Brand Name -->
    <div>
      <h2 class="text-xl font-semibold text-gray-900 mb-4">2. Custom Brand Name</h2>
      <ResponsiveMenu brand-name="Prototype App" />
    </div>

    <!-- Example 3: Custom Menu Items -->
    <div>
      <h2 class="text-xl font-semibold text-gray-900 mb-4">3. Custom Menu Items</h2>
      <ResponsiveMenu 
        brand-name="Dashboard"
        :menu-items="customMenuItems"
      />
    </div>

    <!-- Example 4: Dark Menu -->
    <div>
      <h2 class="text-xl font-semibold text-gray-900 mb-4">4. Dark Menu Variant</h2>
      <DarkMenu />
    </div>

    <!-- Example 5: Light Menu -->
    <div>
      <h2 class="text-xl font-semibold text-gray-900 mb-4">5. Light Menu Variant</h2>
      <LightMenu />
    </div>

    <!-- Usage Instructions -->
    <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-8">
      <h3 class="text-lg font-semibold text-blue-900 mb-2">📖 How to Use</h3>
      <div class="text-sm text-blue-800 space-y-2">
        <p><strong>Basic Usage:</strong></p>
        <pre class="bg-blue-100 p-3 rounded text-xs overflow-x-auto"><code>&lt;ResponsiveMenu /&gt;</code></pre>
        
        <p class="mt-4"><strong>With Custom Props:</strong></p>
        <pre class="bg-blue-100 p-3 rounded text-xs overflow-x-auto"><code>&lt;ResponsiveMenu 
  brand-name="Your Brand"
  :menu-items="yourMenuItems"
/&gt;</code></pre>

        <p class="mt-4"><strong>Menu Items Format:</strong></p>
        <pre class="bg-blue-100 p-3 rounded text-xs overflow-x-auto"><code>const menuItems = [
  { name: 'Home', href: '#home', icon: '🏠', active: true },
  { name: 'About', href: '#about', icon: 'ℹ️' },
  { name: 'Contact', href: '#contact', icon: '📧' }
]</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ResponsiveMenu from './ResponsiveMenu.vue'
import DarkMenu from './DarkMenu.vue'
import LightMenu from './LightMenu.vue'

const customMenuItems = ref([
  { name: 'Dashboard', href: '#dashboard', icon: '📊', active: true },
  { name: 'Projects', href: '#projects', icon: '📁' },
  { name: 'Team', href: '#team', icon: '👥' },
  { name: 'Analytics', href: '#analytics', icon: '📈' },
  { name: 'Reports', href: '#reports', icon: '📄' }
])
</script>

