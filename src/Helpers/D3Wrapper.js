import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3'

const D3Wrapper = ({ x, y, jsx, render }) => {
  const refAnchor = useRef(null);

  useEffect(() => {
    render(d3.select(refAnchor.current));
  });

  // return (
  //   <React.Fragment>
  //     <h4>Brush Zoom with Hook Wrapper</h4>
  //     <br />
  //     <svg id="brush-zoom-line-graph-2" width={960} height={600}>
  //       <path style={pathStyles} transform={`translate(${0} ${0})`} />
  //       <g className="axis axis--x" />
  //       <g className="axis axis--y" transform={`translate(${10} ${0})`} />
  //       <g className="brush" />
  //     </svg>
  //   </React.Fragment>
  // );
  return jsx();
};

D3Wrapper.propTypes = {
  jsx: PropTypes.func,
  render: PropTypes.func,
  x: PropTypes.number,
  y: PropTypes.number
};

export default D3Wrapper;