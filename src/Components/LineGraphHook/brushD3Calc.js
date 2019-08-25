import * as d3 from 'd3'

const brushD3Calc = (data, width, height) => {
  const DOMAIN_MAX = Object.values(data[data.length - 1])
  const maxWidth = [0, DOMAIN_MAX[0]]
  const maxHeight = [0, DOMAIN_MAX[1]]

  const svg = d3.select('#brush-zoom-line-graph-2')
  const w = svg.attr('width')
  const h = svg.attr('height')

  const x = d3
    .scaleLinear()
    .domain(maxWidth)
    .range([0, w])
  const y = d3
    .scaleLinear()
    .domain(maxHeight)
    .range([height, 0])

  const xAxis = d3.axisTop(x).ticks(12)
  const yAxis = d3.axisRight(y).ticks((12 * h) / w)

  const brush = d3.brush().on('end', brushended)
  let idleTimeout
  const idleDelay = 350

  const line = d3
    .line()
    .x(d => x(d[0]))
    .y(d => y(d[1]))
    .curve(d3.curveCatmullRom.alpha(0.5))

  svg.select('path').attr('d', () => line(data))

  svg
    .select('.axis--x')
    .attr('transform', `translate(0,${h - 10})`)
    .call(xAxis)

  svg.select('.axis--y').call(yAxis)

  svg.selectAll('.domain').style('display', 'none')

  svg.select('.brush').call(brush)

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
  // console.log(svg);
}

export default brushD3Calc
