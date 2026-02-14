<template>
  <div class="w-full py-2">
    <nav class="relative flex flex-wrap items-center justify-between px-4 py-3 bg-primary-500 rounded-lg shadow-lg">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <!-- Logo and Mobile Toggle -->
        <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a 
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:text-primary-100 transition-colors" 
            href="#"
          >
            {{ brandName }}
          </a>
          <button 
            class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none hover:bg-primary-600 transition-colors" 
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
            <li 
              v-for="item in menuItems" 
              :key="item.name" 
              class="nav-item"
            >
              <a 
                :href="item.href"
                :class="{'bg-primary-600': item.active}"
                class="px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:bg-primary-600 hover:text-primary-50 rounded transition-all duration-200"
                @click="item.onClick ? item.onClick() : null"
              >
                <span v-if="item.icon" class="mr-2 text-lg">{{ item.icon }}</span>
                {{ item.name }}
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

// Props
const props = defineProps({
  brandName: {
    type: String,
    default: 'MyApp'
  },
  menuItems: {
    type: Array,
    default: () => [
      { name: 'Discover', href: '#discover', icon: '🔍' },
      { name: 'Profile', href: '#profile', icon: '👤' },
      { name: 'Settings', href: '#settings', icon: '⚙️' }
    ]
  }
})

// State
const menuShow = ref(false)

// Methods
const toggleNavbar = () => {
  menuShow.value = !menuShow.value
}
</script>

<style scoped>
/* Additional custom styles if needed */
.nav-item a {
  position: relative;
}

.nav-item a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-item a:hover::after {
  width: 80%;
}

@media (max-width: 1024px) {
  .nav-item a::after {
    display: none;
  }
}
</style>

