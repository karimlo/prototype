# Page Templates Documentation

## 📋 Overview

Page templates provide a complete page structure with a responsive menu at the top and an empty content area ready for your content. These templates make it easy to create consistent pages across your application.

## 🎨 Available Templates

### 1. **PageTemplate.vue** (Default - Primary Color)
The main customizable page template with primary color menu.

**Features:**
- ✅ Responsive menu with primary color (Indigo #6366f1)
- ✅ Customizable brand name via props
- ✅ Customizable menu items via props
- ✅ Empty content area with slot
- ✅ Full-height layout
- ✅ Container with responsive padding

### 2. **PageTemplateDark.vue** (Dark Theme)
Page template with dark-themed menu.

**Features:**
- ✅ Dark menu (gray-900 background)
- ✅ Same layout structure
- ✅ Perfect for dark mode interfaces

### 3. **PageTemplateLight.vue** (Light Theme)
Page template with light-themed menu.

**Features:**
- ✅ Light menu (white background with border)
- ✅ Clean, minimal design
- ✅ Primary color accents

## 🚀 Usage

### Basic Usage (Default Template)

```vue
<script setup>
import PageTemplate from './components/PageTemplate.vue'
</script>

<template>
  <PageTemplate>
    <!-- Your page content goes here -->
    <h1 class="text-3xl font-bold">Welcome!</h1>
    <p class="text-gray-600">This is my page content.</p>
  </PageTemplate>
</template>
```

### With Custom Brand Name

```vue
<template>
  <PageTemplate brand-name="My Awesome App">
    <!-- Your content -->
  </PageTemplate>
</template>
```

### With Custom Menu Items

```vue
<script setup>
import { ref } from 'vue'
import PageTemplate from './components/PageTemplate.vue'

const menuItems = ref([
  { name: 'Home', href: '/', icon: '🏠', active: true },
  { name: 'About', href: '/about', icon: 'ℹ️' },
  { name: 'Services', href: '/services', icon: '🛠️' },
  { name: 'Contact', href: '/contact', icon: '📧' }
])
</script>

<template>
  <PageTemplate 
    brand-name="My Business"
    :menu-items="menuItems"
  >
    <h1>Welcome to My Business</h1>
    <!-- More content -->
  </PageTemplate>
</template>
```

### Using Dark Template

```vue
<script setup>
import PageTemplateDark from './components/PageTemplateDark.vue'
</script>

<template>
  <PageTemplateDark>
    <h1 class="text-3xl font-bold">Dark Theme Page</h1>
    <!-- Your content -->
  </PageTemplateDark>
</template>
```

### Using Light Template

```vue
<script setup>
import PageTemplateLight from './components/PageTemplateLight.vue'
</script>

<template>
  <PageTemplateLight>
    <h1 class="text-3xl font-bold">Light Theme Page</h1>
    <!-- Your content -->
  </PageTemplateLight>
</template>
```

## 📝 Props

### PageTemplate Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `brandName` | String | `'MyApp'` | The brand/logo text in the menu |
| `menuItems` | Array | Default menu | Array of menu item objects |

**Note:** `PageTemplateDark` and `PageTemplateLight` do not accept props. To customize them, edit the component files directly.

### Menu Item Object Structure

```javascript
{
  name: 'Item Name',      // Required: Display text
  href: '#link',          // Required: Link URL
  icon: '🔍',            // Optional: Emoji or icon
  active: false,          // Optional: Active state
  onClick: () => {}       // Optional: Click handler
}
```

## 🎯 Complete Examples

### Example 1: Dashboard Page

```vue
<script setup>
import { ref } from 'vue'
import PageTemplate from './components/PageTemplate.vue'

const dashboardMenu = ref([
  { name: 'Dashboard', href: '/dashboard', icon: '📊', active: true },
  { name: 'Projects', href: '/projects', icon: '📁' },
  { name: 'Team', href: '/team', icon: '👥' },
  { name: 'Reports', href: '/reports', icon: '📄' },
  { name: 'Settings', href: '/settings', icon: '⚙️' }
])
</script>

<template>
  <PageTemplate 
    brand-name="Dashboard"
    :menu-items="dashboardMenu"
  >
    <!-- Dashboard Content -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Total Users</h3>
        <p class="text-3xl font-bold text-primary-500">1,234</p>
      </div>
      <!-- More cards -->
    </div>
  </PageTemplate>
</template>
```

### Example 2: Landing Page

```vue
<script setup>
import { ref } from 'vue'
import PageTemplateLight from './components/PageTemplateLight.vue'
</script>

<template>
  <PageTemplateLight>
    <!-- Hero Section -->
    <div class="text-center py-20">
      <h1 class="text-5xl font-bold text-gray-900 mb-4">
        Welcome to Our Platform
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Build amazing things with our tools
      </p>
      <button class="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold">
        Get Started
      </button>
    </div>
  </PageTemplateLight>
</template>
```

### Example 3: Admin Panel

```vue
<script setup>
import PageTemplateDark from './components/PageTemplateDark.vue'
</script>

<template>
  <PageTemplateDark>
    <!-- Admin Content -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold mb-4">Admin Panel</h2>
      <div class="space-y-4">
        <!-- Admin controls -->
      </div>
    </div>
  </PageTemplateDark>
</template>
```

## 🏗️ Template Structure

Each template follows this structure:

```
┌─────────────────────────────────────────┐
│         Responsive Menu                 │
│  (Logo + Navigation Links)              │
├─────────────────────────────────────────┤
│                                         │
│         Main Content Area               │
│      (Your content via slot)            │
│                                         │
│  - Container with responsive padding    │
│  - Full height layout                   │
│  - Gray background                      │
│                                         │
└─────────────────────────────────────────┘
```

## 🎨 Customization

### Changing Background Color

Edit the template component:

```vue
<!-- Change from bg-gray-50 to your preferred color -->
<div class="min-h-screen bg-white">
```

### Adjusting Container Width

The default container is responsive. To change:

```vue
<!-- Default -->
<div class="container mx-auto px-4 py-8">

<!-- Full width -->
<div class="w-full px-4 py-8">

<!-- Custom max width -->
<div class="max-w-7xl mx-auto px-4 py-8">
```

### Changing Padding

```vue
<!-- More padding -->
<div class="container mx-auto px-8 py-12">

<!-- Less padding -->
<div class="container mx-auto px-2 py-4">

<!-- Responsive padding -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
```

## 📱 Responsive Behavior

- **Menu**: Automatically responsive (hamburger on mobile)
- **Container**: Responsive padding (4 on mobile, can be customized)
- **Content**: Full width on mobile, contained on desktop
- **Height**: Minimum full viewport height

## 🔧 Integration with App.vue

### Option 1: Use as Main Layout

```vue
<!-- src/App.vue -->
<script setup>
import PageTemplate from './components/PageTemplate.vue'
</script>

<template>
  <PageTemplate>
    <!-- All your app content -->
  </PageTemplate>
</template>
```

### Option 2: Use with Router

```vue
<!-- src/App.vue -->
<script setup>
import PageTemplate from './components/PageTemplate.vue'
</script>

<template>
  <PageTemplate>
    <router-view />
  </PageTemplate>
</template>
```

## 📚 View All Examples

To see all template variations:

```vue
<script setup>
import PageTemplateExamples from './components/PageTemplateExamples.vue'
</script>

<template>
  <PageTemplateExamples />
</template>
```

## 🎯 Best Practices

1. **Choose the right template** - Match the template theme to your app design
2. **Customize menu items** - Provide relevant navigation for your app
3. **Use slots properly** - Put all page content inside the template tags
4. **Keep it consistent** - Use the same template across similar pages
5. **Test responsiveness** - Check mobile and desktop views

## 📁 Files

```
src/components/
├── PageTemplate.vue           # Default (primary color)
├── PageTemplateDark.vue       # Dark theme
├── PageTemplateLight.vue      # Light theme
└── PageTemplateExamples.vue   # All examples
```

---

**Created**: February 4, 2026  
**Status**: ✅ Ready to use!

