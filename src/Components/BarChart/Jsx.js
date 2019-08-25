import React from 'react'

const pathStyles = {
  strokeWidth: 2,
  stroke: 'red',
  fill: 'none'
}

const margin = { top: 20, right: 20, bottom: 30, left: 40 }

const Jsx = () => {
  return (
    <React.Fragment>
      <h4>Bar Chart</h4>
      <br />
      <svg id="bar-chart-1" width={960} height={500}>
        <g transform={`translate(${margin.left}, ${margin.top})`} />
        {/* <path style={pathStyles} transform={`translate(${0} ${0})`} />
        <g className="axis axis--x" />
        <g className="axis axis--y" transform={`translate(${10} ${0})`} />
        <g className="brush" /> */}
      </svg>
    </React.Fragment>
  )
}

export default Jsx
