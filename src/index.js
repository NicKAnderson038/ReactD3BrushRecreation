import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import MainRouter from './router'
const background = {
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App" style={background}>
      <MainRouter />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
