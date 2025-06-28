<!-- src/routes/writeups/+layout.svelte -->
<script lang="ts">
  
</script>

<div class="writeup-container">
  <div class="back-link-wrapper">
    <a href="/#crates" class="back-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m7 7-7-7 7-7"/></svg>
      <span>Back to Portfolio</span>
    </a>
  </div>

  <div class="glass-panel">
    <!-- The 'prose' class will style our markdown content -->
    <article class="prose">
      <slot /> <!-- The actual content from your .svx file goes here -->
    </article>
  </div>
</div>

<style>
  .writeup-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  .back-link-wrapper {
    margin-bottom: 2rem;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #94a3b8;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }
  .back-link:hover {
    color: #e2e8f0;
  }

  .glass-panel {
    background: rgba(30, 41, 59, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem 3rem;
  }

  /*
    This is where we style the HTML elements that MDsveX generates.
    By targeting them within .prose, we don't affect the rest of our site.
  */
  :global(.prose h1) {
    font-size: 2.5rem;
    color: #f1f5f9;
    margin-bottom: 0.5rem;
  }
  :global(.prose p.subtitle) { /* We can add custom classes in our markdown */
    font-size: 1.25rem;
    color: #94a3b8;
    margin-top: 0;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 2rem;
  }
  :global(.prose h2) {
    font-size: 1.75rem;
    color: #e2e8f0;
    margin-top: 2.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.5rem;
  }
  :global(.prose p) {
    line-height: 1.7;
    color: #cbd5e1;
  }
  :global(.prose a) {
    color: #a5b4fc;
    text-decoration: none;
    transition: text-decoration 0.2s;
  }
  :global(.prose a:hover) {
    text-decoration: underline;
  }

  /* Styling for code blocks */
  :global(.prose pre) {
    background-color: #0f172a; /* Our dark background color */
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1rem;
    overflow-x: auto;
    font-size: 0.9rem;
  }
  :global(.prose code) {
    font-family: 'Fira Code', 'JetBrains Mono', monospace;
  }
  :global(.prose p > code) { /* Inline code */
    background: rgba(165, 180, 252, 0.2);
    color: #e0e7ff;
    padding: 0.2em 0.4em;
    border-radius: 4px;
  }
  :global(.prose figcaption) {
  text-align: center;
  font-style: italic;
  color: #94a3b8; /* slate-400 */
  font-size: 0.9rem;
  margin-top: 0.75rem;
}

:global(.prose figure) {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

:global(.prose figure img) {
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #1e293b; /* A slightly lighter background for the SVG */
    padding: 1rem;
}
</style>