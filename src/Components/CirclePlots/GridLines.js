import React, { PureComponent } from 'react'
import * as d3 from 'd3'

import styled from '@emotion/styled'

// const Line = styled.text`
//   stroke: grey !important;
// `

class GridLines extends PureComponent {
  // constructor() {
  //   super()
  //   this.gRef = React.createRef()
  // }

  // componentDidUpdate() {
  //   this.d3Render()
  // }

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
    return (
      // <g ref={this.gRef}>
      //   {/* <Line /> */}
      // </g>
      <div>{this.d3Render()}</div>
    )
  }
}

export default GridLines

/*
class Line extends React.Component {

    static propTypes = {...}

    drawLine() {
        let xScale = d3.scaleTime()
            .domain(d3.extent(this.props.data, ({date}) => date));
            .rangeRound([0, this.props.width]);

        let yScale = d3.scaleLinear()
            .domain(d3.extent(this.props.data, ({value}) => value))
            .rangeRound([this.props.height, 0]);

        let line = d3.line()
            .x((d) => xScale(d.date))
            .y((d) => yScale(d.value));

        return (
            <path
                className="line"
                d={line(this.props.data)}
            />
        );
    }

    render() {
        <svg
           className="line-container"
           width={this.props.width}
           height={this.props.height}
        >
           {this.drawLine()}
        </svg>
    }
}

*/
