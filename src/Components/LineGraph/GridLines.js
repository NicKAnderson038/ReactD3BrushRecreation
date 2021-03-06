import React, { PureComponent } from 'react'
import * as d3 from 'd3'

class GridLines extends PureComponent {
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
  }

  render() {
    return <div>{this.d3Render()}</div>
  }
}

export default GridLines
