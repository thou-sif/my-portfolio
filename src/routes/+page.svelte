<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import CratesSection from '$lib/components/CratesSection.svelte';
  import ShowcaseProject from '$lib/components/ShowcaseProject.svelte'; 
  import ContributionsSection from '$lib/components/ContributionsSection.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
</script>

<main>
  <Hero
    name="Syed Thousif"
    tagline="Software Developer | Crafting Resilient & Elegant Systems"
  />
   <CratesSection />
   <ShowcaseProject />
   <ContributionsSection />
   <SkillsSection />
   <ContactSection />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
  }
</style>