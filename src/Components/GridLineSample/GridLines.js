import React, { Component } from 'react'
import * as d3 from 'd3'

// class HorizontalGridLines extends Component {
//   componentDidUpdate() {
//     this.renderGrid()
//   }
//   componentDidMount() {
//     this.renderGrid()
//   }
//   renderGrid() {
//     let node = ReactDOM.findDOMNode(this)
//     d3.select(node).call(this.props.grid)
//   }
//   render() {
//     var translate = 'translate(0,' + this.props.h + ')'
//     return (
//       <g
//         className="y-grid"
//         transform={this.props.gridType == 'x' ? translate : ''}
//       />
//     )
//   }
// }

// export default HorizontalGridLines

import styled from '@emotion/styled'

const Line = styled.text`
  stroke: grey;
`

class GridLines extends Component {
  constructor() {
    super()
    this.gRef = React.createRef()
  }

  componentDidUpdate() {
    this.d3Render()
  }

  componentDidMount() {
    this.d3Render()
  }

  d3Render() {
    const height = this.props.height
    const width = this.props.width
    const xg = d3
        .scaleLinear()
        .domain([0, 1])
        .range([0, width]),
      yg = d3
        .scaleLinear()
        .domain([0, 1])
        .range([height, 0])
    // gridlines in x axis function
    function xMakeGridlines() {
      return d3.axisBottom(xg).ticks(5)
    }

    // gridlines in y axis function
    function yMakeGridlines() {
      return d3.axisLeft(yg).ticks(5)
    }

    // add the X gridlines
    d3.select('svg')
      .append('g')
      .attr('class', 'grid')
      .attr('transform', 'translate(0,' + height + ')')
      .call(
        xMakeGridlines()
          .tickSize(-height)
          .tickFormat('')
      )

    // add the Y gridlines
    d3.select('svg')
      .append('g')
      .attr('class', 'grid')
      .call(
        yMakeGridlines()
          .tickSize(-width)
          .tickFormat('')
      )
  }

  render() {
    const { x = 50, y = 50 } = this.props

    return (
      <g ref={this.gRef} transform={`translate(${x}, ${y})`}>
        <Line />
      </g>
    )
  }
}

export default GridLines
