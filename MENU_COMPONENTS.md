# Responsive Menu Components

## 📋 Overview

Three responsive menu components have been created using Tailwind CSS, based on your reference design. All menus are mobile-responsive with a hamburger toggle for small screens.

## 🎨 Available Menu Components

### 1. **ResponsiveMenu.vue** (Primary Color)
The main menu component using your brand's primary color (Indigo #6366f1).

**Features:**
- ✅ Fully responsive (mobile hamburger menu)
- ✅ Customizable brand name
- ✅ Customizable menu items via props
- ✅ Icon support
- ✅ Active state highlighting
- ✅ Smooth transitions
- ✅ Hover effects with underline animation

### 2. **DarkMenu.vue** (Dark Theme)
A dark-themed menu with gray-900 background.

**Features:**
- ✅ Dark background (gray-900)
- ✅ Light text for contrast
- ✅ Subtle hover effects
- ✅ Perfect for dark mode interfaces

### 3. **LightMenu.vue** (Light Theme)
A light-themed menu with white background and border.

**Features:**
- ✅ Clean white background
- ✅ Gray border for definition
- ✅ Primary color accents on hover
- ✅ Perfect for light, airy designs

## 🚀 Usage

### Basic Usage

```vue
<script setup>
import ResponsiveMenu from './components/ResponsiveMenu.vue'
</script>

<template>
  <ResponsiveMenu />
</template>
```

### With Custom Brand Name

```vue
<template>
  <ResponsiveMenu brand-name="My Awesome App" />
</template>
```

### With Custom Menu Items

```vue
<script setup>
import { ref } from 'vue'
import ResponsiveMenu from './components/ResponsiveMenu.vue'

const menuItems = ref([
  { name: 'Home', href: '/', icon: '🏠', active: true },
  { name: 'About', href: '/about', icon: 'ℹ️' },
  { name: 'Services', href: '/services', icon: '🛠️' },
  { name: 'Contact', href: '/contact', icon: '📧' }
])
</script>

<template>
  <ResponsiveMenu 
    brand-name="My Business"
    :menu-items="menuItems"
  />
</template>
```

### Using Different Themes

```vue
<script setup>
import ResponsiveMenu from './components/ResponsiveMenu.vue'
import DarkMenu from './components/DarkMenu.vue'
import LightMenu from './components/LightMenu.vue'
</script>

<template>
  <!-- Primary Color Menu -->
  <ResponsiveMenu />
  
  <!-- Dark Theme Menu -->
  <DarkMenu />
  
  <!-- Light Theme Menu -->
  <LightMenu />
</template>
```

## 📝 Props

### ResponsiveMenu Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `brandName` | String | `'MyApp'` | The brand/logo text displayed on the left |
| `menuItems` | Array | See below | Array of menu item objects |

### Menu Item Object Structure

```javascript
{
  name: 'Item Name',      // Required: Display text
  href: '#link',          // Required: Link URL
  icon: '🔍',            // Optional: Emoji or icon
  active: false,          // Optional: Active state
  onClick: () => {}       // Optional: Click handler function
}
```

## 🎯 Examples

### Example 1: Dashboard Menu

```vue
<script setup>
import { ref } from 'vue'

const dashboardMenu = ref([
  { name: 'Dashboard', href: '/dashboard', icon: '📊', active: true },
  { name: 'Projects', href: '/projects', icon: '📁' },
  { name: 'Team', href: '/team', icon: '👥' },
  { name: 'Analytics', href: '/analytics', icon: '📈' },
  { name: 'Settings', href: '/settings', icon: '⚙️' }
])
</script>

<template>
  <ResponsiveMenu 
    brand-name="Dashboard"
    :menu-items="dashboardMenu"
  />
</template>
```

### Example 2: E-commerce Menu

```vue
<script setup>
import { ref } from 'vue'

const shopMenu = ref([
  { name: 'Shop', href: '/shop', icon: '🛍️' },
  { name: 'Cart', href: '/cart', icon: '🛒' },
  { name: 'Orders', href: '/orders', icon: '📦' },
  { name: 'Account', href: '/account', icon: '👤' }
])
</script>

<template>
  <ResponsiveMenu 
    brand-name="My Store"
    :menu-items="shopMenu"
  />
</template>
```

### Example 3: With Click Handlers

```vue
<script setup>
import { ref } from 'vue'

const handleLogout = () => {
  console.log('Logging out...')
  // Add your logout logic here
}

const menuWithActions = ref([
  { name: 'Home', href: '#home', icon: '🏠' },
  { name: 'Profile', href: '#profile', icon: '👤' },
  { 
    name: 'Logout', 
    href: '#', 
    icon: '🚪',
    onClick: handleLogout 
  }
])
</script>

<template>
  <ResponsiveMenu :menu-items="menuWithActions" />
</template>
```

## 🎨 Customization

### Changing Colors

To customize the menu colors, you can:

1. **Modify the component directly** - Edit the Tailwind classes in the component file
2. **Create a new variant** - Copy one of the existing menus and adjust colors
3. **Use Tailwind config** - Add custom colors to `tailwind.config.js`

### Example: Custom Color Menu

```vue
<!-- In your component -->
<nav class="bg-green-500 rounded-lg shadow-lg">
  <!-- Menu content with green theme -->
</nav>
```

## 📱 Responsive Behavior

### Desktop (lg and above)
- Horizontal menu layout
- All items visible
- Hover effects active
- No hamburger button

### Mobile (below lg breakpoint)
- Hamburger menu button visible
- Menu items hidden by default
- Vertical menu layout when open
- Click hamburger to toggle

### Breakpoint
- Mobile: < 1024px
- Desktop: ≥ 1024px

## ✨ Features Explained

### 1. Mobile Toggle
- Hamburger icon on mobile devices
- Transforms to X icon when menu is open
- Smooth animation

### 2. Hover Effects
- Background color change on hover
- Underline animation (desktop only)
- Smooth transitions

### 3. Active State
- Set `active: true` in menu item
- Highlighted background
- Visual indicator for current page

### 4. Icons
- Support for emoji icons
- Can be replaced with icon libraries (Font Awesome, etc.)
- Optional - works without icons

## 🔧 Integration with Existing Layout

To integrate with your existing `TopNavBar.vue`:

```vue
<!-- Option 1: Replace TopNavBar -->
<script setup>
import ResponsiveMenu from './components/ResponsiveMenu.vue'
// Remove old TopNavBar import
</script>

<template>
  <ResponsiveMenu brand-name="MyApp" />
</template>
```

```vue
<!-- Option 2: Use alongside existing components -->
<template>
  <div>
    <ResponsiveMenu />
    <MainLayout />
  </div>
</template>
```

## 📚 View Examples

To see all menu variations in action, view the `MenuExamples.vue` component:

```vue
<script setup>
import MenuExamples from './components/MenuExamples.vue'
</script>

<template>
  <MenuExamples />
</template>
```

## 🎯 Best Practices

1. **Keep menu items concise** - Use short, clear labels
2. **Limit menu items** - 5-7 items for best UX
3. **Use icons consistently** - All items with icons or none
4. **Set active state** - Highlight current page
5. **Test on mobile** - Ensure hamburger menu works properly

---

**Created**: February 4, 2026  
**Status**: ✅ Ready to use!

