import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

const D3Wrapper = ({ x, y, jsx, render }) => {
  const refAnchor = useRef(null)

  useEffect(() => {
    render(d3.select(refAnchor.current))
  })

  return jsx()
}

D3Wrapper.propTypes = {
  jsx: PropTypes.func,
  render: PropTypes.func,
  x: PropTypes.number,
  y: PropTypes.number
}

export default D3Wrapper
