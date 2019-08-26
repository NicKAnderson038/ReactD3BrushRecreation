import * as d3 from 'd3'

import { logColor } from '../../Helpers/consoleLogStyle'

const barD3Chart = (data, w, h) => {
  // logColor(data)

  // set the dimensions and margins of the graph
  const margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = w - margin.left - margin.right,
    height = h - margin.top - margin.bottom

  const num = width + margin.left + margin.right
  const num2 = height + margin.top + margin.bottom
  logColor(num, num2)

  // set the ranges
  const x = d3
    .scaleBand()
    .range([0, width])
    .padding(0.1)
  const y = d3.scaleLinear().range([height, 0])

  // moves the 'group' element to the top left margin
  const svg = d3.select('#bar-chart-1')
  // .attr('width', width + margin.left + margin.right)
  // .attr('height', height + margin.top + margin.bottom)

  // Scale the range of the data in the domains
  x.domain(data.map(d => d.salesperson))
  y.domain([0, d3.max(data, d => d.sales)])

  // append the rectangles for the bar chart
  svg
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('transform', 'translate(20,0)')
    .attr('x', d => x(d.salesperson))
    .attr('width', x.bandwidth())
    .attr('y', d => y(d.sales))
    .attr('height', d => height - y(d.sales))

  // x Axis
  svg.select('.axis--x').call(d3.axisBottom(x))

  // y Axis
  svg.select('.axis--y').call(d3.axisLeft(y))
}

export default barD3Chart
