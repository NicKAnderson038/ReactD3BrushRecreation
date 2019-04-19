import React, { Component } from 'react'

// class HorizontalGridLines extends Component {
//   componentDidUpdate() {
//     this.renderGrid()
//   }
//   componentDidMount() {
//     this.renderGrid()
//   }
//   renderGrid() {
//     let node = ReactDOM.findDOMNode(this)
//     d3.select(node).call(this.props.grid)
//   }
//   render() {
//     var translate = 'translate(0,' + this.props.h + ')'
//     return (
//       <g
//         className="y-grid"
//         transform={this.props.gridType == 'x' ? translate : ''}
//       />
//     )
//   }
// }

// export default HorizontalGridLines

import * as d3 from 'd3'
import styled from '@emotion/styled'

const Text = styled.text`
  fill: black;
  font-family: sans-serif;
  font-size: 10px;
`

class HorizontalGridLines extends Component {
  constructor() {
    super()
    this.gRef = React.createRef()
  }

  componentDidUpdate() {
    this.d3Render()
  }

  componentDidMount() {
    this.d3Render()
  }

  d3Render() {
    const { type } = this.props

    d3.select(this.gRef.current).call(d3[`axis${type}`](this.props.scale))
  }

  render() {
    const { x = 50, y = 50 } = this.props

    return <g ref={this.gRef} transform={`translate(${x}, ${y})`} />
  }
}

export default HorizontalGridLines
