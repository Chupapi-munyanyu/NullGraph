'use client'

import { useRef } from "react";
import { GraphCanvas, GraphCanvasRef, useSelection } from "reagraph";

const darkTheme =
{
  canvas: {
    background: '#1e1e2e'
  },
  node: {
    fill: '#cba6f7',
    activeFill: '#1DE9AC',
    opacity: 1,
    selectedOpacity: 1,
    inactiveOpacity: 1,
    label: {
      color: '#1e1e2e',
      stroke: 'transparent',
      activeColor: '#1e1e2e'
    },
    subLabel: {
      color: 'transparent',
      stroke: 'transparent',
      activeColor: '#1DE9AC'
    }
  },
  lasso: {
    border: '1px solid #55aaff',
    background: 'rgba(75, 160, 255, 0.1)'
  },
  ring: {
    fill: '#94e2d5',
    activeFill: '#1DE9AC'
  },
  edge: {
    fill: '#f5e0dc',
    activeFill: '#1DE9AC',
    opacity: 0.05,
    selectedOpacity: 1,
    inactiveOpacity: 0.05,
    label: {
      stroke: '#fff',
      color: '#2A6475',
      activeColor: '#1DE9AC'
    }
  },
  arrow: {
    fill: '#D8E6EA',
    activeFill: '#1DE9AC'
  },
  cluster: {
    stroke: '#D8E6EA',
    opacity: 1,
    selectedOpacity: 1,
    inactiveOpacity: 0.1,
    label: {
      stroke: '#fff',
      color: '#2A6475'
    }
  }
}

const Reagraph = ({ data }: any) => {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const {
    selections,
    actives,
    onNodeClick,
    onCanvasClick
  } = useSelection({
    ref: graphRef,
    nodes: data.nodes,
    edges: data.edges,
    pathSelectionType: 'all'
  });

  return (
    <GraphCanvas
      ref={graphRef}
      selections={selections}
      actives={actives}
      onCanvasClick={onCanvasClick}
      onNodeClick={onNodeClick}

      theme={darkTheme}
      minNodeSize={0.5}
      maxNodeSize={30}


      nodes={data.nodes}
      edges={data.edges}

      layoutType="forceDirected2d"
      layoutOverrides={{
        nodeStrength: -50,
        linkDistance: 500
      }}
      sizingType="centrality"
      edgeInterpolation="curved"
    />
  )
}

export default Reagraph;