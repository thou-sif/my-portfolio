<!-- src/routes/+layout.svelte -->

<!-- No script needed for just styles and layout -->

<div class="main-container">
  <slot /> <!-- This is where your page content will be injected -->
</div>

<style>
  /* :global() applies styles to elements outside this component's scope */
  :global(body) {
    background-color: #0f172a; /* A dark, cool slate blue */
    color: #e2e8f0; /* Off-white for better readability */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Prevents horizontal scroll from our background shapes */
    width: 100%;
    box-sizing: border-box;
  }

  :global(html) {
    overflow-x: hidden;
    width: 100%;
  }

  :global(*, *::before, *::after) {
    box-sizing: border-box;
  }

  .main-container {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    padding: 0 1rem;
  }

  /*
    This creates the soft, colorful shapes in the background.
    They are attached to the body, positioned absolutely, and placed
    behind all other content with z-index: 0.
  */
  :global(body::before),
  :global(body::after) {
    content: '';
    position: absolute;
    z-index: 0;
    border-radius: 50%;
    filter: blur(150px); /* This makes the shapes extremely soft */
  }

  /* The first shape (a cool teal/purple) */
  :global(body::before) {
    background: radial-gradient(circle, #34d399, #818cf8);
    width: 400px;
    height: 400px;
    top: -100px;
    left: -100px;
  }

  /* The second shape (a warm pink/orange) */
  :global(body::after) {
    background: radial-gradient(circle, #f472b6, #fb923c);
    width: 500px;
    height: 500px;
    bottom: -150px;
    right: -150px;
  }
</style>