export interface Node extends d3.SimulationNodeDatum {
  id: number;
  name: string;
}

export interface Edge extends d3.SimulationLinkDatum<Node> {
  scource: number;
  target: number;
}

export type Data = {
  nodes: Node[];
  edges: Edge[];
};

