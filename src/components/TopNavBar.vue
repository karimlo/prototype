<template>
  <nav class="top-nav">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-text">MyApp</span>
      </div>
      <ul class="nav-links">
        <li><a href="#" class="nav-link">Home</a></li>
        <li><a href="#" class="nav-link">About</a></li>
        <li><a href="#" class="nav-link">Services</a></li>
        <li><a href="#" class="nav-link">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// Top navigation bar component
</script>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  z-index: 1000;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 2rem;
  max-width: 100%;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #6366f1;
  letter-spacing: -0.025em;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  position: relative;
}

.nav-link:hover {
  color: #6366f1;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #6366f1;
  transition: width 0.2s ease;
}

.nav-link:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 1rem;
  }
  
  .nav-container {
    padding: 0 1rem;
  }
}
</style>

