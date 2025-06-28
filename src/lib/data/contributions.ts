export interface Contribution {
  projectName: string;
  projectUrl: string;
  description: string;
  prUrl: string;
}

export const contributions: Contribution[] = [
  {
    projectName: 'Redpanda',
    projectUrl: 'https://github.com/redpanda-data/redpanda-labs',
    description:
      'Added new examples demonstrating how to build a basic chat room application using Rust and rust-rdkafka library. The examples cover both Docker and Cloud environments.',
    prUrl: 'https://github.com/redpanda-data/redpanda-labs/pull/42'
  },
  {
    projectName: 'Axum Realtime Kit',
    projectUrl: 'https://github.com/thou-sif/axum-realtime-kit',
    description:
      'Currently maintaining the latest version of the Axum Realtime Kit, adding support for WebSockets and more.',
    prUrl: 'https://github.com/thou-sif/axum-realtime-kit'
  },
  {
    projectName: 'Flame Engine',
    projectUrl: 'https://github.com/flame-engine/flame',
    description:
      'Improved documentation for the flame project, clarifying the easy getting started for new users.',
    prUrl: 'https://github.com/flame-engine/flame/pull/3000'
  }
];