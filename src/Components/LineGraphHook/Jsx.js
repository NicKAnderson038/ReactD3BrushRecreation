import React from 'react';

const pathStyles = {
  strokeWidth: 2,
  stroke: 'red',
  fill: 'none'
};

const Jsx = () => {
  return (
    <React.Fragment>
      <h4>Brush Zoom with Hook Wrapper</h4>
      <br />
      <svg id="brush-zoom-line-graph-2" width={960} height={600}>
        <path style={pathStyles} transform={`translate(${0} ${0})`} />
        <g className="axis axis--x" />
        <g className="axis axis--y" transform={`translate(${10} ${0})`} />
        <g className="brush" />
      </svg>
    </React.Fragment>
  );
};

export default Jsx;