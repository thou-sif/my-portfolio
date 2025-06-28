<script lang="ts">
  import { skills } from '$lib/data/skills';
</script>

<section id="skills" class="skills-container">
  <h2 class="section-title">Technical Skills</h2>
  
  <div class="skills-grid">
    {#each Object.entries(skills) as [category, items]}
      <div class="skill-category glass-panel">
        <h3 class="category-title">{category}</h3>
        <div class="skill-items">
          {#each items as skill}
            <div class="skill-item">
              <div class="skill-icon" style="background-color: {skill.color}">
                <img src={skill.iconPath} alt={skill.name} width="24" height="24" />
              </div>
              <span class="skill-name">{skill.name}</span>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .skills-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 1rem;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    background: linear-gradient(90deg, #e2e8f0, #94a3b8);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
  }

  .glass-panel {
    background: rgba(30, 41, 59, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    transition: all 0.2s ease-in-out;
    height: 100%;
  }

  .glass-panel:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  .category-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 1.25rem 0;
    color: #f1f5f9;
    text-align: center;
    position: relative;
  }

  .category-title::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, rgba(165, 180, 252, 0.4), rgba(129, 140, 248, 0.6));
    border-radius: 2px;
  }

  .skill-items {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    justify-content: center;
  }

  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 70px;
  }

  .skill-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
  }

  .skill-item:hover .skill-icon {
    transform: scale(1.1);
  }

  .skill-name {
    font-size: 0.875rem;
    color: #cbd5e1;
    text-align: center;
  }

  /* Responsive behavior */
  @media (max-width: 1024px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .section-title {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    
    .skills-container {
      padding: 3rem 1rem;
    }
  }

  @media (max-width: 480px) {
    .skill-items {
      gap: 1rem;
    }
    
    .skill-item {
      width: 60px;
    }
    
    .skill-icon {
      width: 40px;
      height: 40px;
    }
    
    .skill-name {
      font-size: 0.75rem;
    }
    
    .section-title {
      font-size: 1.75rem;
    }
    
    .category-title {
      font-size: 1.1rem;
    }
    
    .glass-panel {
      padding: 1.25rem;
    }
  }

  /* For very small screens */
  @media (max-width: 320px) {
    .skill-item {
      width: 50px;
    }
    
    .skill-icon {
      width: 36px;
      height: 36px;
    }
    
    .skill-name {
      font-size: 0.7rem;
    }
  }
</style>