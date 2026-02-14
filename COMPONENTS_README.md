# Component Documentation

## Overview

This application features a modern, responsive layout with the following structure:

```
┌─────────────────────────────────────────────────┐
│           TopNavBar (Logo + Links)              │
├──────────┬──────────────────────────────────────┤
│          │  PageHeader (Title + Buttons)        │
│          ├──────────────────────────────────────┤
│  Side    │                                      │
│  NavBar  │         PageBody                     │
│          │    (Stats Cards + Activity)          │
│          │                                      │
└──────────┴──────────────────────────────────────┘
```

## Component Files

### 1. **MainLayout.vue**
The main container that orchestrates all components.

**Location**: `src/components/MainLayout.vue`

**Props**:
- None (uses internal state)

**Customization**:
```vue
<script setup>
const pageTitle = ref('Your Custom Title')
const pageSubtitle = ref('Your custom subtitle')
</script>
```

---

### 2. **TopNavBar.vue**
Fixed navigation bar at the top of the page.

**Location**: `src/components/TopNavBar.vue`

**Features**:
- Logo on the left
- Navigation links on the right
- Hover effects with underline animation

**Customization**:
Edit the navigation links in the template:
```vue
<ul class="nav-links">
  <li><a href="#" class="nav-link">Your Link</a></li>
</ul>
```

Change the logo text:
```vue
<span class="logo-text">YourBrand</span>
```

---

### 3. **SideNavBar.vue**
Fixed sidebar navigation with icons and links.

**Location**: `src/components/SideNavBar.vue`

**Features**:
- Icon + text navigation items
- Active state highlighting
- Smooth hover effects

**Customization**:
Add or modify navigation items:
```vue
<li>
  <a href="#" class="side-nav-link">
    <span class="icon">🎨</span>
    <span class="link-text">Design</span>
  </a>
</li>
```

To set active state, add the `active` class:
```vue
<a href="#" class="side-nav-link active">
```

---

### 4. **PageHeader.vue**
Header section with title, subtitle, and action buttons.

**Location**: `src/components/PageHeader.vue`

**Props**:
- `title` (String, default: 'Dashboard')
- `subtitle` (String, default: 'Welcome back! Here\'s what\'s happening today.')

**Usage**:
```vue
<PageHeader 
  title="My Custom Page" 
  subtitle="This is a custom subtitle" 
/>
```

**Customization**:
Modify the action buttons in the template:
```vue
<div class="header-actions">
  <button class="btn-secondary">Your Action</button>
  <button class="btn-primary">Primary Action</button>
</div>
```

---

### 5. **PageBody.vue**
Main content area with stats cards and activity feed.

**Location**: `src/components/PageBody.vue`

**Features**:
- Responsive stats grid (4 cards)
- Recent activity section
- Hover effects on cards

**Customization**:

**Stats Cards**:
```vue
<div class="stat-card">
  <div class="stat-icon" style="background-color: #dbeafe;">
    <span style="color: #2563eb;">📊</span>
  </div>
  <div class="stat-content">
    <p class="stat-label">Your Metric</p>
    <h3 class="stat-value">42</h3>
    <p class="stat-change positive">+10% increase</p>
  </div>
</div>
```

**Activity Items**:
```vue
<div class="activity-item">
  <div class="activity-icon">🎉</div>
  <div class="activity-content">
    <p class="activity-title">Your activity title</p>
    <p class="activity-time">Just now</p>
  </div>
</div>
```

---

## Color Scheme

### Primary Brand Color
The primary color used throughout is **Indigo (#6366f1)**:
- Buttons
- Links
- Active states
- Hover effects

### Changing the Primary Color

To change the brand color, update the CSS variables in `src/style.css`:

```css
:root {
  --primary-color: #your-color;
  --primary-hover: #your-darker-color;
  --primary-light: #your-lighter-color;
}
```

Then update the colors in individual components where hardcoded:
- TopNavBar.vue: `.logo-text`, `.nav-link:hover`
- SideNavBar.vue: `.side-nav-link:hover`, `.side-nav-link.active`
- PageHeader.vue: `.btn-primary`

---

## Responsive Design

The layout is responsive and adapts to mobile devices:

**Desktop** (> 768px):
- Side navigation: 250px width
- Stats grid: 4 columns (auto-fit)

**Mobile** (≤ 768px):
- Side navigation: 200px width
- Stats grid: 1 column
- Header buttons: Full width, stacked

---

## Running the Application

1. **Start the dev server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** to the URL shown (typically `http://localhost:5173`)

---

## Next Steps

1. **Add routing**: Install Vue Router to navigate between pages
2. **Add state management**: Use Pinia for global state
3. **Connect to API**: Replace static data with real API calls
4. **Add authentication**: Implement login/logout functionality
5. **Customize content**: Replace placeholder content with your data

---

## File Structure

```
src/
├── App.vue                      # Main app component
├── main.js                      # App entry point
├── style.css                    # Global styles
└── components/
    ├── MainLayout.vue           # Main layout container
    ├── TopNavBar.vue            # Top navigation
    ├── SideNavBar.vue           # Side navigation
    ├── PageHeader.vue           # Page header
    └── PageBody.vue             # Page content
```

