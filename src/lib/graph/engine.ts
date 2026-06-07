export type GraphNode = {
  id: string;
  type: 'designer' | 'brand' | 'model' | 'event' | 'trend';
  label: string;
  influenceScore: number; // 0 to 100
};

export type GraphEdge = {
  source: string;
  target: string;
  relationship: 'collaborated' | 'creative_director' | 'featured_in' | 'associated_with';
};

export const MOCK_GRAPH_DATA: { nodes: GraphNode[], edges: GraphEdge[] } = {
  nodes: [
    { id: 'n1', type: 'model', label: 'Nova Rae', influenceScore: 98 },
    { id: 'n2', type: 'brand', label: 'Maison Vertex', influenceScore: 95 },
    { id: 'n3', type: 'designer', label: 'Aria Vance', influenceScore: 92 },
    { id: 'n4', type: 'event', label: 'Paris Fashion Week 2026', influenceScore: 100 },
    { id: 'n5', type: 'trend', label: 'Digital Couture', influenceScore: 88 },
  ],
  edges: [
    { source: 'n1', target: 'n2', relationship: 'featured_in' },
    { source: 'n3', target: 'n2', relationship: 'creative_director' },
    { source: 'n2', target: 'n4', relationship: 'featured_in' },
    { source: 'n1', target: 'n5', relationship: 'associated_with' },
  ]
};

export function getEntityConnections(entityId: string) {
  return MOCK_GRAPH_DATA.edges.filter(e => e.source === entityId || e.target === entityId);
}
