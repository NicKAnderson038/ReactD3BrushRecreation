import React, { useState } from 'react'
import {
  Label,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea
} from 'recharts'
import { logColor } from '../../../Helpers/consoleLogStyle'

const d = [
  { name: 1, cost: 4.11, impression: 100 },
  { name: 2, cost: 2.39, impression: 120 },
  { name: 3, cost: 1.37, impression: 150 },
  { name: 4, cost: 1.16, impression: 180 },
  { name: 5, cost: 2.29, impression: 200 },
  { name: 6, cost: 3, impression: 499 },
  { name: 7, cost: 0.53, impression: 50 },
  { name: 8, cost: 2.52, impression: 100 },
  { name: 9, cost: 1.79, impression: 200 },
  { name: 10, cost: 2.94, impression: 222 },
  { name: 11, cost: 4.3, impression: 210 },
  { name: 12, cost: 4.41, impression: 300 },
  { name: 13, cost: 2.1, impression: 50 },
  { name: 14, cost: 8, impression: 190 },
  { name: 15, cost: 0, impression: 300 },
  { name: 16, cost: 9, impression: 400 },
  { name: 17, cost: 3, impression: 200 },
  { name: 18, cost: 2, impression: 50 },
  { name: 19, cost: 3, impression: 100 },
  { name: 20, cost: 7, impression: 100 }
]

const getAxisYDomain = (from, to, ref, offset) => {
  const refData = d.slice(from - 1, to)
  let [bottom, top] = [refData[0][ref], refData[0][ref]]
  refData.forEach(d => {
    if (d[ref] > top) top = d[ref]
    if (d[ref] < bottom) bottom = d[ref]
  })

  return [(bottom | 0) - offset, (top | 0) + offset]
}

const initialState = {
  data: d,
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: '',
  refAreaRight: '',
  top: 'dataMax+1',
  bottom: 'dataMin-1',
  top2: 'dataMax+20',
  bottom2: 'dataMin-20',
  animation: true
}

// const Index = () => {
//   const [DATA, setData] = useState(initialState)

//   logColor(DATA)
//   const zoom = () => {
//     // let { refAreaLeft, refAreaRight, data } = DATA
//     console.log('ZOOM: ', DATA)
//     if (refAreaLeft === refAreaRight || refAreaRight === '') {
//       setData((DATA.refAreaLeft = ''))
//       setData((DATA.refAreaRight = ''))
//       return
//     }

//     // xAxis domain
//     if (refAreaLeft > refAreaRight)
//       [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft]

//     // yAxis domain
//     const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1)
//     const [bottom2, top2] = getAxisYDomain(
//       refAreaLeft,
//       refAreaRight,
//       'impression',
//       50
//     )

//     setData((DATA.refAreaLeft = ''))
//     setData((DATA.refAreaRight = ''))
//     setData((DATA.data = data.slice()))
//     setData((DATA.left = refAreaLeft))
//     setData((DATA.right = refAreaRight))
//     setData((DATA.bottom = bottom))
//     setData((DATA.top = top))
//     setData((DATA.bottom2 = bottom2))
//     setData((DATA.top2 = top2))
//     return
//   }

//   const zoomOut = () => {
//     const { data } = DATA
//     setData((DATA.data = data.slice()))
//     setData((DATA.refAreaLeft = ''))
//     setData((DATA.refAreaRight = ''))
//     setData((DATA.left = 'dataMin'))
//     setData((DATA.right = 'dataMax'))
//     setData((DATA.top = 'dataMax+1'))
//     setData((DATA.bottom = 'dataMin'))
//     setData((DATA.top2 = 'dataMax+50'))
//     setData((DATA.bottom = 'dataMin+50'))
//     return
//   }

//   const mouseDown = e => {
//     setData((DATA.refAreaLeft = e.activeLabel))
//     setData((DATA.refAreaRight = e.activeLabel))
//     return
//   }

//   const mouseMove = e => {
//     if (refAreaLeft && refAreaRight) {
//       return true
//     }
//     return e.isTooltipActive
//   }

//   let {
//     data,
//     barIndex,
//     left,
//     right,
//     refAreaLeft,
//     refAreaRight,
//     top,
//     bottom,
//     top2,
//     bottom2
//   } = DATA

