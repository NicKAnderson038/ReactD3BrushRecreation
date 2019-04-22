import React, { PureComponent } from 'react'
import * as d3 from 'd3'

import { data } from './LineData'

import { logColor } from '../UI/ConsoleLogStyle'
import GridLines from './GridLines'

class GridLineMain extends PureComponent {
  componentDidMount() {
    logColor('componentDidMount 😎')
    this.drawSvg()
  }

  static getDerivedStateFromProps(props, state) {
    logColor('getDerivedStateFromProps: 😎')
    console.log(props)
    console.log(state)
  }

  componentDidUpdate() {
    logColor('componentDidUpdate 😎')
    this.drawSvg()
  }

  drawSvg() {
    // const oldCurveX = 'Displacement (in)'
    // const oldCurveY = 'Load (lbf)'
    const DOMAIN_MAX = Object.values(data[data.length - 1]),
      svg = d3.select('svg'),
      width = svg.attr('width'),
      height = svg.attr('height')
    logColor(width, height)
    const maxWidth = [0, DOMAIN_MAX[0]],
      maxHeight = [0, DOMAIN_MAX[1]],
      x = d3
        .scaleLinear()
        .domain(maxWidth)
        .range([0, width]),
      y = d3
        .scaleLinear()
        .domain(maxHeight)
        .range([height, 0])

    const xAxis = d3.axisTop(x).ticks(12),
      yAxis = d3.axisRight(y).ticks((12 * height) / width)

    let brush = d3.brush().on('end', brushended),
      idleTimeout,
      idleDelay = 350

    const line = d3
      .line()
      .x(d => x(d[0]))
      .y(d => y(d[1]))
      .curve(d3.curveCatmullRom.alpha(0.5))

    svg
      .append('path')
      .attr('d', () => line(data))
      .attr('transform', 'translate(0,0)')
      .style('stroke-width', 2)
      .style('stroke', 'steelblue')
      .style('fill', 'none')

    svg
      .append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + (height - 10) + ')')
      .call(xAxis)

    svg
      .append('g')
      .attr('class', 'axis axis--y')
      .attr('transform', 'translate(10,0)')
      .call(yAxis)

    svg.selectAll('.domain').style('display', 'none')

    svg
      .append('g')
      .attr('class', 'brush')
      .call(brush)

    function brushended() {
      const s = d3.event.selection
      if (!s) {
        if (!idleTimeout) return (idleTimeout = setTimeout(idled, idleDelay))
        x.domain(maxWidth)
        y.domain(maxHeight)
      } else {
        x.domain([s[0][0], s[1][0]].map(x.invert, x))
        y.domain([s[1][1], s[0][1]].map(y.invert, y))
        svg.select('.brush').call(brush.move, null)
      }
      zoom()
    }

    function idled() {
      idleTimeout = null
    }

    function zoom() {
      const t = svg.transition().duration(750)
      svg
        .select('.axis--x')
        .transition(t)
        .call(xAxis)
      svg
        .select('.axis--y')
        .transition(t)
        .call(yAxis)
      svg
        .selectAll('path')
        .transition(t)
        .attr('d', () => line(data))
    }
  }

  render() {
    const { header, userSelect, width, height } = this.props

    // let MAX_X = Math.max(...data.map(d => d[0]))
    // let MAX_Y = Math.max(...data.map(d => d[1]))

    // let x = val => (val / MAX_X) * width
    // let y = val => height - (val / MAX_Y) * height

    // let d = `
    //       M${x(data[0][0])} ${y(data[0][1])}
    //       ${data
    //         .slice(1)
    //         .map(d => {
    //           return `L${x(d[0])} ${y(d[1])}`
    //         })
    //         .join(' ')}
    //     `

    return (
      <div style={userSelect}>
        <br />
        <h4>{header}</h4>
        <br />
        <svg width={width} height={height}>
          {/* <path d={d} /> */}
        </svg>
        <GridLines width={width} height={height} />
      </div>
    )
  }
}

export default GridLineMain
