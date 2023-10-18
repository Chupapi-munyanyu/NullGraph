export interface Node {
  id: number;
  name: string;
}

export interface Edge {
  scource: number;
  target: number;
}

export type Data = {
  nodes: Node[];
  edges: Edge[];
};

