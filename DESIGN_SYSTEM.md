# Design System

## Color Palette

### Primary Brand Color
- **Primary**: `#6366f1` (Indigo 500) - Used for buttons, links, and active states
- **Primary Hover**: `#4f46e5` (Indigo 600) - Hover state for primary elements
- **Primary Light**: `#eef2ff` (Indigo 50) - Background for active navigation items

### Neutral Colors
- **Gray 50**: `#f9fafb` - Page background
- **Gray 100**: `#f3f4f6` - Subtle backgrounds
- **Gray 200**: `#e5e7eb` - Borders
- **Gray 300**: `#d1d5db` - Disabled states
- **Gray 400**: `#9ca3af` - Placeholder text
- **Gray 500**: `#6b7280` - Secondary text
- **Gray 600**: `#4b5563` - Primary navigation text
- **Gray 700**: `#374151` - Headings
- **Gray 800**: `#1f2937` - Dark text
- **Gray 900**: `#111827` - Primary text

## Components

### 1. TopNavBar
- **Location**: Fixed at the top
- **Height**: 60px
- **Background**: White with bottom border
- **Contains**: 
  - Logo (left side)
  - Navigation links (right side)
- **Features**:
  - Hover effect with underline animation
  - Primary color on hover

### 2. SideNavBar
- **Location**: Fixed on the left, below TopNavBar
- **Width**: 250px (200px on mobile)
- **Background**: White with right border
- **Contains**: Navigation links with icons
- **Features**:
  - Active state with primary color background
  - Left border indicator on hover/active
  - Smooth transitions

### 3. PageHeader
- **Location**: Top of main content area
- **Background**: White with bottom border
- **Contains**:
  - Page title and subtitle (left)
  - Action buttons (right)
- **Button Styles**:
  - Primary: Indigo background, white text
  - Secondary: White background, gray border

### 4. PageBody
- **Location**: Below PageHeader
- **Contains**:
  - Stats cards grid (responsive)
  - Recent activity section
- **Features**:
  - Card hover effects
  - Responsive grid layout
  - Color-coded stat icons

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

### Font Sizes
- **Page Title**: 2rem (32px)
- **Section Title**: 1.25rem (20px)
- **Stat Value**: 1.875rem (30px)
- **Body Text**: 0.95rem (15.2px)
- **Small Text**: 0.875rem (14px)

## Spacing

- **Container Padding**: 2rem (32px)
- **Card Padding**: 1.5rem (24px)
- **Grid Gap**: 1.5rem (24px)
- **Element Gap**: 1rem (16px)

## Border Radius

- **Cards**: 8px
- **Buttons**: 6px
- **Icons**: 8px or 50% (circular)

## Shadows

- **Card Hover**: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- **Button**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`

## Responsive Breakpoints

- **Mobile**: max-width: 768px
  - Side navigation: 200px width
  - Stats grid: Single column
  - Header: Stacked layout

## Usage Examples

### Primary Button
```vue
<button class="btn-primary">Create New</button>
```

### Secondary Button
```vue
<button class="btn-secondary">Export</button>
```

### Navigation Link
```vue
<a href="#" class="nav-link">Home</a>
```

### Stat Card
```vue
<div class="stat-card">
  <div class="stat-icon">📊</div>
  <div class="stat-content">
    <p class="stat-label">Total Projects</p>
    <h3 class="stat-value">24</h3>
  </div>
</div>
```

## Future Enhancements

When adding new components, maintain consistency by:
1. Using the primary color (#6366f1) for interactive elements
2. Following the established spacing system
3. Applying hover effects with smooth transitions
4. Ensuring responsive design for mobile devices
5. Using the neutral gray palette for text hierarchy

