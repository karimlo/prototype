<script setup>
const navLinks = [
  { label: 'Prototypes', href: '/', external: false },
  { label: 'Documentation', href: 'https://karimlounes.atlassian.net/wiki/spaces/SD/pages/491523/Documentation', external: true },
  { label: 'About Me', href: 'https://karimlounes.atlassian.net/wiki/spaces/SD/pages/786433/About+Me', external: true }
]

const prototypes = [
  {
    name: 'Main Prototype',
    description: 'The primary UX AI prototype with navigation, layout components, and design system.',
    href: 'https://karimlo.github.io/prototype/',
    icon: '🎨'
  },
  {
    name: 'Test Prototype 1',
    description: 'Experimental prototype branch for testing new component ideas.',
    href: 'https://karimlo.github.io/prototype/test-prototype-1/',
    icon: '🧪'
  }
]
</script>

<template>
  <div class="app-wrapper">
  <nav class="navbar">
    <div class="nav-container">
      <a href="/" class="nav-brand">My UX AI</a>

      <!-- Mobile hamburger -->
      <button
        class="nav-toggle"
        aria-label="Toggle navigation"
        onclick="this.closest('.navbar').classList.toggle('menu-open')"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Navigation links -->
      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.label">
          <a
            :href="link.href"
            :target="link.external ? '_blank' : '_self'"
            :rel="link.external ? 'noopener noreferrer' : undefined"
            class="nav-link"
          >
            {{ link.label }}
            <span v-if="link.external" class="external-icon" aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Main content area -->
  <main class="main-content">
    <!-- Hero - top aligned -->
    <div class="hero">
      <h1>Welcome to <span class="brand-highlight">My UX AI</span></h1>
      <p class="hero-subtitle">A prototyping platform for exploring and sharing UX design concepts.</p>
    </div>

    <!-- Prototypes grid -->
    <section class="prototypes-section">
      <p class="prototypes-count">{{ prototypes.length }} prototype{{ prototypes.length !== 1 ? 's' : '' }} available</p>
      <div class="prototypes-grid">
        <a
          v-for="proto in prototypes"
          :key="proto.name"
          :href="proto.href"
          target="_blank"
          rel="noopener noreferrer"
          class="prototype-card"
        >
          <span class="card-icon">{{ proto.icon }}</span>
          <div class="card-body">
            <h2 class="card-title">{{ proto.name }}</h2>
            <p class="card-description">{{ proto.description }}</p>
            <span class="card-cta">View prototype →</span>
          </div>
        </a>
      </div>
    </section>
  </main>
  </div>
</template>

<style scoped>
/* Navigation Bar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
}

.nav-brand {
  font-size: 1.4rem;
  font-weight: 700;
  color: #4f46e5;
  text-decoration: none;
  letter-spacing: -0.02em;
}

.nav-brand:hover {
  color: #4338ca;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link:hover {
  color: #4f46e5;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #4f46e5;
  border-radius: 1px;
  transition: width 0.2s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.external-icon {
  font-size: 0.75rem;
  opacity: 0.6;
}

/* Mobile toggle button */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger-line {
  display: block;
  width: 24px;
  height: 2px;
  background-color: #374151;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Main Content */
.main-content {
  margin-top: 60px;
  min-height: calc(100vh - 60px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
}

.hero {
  text-align: center;
  padding: 3rem 1rem 2rem;
}

.hero h1 {
  font-size: 2.4rem;
  color: #111827;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.brand-highlight {
  color: #4f46e5;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Prototypes Section */
.prototypes-section {
  padding: 1rem 0 3rem;
}

.prototypes-count {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
}

.prototypes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
}

.prototype-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.prototype-card:hover {
  border-color: #4f46e5;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.12);
  transform: translateY(-2px);
}

.card-icon {
  font-size: 2rem;
  flex-shrink: 0;
  line-height: 1;
}

.card-body {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.35rem;
}

.card-description {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0 0 0.75rem;
}

.card-cta {
  font-size: 0.85rem;
  color: #4f46e5;
  font-weight: 500;
}

.prototype-card:hover .card-cta {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
    padding: 0.75rem 1.5rem;
    gap: 0;
  }

  .menu-open .nav-links {
    display: flex;
  }

  .nav-link {
    padding: 0.75rem 0;
    width: 100%;
  }

  .nav-link::after {
    display: none;
  }

  .hero {
    padding: 2rem 0.5rem 1.5rem;
  }

  .hero h1 {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .prototypes-grid {
    grid-template-columns: 1fr;
  }
}
</style>
