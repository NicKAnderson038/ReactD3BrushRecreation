import React from 'react'

import barD3Chart from './barD3Chart'
import { data } from '../../data/barData'
import D3Wrapper from '../../Helpers/D3Wrapper'
import Jsx from './Jsx'

import { logColor } from '../../Helpers/consoleLogStyle'

const Index = ({ width, height }) => {
  logColor('Bar Chart', width, height)

  return (
    <React.Fragment>
      <D3Wrapper
        x={0}
        y={0}
        // jsx={Jsx}
        jsx={() => Jsx(width, height)}
        render={() => barD3Chart(data, width, height)}
      />
    </React.Fragment>
  )
}

export default Index
