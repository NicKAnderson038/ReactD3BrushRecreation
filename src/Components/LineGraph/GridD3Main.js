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
    const newData = data.map(d => {
      return { x: d[0], y: d[1] }
    })
    let MAX_X = Math.max(...newData.map(d => d.x))
    let MAX_Y = Math.max(...newData.map(d => d.y))

    let x1 = val => (val / MAX_X) * width
    let y1 = val => height - (val / MAX_Y) * height

    const svg = d3.select('svg'),
      width = svg.attr('width'),
      height = svg.attr('height')

    const k = height / width,
      x0 = [0, 10],
      y0 = [0, 10000],
      x = d3
        .scaleLinear()
        .domain(x0)
        .range([0, width]),
      // .rangeRound([0, x1]),
      y = d3
        .scaleLinear()
        .domain(y0)
        .range([height, 0])
    // .rangeRound([y1, 0])

    const xAxis = d3.axisTop(x).ticks(12),
      yAxis = d3.axisRight(y).ticks((12 * height) / width)

    let brush = d3.brush().on('end', brushended),
      idleTimeout,
      idleDelay = 350

    let line = d3
      .line()
      .x(d => x(d[0]))
      .y(d => y(d[1]))
      .curve(d3.curveCatmullRom.alpha(0.5))

    d3.select('svg')
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
        x.domain(x0)
        y.domain(y0)
      } else {
        // console.log(s)
        // console.log(x)
        x.domain([s[0][0], s[1][0]].map(x.invert, x))
        y.domain([s[1][1], s[0][1]].map(y.invert, y))
        const res = svg.select('.brush').call(brush.move, null)
        console.log(res)
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
      // console.log('circle: ', circle)
      svg
        .selectAll('path')
        .transition(t)
        .attr('cx', d => {
          // console.log(d)
          // console.log(x)
          let cx = x(d[0])
          // console.log(cx)
          return cx
        })
        .attr('cy', d => {
          // console.log(d)
          // console.log(y)
          let cy = y(d[1])
          // console.log(cy)
          return cy
        })
    }

    // const valueline = `
    //       M${x(data[0][0])} ${y(data[0][1])}
    //       ${data
    //         .slice(1)
    //         .map(d => {
    //           return `L${x(d[0])} ${y(d[1])}`
    //         })
    //         .join(' ')}
    //     `
    // svg.append("path")
    //   .attr("class", "line")
    //   .attr("d", valueline);
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
