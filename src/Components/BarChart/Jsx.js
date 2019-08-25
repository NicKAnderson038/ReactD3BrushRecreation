import React from 'react'

const pathStyles = {
  strokeWidth: 2,
  stroke: 'red',
  fill: 'none'
}

const Jsx = () => {
  return (
    <React.Fragment>
      <h4>Bar Chart</h4>
      <br />
      <svg id="bar-chart" width={960} height={500}>
        {/* <path style={pathStyles} transform={`translate(${0} ${0})`} />
        <g className="axis axis--x" />
        <g className="axis axis--y" transform={`translate(${10} ${0})`} />
        <g className="brush" /> */}
      </svg>
    </React.Fragment>
  )
}

export default Jsx
