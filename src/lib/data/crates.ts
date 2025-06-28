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
    repoUrl: 'https://github.com/thou-sif/request_coalescer',
    crateUrl: 'https://crates.io/crates/request_coalescer',
    writeupSlug: 'https://github.com/thou-sif/request_coalescer/blob/master/README.md'
  },
  {
    name: 'axum-realtime-kit',
    tagline: 'A high-performance, easy-to-use realtime websocket kit for Axum.',
    repoUrl: 'https://github.com/thou-sif/axum-realtime-kit',
    crateUrl: 'https://crates.io/crates/axum-realtime-kit',
    writeupSlug: 'https://github.com/thou-sif/axum-realtime-kit/blob/master/README.md'
  },
];
