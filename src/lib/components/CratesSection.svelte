<script lang="ts">
  import { crates } from '$lib/data/crates';
  import CrateCard from './CrateCard.svelte';
</script>

<section id="crates" class="crates-container">
  <h2 class="section-title">Published Crates</h2>
  <div class="crates-grid">
    {#each crates as crate}
      <CrateCard {crate} />
    {/each}
  </div>
</section>

<style>
  .crates-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
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

  .crates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem; 
    width: 100%;
    max-width: 1200px;
  }

  @media (max-width: 640px) {
    .crates-grid {
      grid-template-columns: 1fr;
      padding: 0 0.5rem;
    }
    
    .section-title {
      font-size: 2rem;
    }
  }
  
  @media (min-width: 641px) and (max-width: 1024px) {
    .crates-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
</style>