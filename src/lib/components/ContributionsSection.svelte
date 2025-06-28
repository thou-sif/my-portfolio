<script lang="ts">
  import { contributions } from '$lib/data/contributions';
</script>

<section id="contributions" class="contributions-container">
  <h2 class="section-title">Open Source Contributions</h2>
  <div class="contributions-list">
    {#each contributions as contrib}
      <div class="contribution-card glass-panel">
        <div class="project-info">
          <a class="project-name" href={contrib.projectUrl} target="_blank" rel="noopener noreferrer">{contrib.projectName}</a>
          <p class="description">{contrib.description}</p>
        </div>
        <a href={contrib.prUrl} target="_blank" rel="noopener noreferrer" class="action-link">
          <!-- GitHub Pull Request Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          <span>View Pull Request</span>
        </a>
      </div>
    {/each}
  </div>
</section>

<style>
  .contributions-container {
    padding: 4rem 2rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    background: linear-gradient(90deg, #e2e8f0, #94a3b8);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .contributions-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .glass-panel {
    background: rgba(30, 41, 59, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1.5rem 2rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    transition: all 0.2s ease-in-out;
  }

  .glass-panel:hover {
    background: rgba(30, 41, 59, 0.7);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .project-info {
    flex-grow: 1;
  }

  .project-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #f1f5f9;
    text-decoration: none;
    transition: color 0.2s;
  }
  .project-name:hover {
    color: #a5b4fc;
  }

  .description {
    color: #94a3b8;
    margin: 0.25rem 0 0 0;
    line-height: 1.5;
  }

  .action-link {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    color: #cbd5e1;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.2s;
  }

  .action-link:hover {
    background-color: rgba(255, 255, 255, 0.15);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.25);
    transform: scale(1.02);
  }
  
  @media (max-width: 640px) {
    .glass-panel {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>