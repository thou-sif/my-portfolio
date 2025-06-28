<script lang="ts">
  export let diagramData: {
    nodes: Array<{
      id: string;
      label: string;
      type?: string;
    }>;
    edges: Array<{
      from: string;
      to: string;
      label?: string;
    }>;
  };


  type InternalNode = {
    id: string;
    label: string;
    type?: string;
    x: number; 
    y: number; 
  };


  type InternalEdge = {
    source: InternalNode;
    target: InternalNode;
    label?: string;
  };



  let laidOutNodes: InternalNode[] = [];
  let renderedEdges: InternalEdge[] = [];
  let nodesById = new Map<string, InternalNode>();


  $: {
    laidOutNodes = diagramData.nodes.map(n => ({
      ...n,
      x: 0, 
      y: 0, 
    }));


    nodesById = new Map(laidOutNodes.map(n => [n.id, n]));

    renderedEdges = diagramData.edges.map(
      edge => {
    const source = nodesById.get(edge.from);
    const target = nodesById.get(edge.to);
    if (source && target) {
      return { source, target, label: edge.label };
    }
    return null; 
      }
    )
  .filter(edge => edge !== null);
  }


  function calculateLabelPosition(x1: number, y1: number, x2: number, y2: number) {
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt(dx * dx + dy * dy);
    if (length === 0) return { x: midX, y: midY }; 
    const offsetX = -dy / length * 15;
    const offsetY = dx / length * 15;
    return { x: midX + offsetX, y: midY + offsetY };
  }
</script>

<div class="diagram-container">
  <svg width="100%" height="400" viewBox="0 0 800 400">
    
    <g class="diagram-content">
      
      {#each renderedEdges as edge}
      
        <line
          x1={edge.source.x}
          y1={edge.source.y}
          x2={edge.target.x}
          y2={edge.target.y}
          stroke="url(#edgeGradient)"
          stroke-width="2"
          class="edge-line"
        />

        {#if edge.label}
          {@const labelPos = calculateLabelPosition(edge.source.x, edge.source.y, edge.target.x, edge.target.y)}
          <text
            x={labelPos.x}
            y={labelPos.y}
            text-anchor="middle"
            fill="#555"
            font-size="12"
            dy=".35em"
            class="edge-label"
            filter="url(#textBackground)"
          >
            {edge.label}
          </text>
        {/if}
      {/each}

    
      {#each laidOutNodes as node}
        <g transform={`translate(${node.x}, ${node.y})`} class="node-group">

          {#if node.type === 'component'}
            <rect x="-60" y="-30" width="120" height="60" rx="8" ry="8" class="component node-shape" filter="url(#dropShadow)" />
          {:else if node.type === 'data'}
            <rect x="-60" y="-30" width="120" height="60" rx="8" ry="8" class="data node-shape" filter="url(#dropShadow)" />
          {:else if node.type === 'infrastructure'}
            <rect x="-60" y="-30" width="120" height="60" rx="8" ry="8" class="infrastructure node-shape" filter="url(#dropShadow)" />
          {:else if node.type === 'pod'}
            <rect x="-60" y="-30" width="120" height="60" rx="8" ry="8" class="pod node-shape" filter="url(#dropShadow)" />
          {:else if node.type === 'library-core'}
            <rect x="-60" y="-30" width="120" height="60" rx="8" ry="8" class="library-core node-shape" filter="url(#dropShadow)" />
          {:else if node.type === 'user-logic'}
            <rect x="-60" y="-30" width="120" height="60" rx="8" ry="8" class="user-logic node-shape" filter="url(#dropShadow)" />
          {:else if node.type === 'background-task'}
            <rect x="-60" y="-30" width="120" height="60" rx="8" ry="8" class="background-task node-shape" filter="url(#dropShadow)" />
          {:else}
            <circle r="40" class="default-node node-shape" filter="url(#dropShadow)" />
          {/if}

          <text text-anchor="middle" dominant-baseline="middle" font-weight="600" class="node-label">
            {node.label}
          </text>
        </g>
      {/each}
    </g>

    <defs>
      <filter id="textBackground" x="-50%" y="-50%" width="200%" height="200%">
        <feFlood flood-color="white" flood-opacity="0.85" result="bg" />
        <feComposite in="SourceGraphic" in2="bg" operator="over" />
      </filter>
      <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
        <feOffset in="blur" dx="2" dy="2" result="offsetBlur" />
        <feComponentTransfer in="offsetBlur" result="shadow">
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="shadow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#888" />
        <stop offset="100%" stop-color="#555" />
      </linearGradient>
    </defs>
  </svg>
</div>

<style>
  .diagram-container {
    width: 100%;
    margin: 2rem 0;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 1.5rem;
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
  }
  .diagram-container:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
  svg {
    display: block;
    margin: 0 auto;
  }
  text {
    font-family: 'Inter', 'Roboto', sans-serif;
  }
  .node-group {
    transition: transform 0.2s ease;
  }
  .node-group:hover {
    transform: scale(1.05);
  }
  .node-shape {
    transition: all 0.2s ease;
  }
  .node-label {
    fill: #333;
    font-size: 13px;
  }
  .edge-line {
    transition: stroke-width 0.2s ease;
  }
  .edge-line:hover {
    stroke-width: 3;
  }
  .edge-label {
    transition: font-size 0.2s ease;
  }
  .edge-label:hover {
    font-size: 13px;
    font-weight: bold;
  }
  rect.infrastructure {
    fill: #f5f5f5;
    stroke: #666;
    stroke-width: 2;
  }
  rect.pod {
    fill: #e3f2e3;
    stroke: #6aa84f;
    stroke-width: 2;
  }
  rect.library-core {
    fill: #e9f5ff;
    stroke: #4a86e8;
    stroke-width: 2;
  }
  rect.component {
    fill: #e9f5ff;
    stroke: #4a86e8;
    stroke-width: 2;
  }
  rect.data {
    fill: #fff2cc;
    stroke: #f1c232;
    stroke-width: 2;
  }
  rect.user-logic {
    fill: #fff2cc;
    stroke: #f1c232;
    stroke-width: 2;
  }
  rect.background-task {
    fill: #f3e5eb;
    stroke: #a64d79;
    stroke-width: 2;
    stroke-dasharray: 4;
  }
  circle.default-node {
    fill: #e3f2e3;
    stroke: #6aa84f;
    stroke-width: 2;
  }
</style>