//   console.log(DATA)
//   return (
//     <div className="highlight-bar-charts">
//       <br />
//       <button className="btn update" onClick={() => zoomOut()}>
//         Zoom Out
//       </button>
//       <br />
//       <br />
//       <p>Highlight / Zoom - able Line Chart</p>
//       <LineChart
//         width={800}
//         height={400}
//         data={data}
//         // onMouseDown={event => mouseDown(event)}
//         // onMouseMove={event => mouseMove(event)}
//         onMouseDown={e => setData((DATA.refAreaLeft = e.activeLabel))}
//         onMouseMove={e => {
//           console.log('M-Move: ', e)
//           return (
//             DATA.refAreaLeft && setData((DATA.refAreaRight = e.activeLabel))
//           )
//         }}
//         onMouseUp={() => zoom()}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis
//           allowDataOverflow={true}
//           dataKey="name"
//           domain={[left, right]}
//           type="number"
//         />
//         <YAxis
//           allowDataOverflow={true}
//           domain={[bottom, top]}
//           type="number"
//           yAxisId="1"
//         />
//         <YAxis
//           orientation="right"
//           allowDataOverflow={true}
//           domain={[bottom2, top2]}
//           type="number"
//           yAxisId="2"
//         />
//         <Tooltip />
//         <Line
//           yAxisId="1"
//           type="natural"
//           dataKey="cost"
//           stroke="#8884d8"
//           animationDuration={300}
//         />
//         <Line
//           yAxisId="2"
//           type="natural"
//           dataKey="impression"
//           stroke="#82ca9d"
//           animationDuration={300}
//         />

//         {refAreaLeft && refAreaRight ? (
//           <ReferenceArea
//             yAxisId="1"
//             x1={refAreaLeft}
//             x2={refAreaRight}
//             strokeOpacity={0.3}
//           />
//         ) : null}
//       </LineChart>
//     </div>
//   )
// }

// export default Index

class Index extends React.Component {
  state = {
    ...initialState
  }

  zoom() {
    let { refAreaLeft, refAreaRight, data } = this.state
    logColor(this.state)
    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      this.setState(() => ({
        refAreaLeft: '',
        refAreaRight: ''
      }))
      return
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft]

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1)
    const [bottom2, top2] = getAxisYDomain(
      refAreaLeft,
      refAreaRight,
      'impression',
      50
    )

    this.setState(() => ({
      refAreaLeft: '',
      refAreaRight: '',
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
      bottom2,
      top2
    }))
  }

  zoomOut() {
    const { data } = this.state
    this.setState(() => ({
      data: data.slice(),
      refAreaLeft: '',
      refAreaRight: '',
      left: 'dataMin',
      right: 'dataMax',
      top: 'dataMax+1',
      bottom: 'dataMin',
      top2: 'dataMax+50',
      bottom: 'dataMin+50'
    }))
  }

  render() {
    const {
      data,
      barIndex,
      left,
      right,
      refAreaLeft,
      refAreaRight,
      top,
      bottom,
      top2,
      bottom2
    } = this.state

    return (
      <div className="highlight-bar-charts">
        <br />
        <button className="btn update" onClick={() => this.zoomOut()}>
          Zoom Out
        </button>
        <br />
        <br />
        <p>Highlight / Zoom - able Line Chart</p>
        <LineChart
          width={800}
          height={400}
          data={data}
          onMouseDown={e => this.setState({ refAreaLeft: e.activeLabel })}
          onMouseMove={e => {
            console.log('M-Move: ', e)
            return refAreaLeft && this.setState({ refAreaRight: e.activeLabel })
          }}
          onMouseUp={() => this.zoom()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            allowDataOverflow={true}
            dataKey="name"
            domain={[left, right]}
            type="number"
          />
          <YAxis
            allowDataOverflow={true}
            domain={[bottom, top]}
            type="number"
            yAxisId="1"
          />
          <YAxis
            orientation="right"
            allowDataOverflow={true}
            domain={[bottom2, top2]}
            type="number"
            yAxisId="2"
          />
          <Tooltip />
          <Line
            yAxisId="1"
            type="natural"
            dataKey="cost"
            stroke="#8884d8"
            animationDuration={300}
          />
          <Line
            yAxisId="2"
            type="natural"
            dataKey="impression"
            stroke="#82ca9d"
            animationDuration={300}
          />

          {refAreaLeft && refAreaRight ? (
            <ReferenceArea
              yAxisId="1"
              x1={refAreaLeft}
              x2={refAreaRight}
              strokeOpacity={0.3}
            />
          ) : null}
        </LineChart>
      </div>
    )
  }
}

export default Index
