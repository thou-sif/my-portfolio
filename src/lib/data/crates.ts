export interface Crate {
  name: string;
  tagline: string;
  repoUrl: string;
  crateUrl: string;
  writeupSlug: string; // The URL to the detailed write-up
}

export const crates: Crate[] = [
  {
    name: 'request-coaleser',
    tagline: 'A coalesing library for handling requests in Rust.',
    repoUrl: 'https://github.com/...',
    crateUrl: 'https://crates.io/...',
    writeupSlug: '/writeups/my-first-crate'
  },
  {
    name: 'axum-realtime-kit',
    tagline: 'A high-performance, easy-to-use realtime websocket kit for Axum.',
    repoUrl: 'https://github.com/...',
    crateUrl: 'https://crates.io/...',
    writeupSlug: '/writeups/my-first-crate'
  },
];
