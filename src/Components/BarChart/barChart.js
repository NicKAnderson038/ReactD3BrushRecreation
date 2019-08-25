import * as d3 from 'd3'

import { logColor } from '../../Helpers/consoleLogStyle'

const barChart = (w, h) => {
  logColor(w, h)
  // set the dimensions and margins of the graph
  const margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = w - margin.left - margin.right,
    height = h - margin.top - margin.bottom

  // set the ranges
  const x = d3
    .scaleBand()
    .range([0, width])
    .padding(0.1)
  const y = d3.scaleLinear().range([height, 0])

  // append the svg object to the body of the page
  // append a 'group' element to 'svg'
  // moves the 'group' element to the top left margin

  const svg = d3
    // .select('body')
    // .append('svg')
    .select('#bar-chart')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  console.log(svg)
  // get the data
  d3.csv('sales.csv', function(error, data) {
    if (error) throw error

    // format the data
    data.forEach(function(d) {
      d.sales = +d.sales
    })

    // Scale the range of the data in the domains
    x.domain(
      data.map(function(d) {
        return d.salesperson
      })
    )
    y.domain([
      0,
      d3.max(data, function(d) {
        return d.sales
      })
    ])

    // append the rectangles for the bar chart
    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', function(d) {
        return x(d.salesperson)
      })
      .attr('width', x.bandwidth())
      .attr('y', function(d) {
        return y(d.sales)
      })
      .attr('height', function(d) {
        return height - y(d.sales)
      })

    // add the x Axis
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))

    // add the y Axis
    svg.append('g').call(d3.axisLeft(y))
  })
  return svg
}

export default barChart
