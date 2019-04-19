import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import OrginialD3 from './Components/OrginalD3'

function App() {
  return (
    <div className="App">
      <OrginialD3 />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
