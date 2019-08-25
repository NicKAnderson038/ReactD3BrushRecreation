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
      <svg id="bar-chart-1" width={960} height={500}>
        {/* <g transform={`translate(${margin.left}, ${margin.top})`}>
          <g className="x axis" transform={`translate(${0}, ${height})`} />
          <g className="y axis" />
        </g> */}
      </svg>
    </React.Fragment>
  )
}

export default Jsx