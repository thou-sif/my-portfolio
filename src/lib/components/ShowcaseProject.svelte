<script lang="ts">
  import { embeddingServerProject, sensitiveContentDetectionProject } from '$lib/data/projects';
  import type {ShowcaseProjectData} from '$lib/data/projects';
  const projects: ShowcaseProjectData[] = [embeddingServerProject, sensitiveContentDetectionProject];
</script>

<section id="showcase" class="showcase-container">
  <h2 class="section-title">Featured Project</h2>
  {#each projects as project, index}
  <div class="glass-panel {index > 0 ? 'mt-8' : ''}">
    <div class="project-grid">
      
      <div class="details">
        <h3>{project.title}</h3>
        <p class="description">{project.description}</p>

        <h4>Key Features</h4>
        <ul class="features-list">
          {#each project.features as feature}
            <li>{feature}</li>
          {/each}
        </ul>

        <h4>Tech Stack & Rationale</h4>
        <ul class="tech-stack-list">
          {#each project.techStack as tech}
            <li>
              <strong>{tech.name}:</strong> {tech.reason}
            </li>
          {/each}
        </ul>
      </div>

      <div class="diagram-container">
        <div class="diagram-wrapper">
          <img src={project.imageUrl} alt="{project.title} Architecture Diagram" />
        </div>
        <div class="project-links">
          {#if project.liveUrl}
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="action-link primary">Live Demo</a>
          {/if}
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" class="action-link">View on GitHub</a>
        </div>
      </div>
    </div>
  </div>
  {/each}
</section>

<style>
  .showcase-container {
    padding: 4rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
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

  .glass-panel {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2.5rem;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .mt-8 {
    margin-top: 4rem;
  }
  
  .project-grid {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 2.5rem;
    align-items: flex-start;
    width: 100%;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    color: #f1f5f9;
    margin-top: 0;
    word-break: break-word;
  }

  .description {
    color: #94a3b8;
    line-height: 1.6;
  }

  h4 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #cbd5e1;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.5rem;
  }
  
  ul {
    padding-left: 1.25rem;
    color: #94a3b8;
    overflow-wrap: break-word;
  }
  
  ul li { 
    margin-bottom: 0.5rem; 
    line-height: 1.5;
  }
  
  ul li strong { 
    color: #cbd5e1; 
  }

  .diagram-wrapper {
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    max-width: 100%;
  }
  
  .diagram-wrapper img {
    display: block;
    width: 100%;
    height: auto;
    background-color: rgba(255,255,255, 0.9);
  }

  .project-links {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .action-link {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #cbd5e1;
    transition: all 0.2s;
  }
  
  .action-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  .action-link.primary {
    background-color: #a5b4fc;
    color: #1e293b;
    border-color: transparent;
  }
  
  .action-link.primary:hover {
    background-color: #c7d2fe;
  }

  @media (max-width: 900px) {
    .project-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .diagram-container {
      grid-row: 1;
    }
    
    .glass-panel {
      padding: 1.5rem;
    }
    
    h3 {
      font-size: 1.5rem;
      margin-top: 1rem;
    }
    
    .section-title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
  
  @media (max-width: 480px) {
    .showcase-container {
      padding: 2rem 0.75rem;
    }
    
    .glass-panel {
      padding: 1.25rem;
      border-radius: 16px;
    }
    
    h3 {
      font-size: 1.35rem;
    }
    
    h4 {
      font-size: 1rem;
      margin-top: 1.5rem;
    }
    
    .description {
      font-size: 0.95rem;
    }
    
    ul {
      padding-left: 1rem;
      font-size: 0.95rem;
    }
    
    .project-links {
      flex-direction: column;
      width: 100%;
    }
    
    .action-link {
      width: 100%;
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
    }
    
    .mt-8 {
      margin-top: 2.5rem;
    }
  }
</style>