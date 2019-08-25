import React from 'react'

import barChart from './barChart'
import D3Wrapper from '../../Helpers/D3Wrapper'
import Jsx from './Jsx'

import { logColor } from '../../Helpers/consoleLogStyle'

const Index = ({ width, height }) => {
  return (
    <React.Fragment>
      <D3Wrapper x={0} y={0} jsx={Jsx} render={() => barChart(width, height)} />
    </React.Fragment>
  )
}

export default Index
