import React, { PureComponent } from 'react'
import * as d3 from 'd3'
import { logColor } from '../../Helpers/consoleLogStyle'

class GridLines extends PureComponent {
  state = {
    x: d3
      .scaleLinear()
      .domain([0, 1])
      .range([0, this.props.width]),
    y: d3
      .scaleLinear()
      .domain([0, 1])
      .range([this.props.height, 0])
  }
  componentDidMount() {
    this.d3Render()
  }

  d3Render() {
    const height = this.props.height,
      width = this.props.width,
      x = d3
        .scaleLinear()
        .domain([0, 1])
        .range([0, width]),
      y = d3
        .scaleLinear()
        .domain([0, 1])
        .range([height, 0])

    // gridlines in x axis function
    const xMakeGridlines = () => d3.axisBottom(x).ticks(10)

    // gridlines in y axis function
    const yMakeGridlines = () => d3.axisLeft(y).ticks(10)

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

    // let xGrid = d3.line().xMakeGridlines().tickSize(-height).tickFormat('')
    // let yGrid = d3.line().yMakeGridlines().tickSize(-width).tickFormat('')
    //     console.log(xGrid, yGrid)
  }

  render() {
    const { width, height } = this.props
    logColor(width, height)
    return (
      // <g ref={this.gRef}>
      //   {/* <Line /> */}
      // </g>
      <svg className="container">
        <g
          className="grid"
          style={{ transform: `translate(0,${height})` }}
          ticks={12}
          // ref={node => d3.select(node).call(d3.axisBottom(this.state.x))}
        />
      </svg>
      // <div>{this.d3Render()}</div>
    )
  }
}

export default GridLines
