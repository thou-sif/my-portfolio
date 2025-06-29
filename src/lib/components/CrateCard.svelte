<script lang="ts">
  import type { Crate } from '$lib/data/crates';
  export let crate: Crate;
</script>

<div class="glass-panel">
  <div class="content">
    <h4 class="crate-name">{crate.name}</h4>
    <p class="crate-tagline">{crate.tagline}</p>
  </div>
  <div class="crate-links">
    <a href={crate.repoUrl} target="_blank" rel="noopener noreferrer" class="action-link">
      <!-- GitHub Icon (SVG) -->
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      <span>Repository</span>
    </a>
    <a href={crate.crateUrl} target="_blank" rel="noopener noreferrer" class="action-link">
      <!-- Package/Crate Icon (SVG) -->
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      <span>Crates.io</span>
    </a>
    <a href={crate.writeupSlug} class="action-link writeup">
       <!-- Document/Article Icon (SVG) -->
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      <span>Read Write-up</span>
    </a>
  </div>
</div>

<style>
  .glass-panel {
    background: rgba(30, 41, 59, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    transition: all 0.2s ease-in-out;    
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }

  .glass-panel:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  .content {
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
  }

  .crate-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    color: #f1f5f9;
    overflow-wrap: break-word;
  }

  .crate-tagline {
    color: #94a3b8;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .crate-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: auto;
    width: 100%;
  }

  .action-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    color: #cbd5e1;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: background-color 0.2s, color 0.2s;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .action-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  .action-link.writeup {
    background-color: rgba(165, 180, 252, 0.2); /* Soft indigo */
    border-color: rgba(165, 180, 252, 0.4);
    color: #e0e7ff;
  }
  .action-link.writeup:hover {
    background-color: rgba(165, 180, 252, 0.3);
    border-color: rgba(199, 210, 254, 0.6);
  }

  @media (max-width: 768px) {
    .crate-links {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }
    
    .action-link {
      width: 100%; 
      justify-content: flex-start;
      box-sizing: border-box;
    }
    
    .glass-panel {
      padding: 1.25rem;
    }
    
    .crate-name {
      font-size: 1.35rem;
    }
  }
  
  @media (max-width: 380px) {
    .glass-panel {
      padding: 1rem;
    }
    
    .crate-name {
      font-size: 1.25rem;
    }
    
    .action-link {
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
    }
  }
</style>