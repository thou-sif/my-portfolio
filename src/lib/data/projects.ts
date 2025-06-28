// src/lib/data/projects.ts

export interface TechStackItem {
  name: string;
  reason: string;
}

export interface ShowcaseProjectData {
  title: string;
  description: string;
  imageUrl: string; 
  liveUrl?: string; 
  repoUrl: string;
  features: string[];
  techStack: TechStackItem[];
}

export const embeddingServerProject: ShowcaseProjectData = {
  title: 'High-Performance Embedding Server in Rust',
  description:
        'A high-performance Rust gRPC service for self-hosted text embeddings with dual backends: custom ONNX models for control and `fastembed` for simplicity, balancing performance and flexibility for AI applications.',
  imageUrl: 'embedding_arch.svg',
  repoUrl: 'https://github.com/thou-sif/embedding_server',
  features: [
    'Dual-backend architecture (Custom ONNX & FastEmbed)',
    'High-concurrency gRPC API with efficient batch processing',
    'Fully asynchronous, non-blocking request handling',
  ],
  techStack: [
    {
      name: 'Rust',
      reason: 'Selected for performance, memory safety, and concurrency features ideal for building reliable, high-throughput network services.'
    },
    {
      name: 'Tonic & gRPC',
      reason: 'Used to build a high-performance, strongly-typed API. gRPC\'s use of Protocol Buffers and HTTP/2 is perfect for low-latency, machine-to-machine communication required for an AI infrastructure service.'
    },
    {
      name: 'ONNX Runtime (`ort` crate)',
      reason: 'Powers the custom inference engine, executing optimized model computations on the CPU.'
    },
    {
      name: 'Tokio',
      reason: 'Asynchronous runtime powering the application with event-driven, non-blocking I/O for handling thousands of concurrent connections efficiently.'
    },
    {
      name: '`ndarray` & `tokenizers`',
      reason: 'Core data preprocessing components: `tokenizers` handles text-to-token conversion, while `ndarray` provides efficient tensor manipulation for the ONNX model input pipeline.'
    }
  ]
};

export const sensitiveContentDetectionProject: ShowcaseProjectData = {
  title: 'Efficient Sensitive Content Detection Service',
  description:
        'A Rust-based gRPC service for rapid sensitive image analysis using ONNX Runtime. Features multi-threaded inference and non-blocking architecture, designed specifically for content moderation systems.',
  imageUrl: 'detector.svg', 
  repoUrl: 'https://github.com/thou-sif/nsfw_detector_grpc',
  features: [
    'Flexible gRPC API accepting images via raw bytes or URL.',
    'Optimized model inference via the ONNX Runtime.',
    'Singleton model pattern ensures the model is loaded only once.',
  ],
  techStack: [
    {
      name: 'Rust',
      reason: 'Chosen for its best-in-class performance, memory safety, and fearless concurrency, making it the ideal language for building reliable, high-throughput network services.'
    },
    {
      name: 'ONNX Runtime (`ort` crate)',
      reason: 'Provides optimized ML model inference with safe Rust bindings, enabling multi-threaded access to the C++ inference engine for maximum performance.'
    },
    {
      name: '`once_cell`',
      reason: 'Creates a thread-safe singleton for the ML model, ensuring the expensive loading process occurs only once at startup while being efficiently shared across all requests.'
    }
  ]
};
