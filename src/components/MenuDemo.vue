<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Responsive Menu at the top -->
    <ResponsiveMenu 
      brand-name="Prototype App"
      :menu-items="mainMenuItems"
    />

    <!-- Main Content Area -->
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-md p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          Welcome to Your App
        </h1>
        <p class="text-gray-600 mb-6">
          The responsive menu is now integrated at the top of the page. Try resizing your browser window to see the mobile hamburger menu in action!
        </p>

        <!-- Feature Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="bg-primary-50 rounded-lg p-6">
            <div class="text-3xl mb-3">📱</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Responsive</h3>
            <p class="text-sm text-gray-600">
              Automatically adapts to mobile, tablet, and desktop screens
            </p>
          </div>

          <div class="bg-green-50 rounded-lg p-6">
            <div class="text-3xl mb-3">🎨</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Customizable</h3>
            <p class="text-sm text-gray-600">
              Easy to customize colors, items, and behavior via props
            </p>
          </div>

          <div class="bg-blue-50 rounded-lg p-6">
            <div class="text-3xl mb-3">⚡</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Fast</h3>
            <p class="text-sm text-gray-600">
              Built with Tailwind CSS for optimal performance
            </p>
          </div>
        </div>

        <!-- Code Example -->
        <div class="mt-8 bg-gray-900 rounded-lg p-6 text-white">
          <h3 class="text-lg font-semibold mb-4">Quick Usage Example</h3>
          <pre class="text-sm overflow-x-auto"><code>&lt;script setup&gt;
import { ref } from 'vue'
import ResponsiveMenu from './components/ResponsiveMenu.vue'

const menuItems = ref([
  { name: 'Home', href: '/', icon: '🏠', active: true },
  { name: 'About', href: '/about', icon: 'ℹ️' },
  { name: 'Contact', href: '/contact', icon: '📧' }
])
&lt;/script&gt;

&lt;template&gt;
  &lt;ResponsiveMenu 
    brand-name="My App"
    :menu-items="menuItems"
  /&gt;
&lt;/template&gt;</code></pre>
        </div>

        <!-- Action Buttons -->
        <div class="mt-8 flex flex-wrap gap-4">
          <button 
            @click="showDarkMenu = !showDarkMenu"
            class="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            {{ showDarkMenu ? 'Hide' : 'Show' }} Dark Menu
          </button>
          <button 
            @click="showLightMenu = !showLightMenu"
            class="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-medium border-2 border-gray-300 transition-colors"
          >
            {{ showLightMenu ? 'Hide' : 'Show' }} Light Menu
          </button>
        </div>

        <!-- Dark Menu Demo -->
        <div v-if="showDarkMenu" class="mt-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Dark Menu Variant</h3>
          <DarkMenu />
        </div>

        <!-- Light Menu Demo -->
        <div v-if="showLightMenu" class="mt-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Light Menu Variant</h3>
          <LightMenu />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ResponsiveMenu from './ResponsiveMenu.vue'
import DarkMenu from './DarkMenu.vue'
import LightMenu from './LightMenu.vue'

const showDarkMenu = ref(false)
const showLightMenu = ref(false)

const mainMenuItems = ref([
  { name: 'Dashboard', href: '#dashboard', icon: '📊', active: true },
  { name: 'Projects', href: '#projects', icon: '📁' },
  { name: 'Team', href: '#team', icon: '👥' },
  { name: 'Analytics', href: '#analytics', icon: '📈' },
  { name: 'Settings', href: '#settings', icon: '⚙️' }
])
</script>

