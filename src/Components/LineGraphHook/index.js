import React from 'react'

import brushD3Calc from './brushD3Calc'
import { data } from '../../data/LineData'
import D3Wrapper from '../../Helpers/D3Wrapper'
import Jsx from './Jsx'

import { logColor } from '../../Helpers/consoleLogStyle'

const Index = ({ width, height }) => {
  logColor(width, height)
  return (
    <div>
      <D3Wrapper
        x={0}
        y={0}
        jsx={Jsx}
        render={() => brushD3Calc(data, width, height)}
      />
    </div>
  )
}

export default Index
