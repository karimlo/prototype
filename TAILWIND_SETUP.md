# Tailwind CSS Setup Guide

## ✅ Installation Complete

Tailwind CSS has been successfully installed and configured for your Vue + Vite project!

## 📦 Installed Packages

The following packages were installed as dev dependencies:

```json
{
  "tailwindcss": "^4.1.18",
  "postcss": "^8.5.6",
  "autoprefixer": "^10.4.24"
}
```

## 📁 Configuration Files

### 1. `tailwind.config.js`
This file configures Tailwind CSS for your project:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          // ... full indigo color palette
          500: '#6366f1', // Your brand color
          600: '#4f46e5',
          900: '#312e81',
        },
      },
    },
  },
  plugins: [],
}
```

**Key Features**:
- Content paths configured to scan all Vue files
- Custom `primary` color palette (Indigo) matching your brand
- Ready for additional theme extensions

### 2. `postcss.config.js`
PostCSS configuration for processing Tailwind:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 3. `src/style.css`
Updated with Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🎨 Using Tailwind CSS

### Basic Usage

You can now use Tailwind utility classes in your Vue components:

```vue
<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h1 class="text-2xl font-bold text-gray-900">Hello Tailwind!</h1>
    <p class="text-gray-600 mt-2">This is styled with Tailwind CSS</p>
    <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">
      Click Me
    </button>
  </div>
</template>
```

### Custom Primary Color

The primary color palette is available as `primary-{shade}`:

```html
<!-- Backgrounds -->
<div class="bg-primary-500">Primary background</div>
<div class="bg-primary-50">Light primary background</div>

<!-- Text -->
<p class="text-primary-600">Primary text</p>

<!-- Borders -->
<div class="border-2 border-primary-500">Primary border</div>

<!-- Hover states -->
<button class="bg-primary-500 hover:bg-primary-600">Hover me</button>
```

## 🔧 Common Tailwind Classes

### Layout
```html
<div class="flex items-center justify-between">
<div class="grid grid-cols-3 gap-4">
<div class="container mx-auto px-4">
```

### Spacing
```html
<div class="p-4">Padding all sides</div>
<div class="px-6 py-4">Padding x and y</div>
<div class="mt-4 mb-2">Margin top and bottom</div>
<div class="space-y-4">Space between children</div>
```

### Typography
```html
<h1 class="text-2xl font-bold">Heading</h1>
<p class="text-sm text-gray-600">Small gray text</p>
<span class="font-semibold">Semi-bold</span>
```

### Colors
```html
<div class="bg-white text-gray-900">
<div class="bg-gray-50 text-gray-700">
<div class="bg-primary-500 text-white">
```

### Borders & Shadows
```html
<div class="border border-gray-200 rounded-lg">
<div class="shadow-md rounded">
<div class="ring-2 ring-primary-500">
```

### Responsive Design
```html
<div class="w-full md:w-1/2 lg:w-1/3">
<div class="hidden md:block">Show on medium screens and up</div>
<div class="text-sm md:text-base lg:text-lg">Responsive text</div>
```

## 🎯 Migrating Existing Components

You can gradually migrate your existing components to use Tailwind:

### Before (Custom CSS):
```vue
<style scoped>
.button {
  background-color: #6366f1;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}
.button:hover {
  background-color: #4f46e5;
}
</style>
```

### After (Tailwind):
```vue
<template>
  <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md">
    Click Me
  </button>
</template>
```

## 🚀 Next Steps

1. **Start using Tailwind** in your components
2. **Remove custom CSS** as you migrate to Tailwind utilities
3. **Extend the theme** in `tailwind.config.js` as needed
4. **Add Tailwind plugins** for additional functionality:
   - `@tailwindcss/forms` - Better form styles
   - `@tailwindcss/typography` - Prose styles
   - `@tailwindcss/aspect-ratio` - Aspect ratio utilities

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Tailwind UI Components](https://tailwindui.com/)
- [Headless UI (Vue)](https://headlessui.com/) - Unstyled, accessible components

## ⚡ Development

The dev server will automatically:
- Process Tailwind CSS
- Hot reload when you change classes
- Purge unused styles in production builds

Just run:
```bash
npm run dev
```

## 🏗️ Production Build

When you build for production:
```bash
npm run build
```

Tailwind will automatically:
- Remove unused CSS classes
- Minify the output
- Optimize for performance

Your final CSS bundle will only include the classes you actually use!

