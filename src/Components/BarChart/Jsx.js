import React from 'react'

const pathStyles = {
  strokeWidth: 2,
  stroke: 'red',
  fill: 'none'
}

const margin = { top: 20, right: 20, bottom: 30, left: 40 }
const height = 500 - margin.top - margin.bottom
const Jsx = () => {
  return (
    <React.Fragment>
      <h4>Bar Chart</h4>
      <br />
      <svg id="bar-chart-1">
        <g transform={`translate(${margin.left} ${margin.top})`} />
        <g className="axis--x" transform={`translate(${20} ${height})`} />
        <g className="axis--y" transform={`translate(${20} ${0})`} />
      </svg>
    </React.Fragment>
  )
}

export default Jsx
