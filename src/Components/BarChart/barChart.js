import * as d3 from 'd3'

import { logColor } from '../../Helpers/consoleLogStyle'

logColor('++++++++')

const barChart = (data, w, h) => {
  console.log(data, w, h)

  const margin = { top: 20, right: 20, bottom: 70, left: 40 },
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom

  const svg = d3
    .select('#bar-chart-1')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)

  // Parse the date / time
  const parseDate = d3.time.format('%Y-%m').parse

  const x = d3.scale.ordinal().rangeRoundBands([0, width], 0.05)

  const y = d3.scale.linear().range([height, 0])

  // append the svg object to the body of the page
  // append a 'group' element to 'svg'
  // moves the 'group' element to the top left margin

  data.forEach(function(d) {
    d.date = parseDate(d.date)
    d.value = +d.value
  })

  x.domain(
    data.map(function(d) {
      return d.date
    })
  )
  y.domain([
    0,
    d3.max(data, function(d) {
      return d.value
    })
  ])

  const xAxis = svg
    .axis()
    .scale(x)
    .orient('bottom')
    .tickFormat(d3.time.format('%Y-%m'))

  const yAxis = svg
    .axis()
    .scale(y)
    .orient('left')
    .ticks(10)

  svg
    .select('x')
    .call(xAxis)
    .selectAll('text')
    .style('text-anchor', 'end')
    .attr('dx', '-.8em')
    .attr('dy', '-.55em')
    .attr('transform', 'rotate(-90)')

  svg
    .select('y')
    .call(yAxis)
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .text('Value ($)')

  svg
    .selectAll('bar')
    .data(data)
    .enter()
    .append('rect')
    .style('fill', 'steelblue')
    .attr('x', function(d) {
      return x(d.date)
    })
    .attr('width', x.rangeBand())
    .attr('y', function(d) {
      return y(d.value)
    })
    .attr('height', function(d) {
      return height - y(d.value)
    })
}

export default barChart
