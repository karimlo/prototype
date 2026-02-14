<template>
  <div class="space-y-8">
    <!-- Template Selector -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Page Template Examples</h1>
      <p class="text-gray-600 mb-6">
        Choose a template to preview. Each template has a menu at the top and an empty content area ready for your content.
      </p>
      
      <div class="flex flex-wrap gap-3">
        <button 
          @click="currentTemplate = 'default'"
          :class="currentTemplate === 'default' ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-700'"
          class="px-4 py-2 rounded-lg font-medium transition-colors hover:opacity-90"
        >
          Default Template
        </button>
        <button 
          @click="currentTemplate = 'dark'"
          :class="currentTemplate === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'"
          class="px-4 py-2 rounded-lg font-medium transition-colors hover:opacity-90"
        >
          Dark Template
        </button>
        <button 
          @click="currentTemplate = 'light'"
          :class="currentTemplate === 'light' ? 'bg-white text-gray-900 border-2 border-gray-300' : 'bg-gray-200 text-gray-700'"
          class="px-4 py-2 rounded-lg font-medium transition-colors hover:opacity-90"
        >
          Light Template
        </button>
        <button 
          @click="currentTemplate = 'custom'"
          :class="currentTemplate === 'custom' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'"
          class="px-4 py-2 rounded-lg font-medium transition-colors hover:opacity-90"
        >
          Custom Menu Items
        </button>
      </div>
    </div>

    <!-- Template Preview -->
    <div class="border-4 border-dashed border-gray-300 rounded-lg overflow-hidden">
      <!-- Default Template -->
      <PageTemplate v-if="currentTemplate === 'default'">
        <div class="text-center py-20">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Default Page Template</h2>
          <p class="text-gray-600 mb-4">This template uses the primary color menu (Indigo)</p>
          <p class="text-sm text-gray-500">Add your content here using the slot</p>
        </div>
      </PageTemplate>

      <!-- Dark Template -->
      <PageTemplateDark v-if="currentTemplate === 'dark'">
        <div class="text-center py-20">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Dark Menu Template</h2>
          <p class="text-gray-600 mb-4">This template uses the dark theme menu</p>
          <p class="text-sm text-gray-500">Add your content here using the slot</p>
        </div>
      </PageTemplateDark>

      <!-- Light Template -->
      <PageTemplateLight v-if="currentTemplate === 'light'">
        <div class="text-center py-20">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Light Menu Template</h2>
          <p class="text-gray-600 mb-4">This template uses the light theme menu</p>
          <p class="text-sm text-gray-500">Add your content here using the slot</p>
        </div>
      </PageTemplateLight>

      <!-- Custom Menu Items -->
      <PageTemplate 
        v-if="currentTemplate === 'custom'"
        brand-name="Custom App"
        :menu-items="customMenuItems"
      >
        <div class="text-center py-20">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Custom Menu Items</h2>
          <p class="text-gray-600 mb-4">This template uses custom menu items passed as props</p>
          <p class="text-sm text-gray-500">Check the menu above - it has different items!</p>
        </div>
      </PageTemplate>
    </div>

    <!-- Usage Instructions -->
    <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
      <h3 class="text-lg font-semibold text-blue-900 mb-3">📖 How to Use Page Templates</h3>
      
      <div class="space-y-4 text-sm text-blue-800">
        <div>
          <p class="font-semibold mb-2">1. Basic Usage (Default Template):</p>
          <pre class="bg-blue-100 p-3 rounded overflow-x-auto"><code>&lt;script setup&gt;
import PageTemplate from './components/PageTemplate.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;PageTemplate&gt;
    &lt;!-- Your page content goes here --&gt;
    &lt;h1&gt;Welcome to my page&lt;/h1&gt;
  &lt;/PageTemplate&gt;
&lt;/template&gt;</code></pre>
        </div>

        <div>
          <p class="font-semibold mb-2">2. With Custom Brand Name and Menu Items:</p>
          <pre class="bg-blue-100 p-3 rounded overflow-x-auto"><code>&lt;script setup&gt;
import { ref } from 'vue'
import PageTemplate from './components/PageTemplate.vue'

const menuItems = ref([
  { name: 'Home', href: '/', icon: '🏠', active: true },
  { name: 'About', href: '/about', icon: 'ℹ️' }
])
&lt;/script&gt;

&lt;template&gt;
  &lt;PageTemplate 
    brand-name="My Business"
    :menu-items="menuItems"
  &gt;
    &lt;!-- Your content --&gt;
  &lt;/PageTemplate&gt;
&lt;/template&gt;</code></pre>
        </div>

        <div>
          <p class="font-semibold mb-2">3. Using Dark or Light Templates:</p>
          <pre class="bg-blue-100 p-3 rounded overflow-x-auto"><code>&lt;script setup&gt;
import PageTemplateDark from './components/PageTemplateDark.vue'
// or
import PageTemplateLight from './components/PageTemplateLight.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;PageTemplateDark&gt;
    &lt;!-- Your content --&gt;
  &lt;/PageTemplateDark&gt;
&lt;/template&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageTemplate from './PageTemplate.vue'
import PageTemplateDark from './PageTemplateDark.vue'
import PageTemplateLight from './PageTemplateLight.vue'

const currentTemplate = ref('default')

const customMenuItems = ref([
  { name: 'Home', href: '#home', icon: '🏠', active: true },
  { name: 'Products', href: '#products', icon: '🛍️' },
  { name: 'Services', href: '#services', icon: '🛠️' },
  { name: 'Blog', href: '#blog', icon: '📝' },
  { name: 'Contact', href: '#contact', icon: '📧' }
])
</script>

