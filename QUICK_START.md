# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Start the Development Server
```bash
npm run dev
```

### 2. Open Your Browser
Navigate to the URL shown (typically `http://localhost:5173`)

### 3. Start Building!
Your project is ready with:
- ✅ Vue 3
- ✅ Vite
- ✅ Tailwind CSS
- ✅ Pre-built layout components

---

## 📁 Project Structure

```
prototype/
├── src/
│   ├── App.vue                    # Main app component
│   ├── main.js                    # Entry point
│   ├── style.css                  # Global styles + Tailwind
│   └── components/
│       ├── MainLayout.vue         # Main layout container
│       ├── TopNavBar.vue          # Top navigation
│       ├── SideNavBar.vue         # Side navigation
│       ├── PageHeader.vue         # Page header
│       ├── PageBody.vue           # Page content
│       └── TailwindExample.vue    # Tailwind examples
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
└── package.json                   # Dependencies
```

---

## 🎨 Using Tailwind CSS

### Basic Example
```vue
<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h1 class="text-2xl font-bold text-gray-900 mb-4">
      Hello Tailwind!
    </h1>
    <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">
      Click Me
    </button>
  </div>
</template>
```

### Common Patterns

**Container with padding:**
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Content -->
</div>
```

**Responsive grid:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Grid items -->
</div>
```

**Flex layout:**
```html
<div class="flex items-center justify-between">
  <div>Left content</div>
  <div>Right content</div>
</div>
```

**Card component:**
```html
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  <!-- Card content -->
</div>
```

---

## 🎯 Your Custom Primary Color

Use `primary-{shade}` for your brand color:

```html
<!-- Backgrounds -->
<div class="bg-primary-500">Primary background</div>
<div class="bg-primary-50">Light background</div>

<!-- Text -->
<p class="text-primary-600">Primary text</p>

<!-- Borders -->
<div class="border-2 border-primary-500">Primary border</div>

<!-- Buttons -->
<button class="bg-primary-500 hover:bg-primary-600 text-white">
  Primary Button
</button>
```

---

## 📱 Responsive Design

Tailwind uses mobile-first breakpoints:

```html
<!-- Hidden on mobile, visible on medium screens and up -->
<div class="hidden md:block">Desktop content</div>

<!-- Full width on mobile, half width on medium screens -->
<div class="w-full md:w-1/2">Responsive width</div>

<!-- Different text sizes -->
<h1 class="text-xl md:text-2xl lg:text-3xl">Responsive heading</h1>
```

**Breakpoints:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🔧 Common Tasks

### Add a New Component
1. Create file in `src/components/`
2. Use Tailwind classes for styling
3. Import and use in your app

### Customize Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      brand: {
        500: '#your-color',
      },
    },
  },
},
```

### Add Tailwind Plugins
```bash
npm install -D @tailwindcss/forms
```

Then in `tailwind.config.js`:
```javascript
plugins: [
  require('@tailwindcss/forms'),
],
```

---

## 📚 Documentation Files

- **`INSTALLATION_SUMMARY.md`** - What was installed
- **`TAILWIND_SETUP.md`** - Complete Tailwind guide
- **`DESIGN_SYSTEM.md`** - Design system documentation
- **`COMPONENTS_README.md`** - Component usage guide

---

## 🆘 Need Help?

### Tailwind not working?
1. Restart dev server: `npm run dev`
2. Check `tailwind.config.js` content paths
3. Verify `@tailwind` directives in `src/style.css`

### Styles not updating?
1. Save the file
2. Check browser console for errors
3. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Build errors?
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run dev
```

---

## 🔗 Useful Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Tailwind Play](https://play.tailwindcss.com/) - Online playground
- [Component Examples](https://tailwindui.com/components)

---

## ✨ Pro Tips

1. **Use the example component** (`TailwindExample.vue`) as a reference
2. **Install Tailwind CSS IntelliSense** extension in VS Code
3. **Use `@apply` sparingly** - prefer utility classes in templates
4. **Customize the theme** in `tailwind.config.js` for your brand
5. **Check the docs** - Tailwind has excellent documentation

---

**Happy coding! 🎉**

