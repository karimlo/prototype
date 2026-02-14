<template>
  <div class="w-full py-2">
    <nav class="relative flex flex-wrap items-center justify-between px-4 py-3 bg-white border-2 border-gray-200 rounded-lg shadow-md">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <!-- Logo and Mobile Toggle -->
        <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a 
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-900 hover:text-primary-500 transition-colors" 
            href="#"
          >
            Light Theme Menu
          </a>
          <button 
            class="text-gray-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-gray-300 rounded bg-transparent block lg:hidden outline-none focus:outline-none hover:bg-gray-100 transition-colors" 
            type="button" 
            @click="toggleNavbar"
            aria-label="Toggle navigation"
          >
            <svg 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                v-if="!menuShow" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Navigation Links -->
        <div 
          :class="{'hidden': !menuShow, 'flex': menuShow}" 
          class="lg:flex lg:flex-grow items-center w-full lg:w-auto"
        >
          <ul class="flex flex-col lg:flex-row list-none lg:ml-auto mt-4 lg:mt-0 space-y-2 lg:space-y-0">
            <li class="nav-item">
              <a 
                href="#discover"
                class="px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-all duration-200"
              >
                <span class="mr-2 text-lg">🔍</span>
                Discover
              </a>
            </li>
            <li class="nav-item">
              <a 
                href="#profile"
                class="px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-all duration-200"
              >
                <span class="mr-2 text-lg">👤</span>
                Profile
              </a>
            </li>
            <li class="nav-item">
              <a 
                href="#settings"
                class="px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-all duration-200"
              >
                <span class="mr-2 text-lg">⚙️</span>
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuShow = ref(false)

const toggleNavbar = () => {
  menuShow.value = !menuShow.value
}
</script>

