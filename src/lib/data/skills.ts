export interface Skill {
  name: string;
  iconPath: string;
  color: string;
}

export const skills: Record<string, Skill[]> = {
  "Languages": [
    {
      name: "Rust",
      iconPath: "/icons/Ferris.svg",
      color: "rgba(183, 65, 14, 0.2)"
    },
    {
      name: "Elixir",
      iconPath: "/icons/Elixir.svg",
      color: "rgba(107, 79, 187, 0.2)"
    },
    {
      name: "TypeScript",
      iconPath: "/icons/TypeScript.svg",
      color: "rgba(49, 120, 198, 0.2)"
    },
    {
      name: "Python",
      iconPath: "/icons/Python.svg",
      color: "rgba(55, 118, 171, 0.2)"
    },
    {
      name: "Go",
      iconPath: "/icons/Go.svg",
      color: "rgba(0, 173, 216, 0.2)"
    },
    {
      name: "Dart",
      iconPath: "/icons/Dart.svg",
      color: "rgba(0, 180, 216, 0.2)"
    }
  ],
  "Frameworks & Libraries": [
    {
      name: "Axum",
      iconPath: "/icons/Ferris.svg", 
      color: "rgba(183, 65, 14, 0.2)"
    },
    {
      name: "Svelte",
      iconPath: "/icons/Svelte.svg",
      color: "rgba(255, 62, 0, 0.2)"
    },
    {
      name: "Tokio",
      iconPath: "/icons/Ferris.svg",
      color: "rgba(183, 65, 14, 0.2)"
    },
    {
      name: "Phoenix",
      iconPath: "/icons/Phoenix.svg",
      color: "rgba(230, 106, 91, 0.2)"
    },
    {
      name: "Flutter",
      iconPath: "/icons/Flutter.svg",
      color: "rgba(54, 207, 244, 0.2)"
    }
  ],
  "Databases": [
    {
      name: "PostgreSQL",
      iconPath: "/icons/PostgresSQL.svg",
      color: "rgba(51, 103, 145, 0.2)"
    },
    {
      name: "MongoDB",
      iconPath: "/icons/MongoDB.svg",
      color: "rgba(77, 179, 61, 0.2)"
    },
    {
      name: "Redis",
      iconPath: "/icons/Redis.svg",
      color: "rgba(215, 38, 61, 0.2)"
    },
    {
      name: "ScyllaDB",
      iconPath: "/icons/scylladb-icon.svg",
      color: "rgba(255, 255, 255, 0.2)"
    },
    {
      name: "Qdrant",
      iconPath: "/icons/qq.svg",
      color: "rgba(255, 255, 255, 0.2)"
    }
  ],
  "DevOps & Tools": [
    {
      name: "Docker",
      iconPath: "/icons/Docker.svg",
      color: "rgba(13, 136, 209, 0.2)"
    },
    {
      name: "Kubernetes",
      iconPath: "/icons/Kubernetes.svg",
      color: "rgba(50, 109, 230, 0.2)"
    },
    {
      name: "GitHub Actions",
      iconPath: "/icons/GitHub-Actions.svg",
      color: "rgba(47, 129, 247, 0.2)"
    }
  ],
  "Backend & API": [
    {
      name: "GraphQL",
      iconPath: "/icons/graphql.svg",
      color: "rgba(229, 53, 171, 0.2)"
    },
    {
      name: "REST API",
      iconPath: "/icons/restapi.svg",
      color: "rgba(97, 97, 97, 0.2)"
    },
    {
      name: "gRPC",
      iconPath: "/icons/grpc.svg",
      color: "rgba(255, 255, 255, 0.89)"
    },
    {
      name: "WebSockets",
      iconPath: "/icons/websockets.svg",
      color: "rgba(208, 221, 241, 0.2)"
    },
    {
      name: "RedPanda",
      iconPath: "/icons/redpanda.svg",
      color: "rgba(255, 255, 255, 0.2)"
    }
  ],
  "AI & ML": [
    {
      name: "ONNX Runtime",
      iconPath: "/icons/ort.png",
      color: "rgba(103, 58, 183, 0.2)"
    },
    {
      name: "Tokenizers",
      iconPath: "/icons/hf.svg",
      color: "rgba(255, 215, 0, 0.2)"
    },
    {
      name: "FastEmbed",
      iconPath: "/icons/Ferris.svg",
      color: "rgba(0, 150, 136, 0.2)"
    },
    {
      name: "LangChain",
      iconPath: "/icons/langchain.svg",
      color: "rgba(166, 247, 237, 0.2)"
    }
  ],
};