<template>
  <div class="page-body">
    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon" style="background-color: #dbeafe;">
          <span style="color: #2563eb;">📊</span>
        </div>
        <div class="stat-content">
          <p class="stat-label">Total Projects</p>
          <h3 class="stat-value">24</h3>
          <p class="stat-change positive">+12% from last month</p>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon" style="background-color: #dcfce7;">
          <span style="color: #16a34a;">✓</span>
        </div>
        <div class="stat-content">
          <p class="stat-label">Completed</p>
          <h3 class="stat-value">18</h3>
          <p class="stat-change positive">+8% from last month</p>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon" style="background-color: #fef3c7;">
          <span style="color: #d97706;">⏱</span>
        </div>
        <div class="stat-content">
          <p class="stat-label">In Progress</p>
          <h3 class="stat-value">6</h3>
          <p class="stat-change neutral">No change</p>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon" style="background-color: #ede9fe;">
          <span style="color: #7c3aed;">👥</span>
        </div>
        <div class="stat-content">
          <p class="stat-label">Team Members</p>
          <h3 class="stat-value">12</h3>
          <p class="stat-change positive">+2 new members</p>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section">
      <div class="section-header">
        <h2 class="section-title">Recent Activity</h2>
        <a href="#" class="view-all-link">View all</a>
      </div>
      
      <div class="activity-list">
        <div class="activity-item">
          <div class="activity-icon">📝</div>
          <div class="activity-content">
            <p class="activity-title">New project created</p>
            <p class="activity-time">2 hours ago</p>
          </div>
        </div>
        
        <div class="activity-item">
          <div class="activity-icon">✅</div>
          <div class="activity-content">
            <p class="activity-title">Task completed: Design review</p>
            <p class="activity-time">5 hours ago</p>
          </div>
        </div>
        
        <div class="activity-item">
          <div class="activity-icon">👤</div>
          <div class="activity-content">
            <p class="activity-title">New team member joined</p>
            <p class="activity-time">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Page body component with sample content
</script>

<style scoped>
.page-body {
  padding: 0 2rem 2rem 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  transition: all 0.2s ease;
}

.stat-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 0.25rem 0;
}

.stat-value {
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.25rem 0;
}

.stat-change {
  font-size: 0.875rem;
  margin: 0;
}

.stat-change.positive {
  color: #16a34a;
}

.stat-change.neutral {
  color: #6b7280;
}

.content-section {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.view-all-link {
  color: #6366f1;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.view-all-link:hover {
  color: #4f46e5;
  text-decoration: underline;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.activity-item:hover {
  background-color: #f9fafb;
}

.activity-icon {
  width: 40px;
  height: 40px;
  background-color: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.activity-content {
  flex: 1;
}

.activity-title {
  font-size: 0.95rem;
  color: #111827;
  margin: 0 0 0.25rem 0;
  font-weight: 500;
}

.activity-time {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

@media (max-width: 768px) {
  .page-body {
    padding: 0 1rem 1rem 1rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>

