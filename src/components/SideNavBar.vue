<template>
  <aside class="side-nav">
    <ul class="side-nav-links">
      <li>
        <a href="#" class="side-nav-link active">
          <span class="icon">📊</span>
          <span class="link-text">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#" class="side-nav-link">
          <span class="icon">📁</span>
          <span class="link-text">Projects</span>
        </a>
      </li>
      <li>
        <a href="#" class="side-nav-link">
          <span class="icon">👥</span>
          <span class="link-text">Team</span>
        </a>
      </li>
      <li>
        <a href="#" class="side-nav-link">
          <span class="icon">📈</span>
          <span class="link-text">Analytics</span>
        </a>
      </li>
      <li>
        <a href="#" class="side-nav-link">
          <span class="icon">⚙️</span>
          <span class="link-text">Settings</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup>
// Side navigation bar component
</script>

<style scoped>
.side-nav {
  position: fixed;
  top: 60px;
  left: 0;
  width: 250px;
  height: calc(100vh - 60px);
  background-color: #ffffff;
  border-right: 1px solid #e5e7eb;
  padding: 1.5rem 0;
  overflow-y: auto;
}

.side-nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.side-nav-link {
  display: flex;
  align-items: center;
  padding: 0.875rem 1.5rem;
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.side-nav-link:hover {
  background-color: #f3f4f6;
  color: #6366f1;
  border-left-color: #6366f1;
}

.side-nav-link.active {
  background-color: #eef2ff;
  color: #6366f1;
  border-left-color: #6366f1;
}

.icon {
  font-size: 1.25rem;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
}

.link-text {
  flex: 1;
}

/* Scrollbar styling */
.side-nav::-webkit-scrollbar {
  width: 6px;
}

.side-nav::-webkit-scrollbar-track {
  background: transparent;
}

.side-nav::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 3px;
}

.side-nav::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

@media (max-width: 768px) {
  .side-nav {
    width: 200px;
  }
  
  .side-nav-link {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }
}
</style>

