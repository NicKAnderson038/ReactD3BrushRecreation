import React from 'react'

import barChart from './barChart'
import { data } from '../../data/barData'
import D3Wrapper from '../../Helpers/D3Wrapper'
import Jsx from './Jsx'

import { logColor } from '../../Helpers/consoleLogStyle'

const Index = ({ width, height }) => {
  return (
    <React.Fragment>
      <D3Wrapper
        x={0}
        y={0}
        jsx={Jsx}
        render={() => barChart(data, width, height)}
      />
    </React.Fragment>
  )
}

export default Index
