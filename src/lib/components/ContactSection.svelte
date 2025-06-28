<script lang="ts">
  // You can customize these values in your data file later if you prefer
  export let email: string = "thousif16h@gmail.com";
  
  // Social media profiles - add or remove as needed
  const socialProfiles = [
    {
      name: "GitHub",
      url: "https://github.com/thou-sif",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/thousif-syed-1790982ba",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`
    },
    {
      name: "Twitter",
      url: "https://twitter.com/thou_sif",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>`
    }
  ];

  // Function to handle email click
  function handleEmailClick() {
    window.location.href = `mailto:${email}?subject=Portfolio Contact`;
  }
</script>

<section id="contact" class="contact-container">
  <h2 class="section-title">Get In Touch</h2>
  
  <div class="contact-content glass-panel">
    <div class="contact-text">
      <p>
        I'm currently open to new opportunities and collaborations. 
        Whether you have a question, a project idea, or just want to say hello, 
        feel free to reach out!
      </p>
      
      <button 
        class="email-button" 
        on:click={handleEmailClick}
        on:keydown={(e) => e.key === 'Enter' && handleEmailClick()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <span>{email}</span>
      </button>
    </div>
    
    <div class="social-links">
      <h3>Connect With Me</h3>
      <div class="social-icons">
        {#each socialProfiles as profile}
          <a 
            href={profile.url} 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-icon"
            aria-label={profile.name}
          >
            {@html profile.icon}
            <span class="sr-only">{profile.name}</span>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .contact-container {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  .glass-panel {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .contact-text {
    text-align: center;
  }

  .contact-text p {
    color: #94a3b8;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .email-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, rgba(165, 180, 252, 0.2), rgba(129, 140, 248, 0.3));
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    color: #f1f5f9;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .email-button:hover {
    background: linear-gradient(135deg, rgba(165, 180, 252, 0.3), rgba(129, 140, 248, 0.4));
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }

  .social-links {
    text-align: center;
  }

  .social-links h3 {
    font-size: 1.25rem;
    color: #cbd5e1;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }

  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    color: #cbd5e1;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .social-icon:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #ffffff;
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.25);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  @media (max-width: 768px) {
    .contact-container {
      padding: 3rem 1rem;
    }
    
    .section-title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    
    .glass-panel {
      padding: 2rem;
    }
    
    .email-button {
      padding: 0.6rem 1.2rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .section-title {
      font-size: 1.75rem;
    }
    
    .glass-panel {
      padding: 1.5rem;
    }
    
    .contact-text p {
      font-size: 1rem;
    }
    
    .social-icons {
      gap: 1rem;
    }
    
    .social-icon {
      width: 45px;
      height: 45px;
    }
  }
</style>