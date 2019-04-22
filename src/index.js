import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import MainRouter from './router'

function App() {
  return (
    <div className="App">
      <MainRouter />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
