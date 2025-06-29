<script lang="ts">
  export let name: string;
  export let tagline: string;

  function scrollToNextSection() {
    const heroContainer = document.querySelector('.hero-container');
    if (heroContainer) {
      const nextSection = heroContainer.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
</script>

<section class="hero-container">
  <div class="glass-panel">
    <div class="hero-content">
      <h1 class="greeting">Hi, I'm <span class="name-gradient">{name}</span>.</h1>
      <p class="tagline">{tagline}</p>
    </div>
  </div>

  <button 
    class="scroll-indicator" 
    on:click={scrollToNextSection}
    on:keydown={(e) => e.key === 'Enter' && scrollToNextSection()}
    aria-label="Scroll to next section"
    type="button"
  >
    <span>Scroll Down</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M12 5v14m-4-4l4 4 4-4" />
    </svg>
  </button>
</section>

<style>
  .hero-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .glass-panel {
    /* The Glassmorphism Effect */
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    width: auto;
    box-sizing: border-box;
  }

  .hero-content {
    padding: 3rem 4rem;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
  }

  .greeting {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }

  .name-gradient {
    background: linear-gradient(45deg, #a5b4fc, #f472b6);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .tagline {
    font-size: 1.25rem;
    color: #94a3b8;
    margin-top: 0.5rem;
    max-width: 100%;
    word-wrap: break-word;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: #94a3b8;
    animation: bounce 2s infinite;
    cursor: pointer;
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .scroll-indicator:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  .scroll-indicator svg {
    animation: arrowBounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  @keyframes arrowBounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(3px);
    }
  }

  /* Responsive styles for tablets */
  @media (max-width: 768px) {
    .hero-content {
      padding: 2.5rem 3rem;
    }
    
    .greeting {
      font-size: 2.5rem;
    }
    
    .tagline {
      font-size: 1.15rem;
    }
  }

  /* Responsive styles for mobile phones */
  @media (max-width: 480px) {
    .hero-container {
      padding: 0.75rem;
    }
    
    .glass-panel {
      width: 100%;
      border-radius: 12px;
    }
    
    .hero-content {
      padding: 2rem 1.5rem;
    }
    
    .greeting {
      font-size: 2rem;
    }
    
    .tagline {
      font-size: 1rem;
      margin-top: 0.75rem;
    }
    
    .scroll-indicator {
      padding: 0.6rem 1.2rem;
      font-size: 0.9rem;
      bottom: 1.5rem;
    }
    
    .scroll-indicator svg {
      width: 20px;
      height: 20px;
    }
  }

  /* Extra small devices */
  @media (max-width: 360px) {
    .hero-content {
      padding: 1.75rem 1.25rem;
    }
    
    .greeting {
      font-size: 1.75rem;
    }
    
    .tagline {
      font-size: 0.9rem;
    }
  }
</style>