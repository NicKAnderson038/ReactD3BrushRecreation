import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
  return (
    <div>
      <Link to="/">Original D3</Link>
      <Link to="/grid-components">Grid Components</Link>
    </div>
  )
}

export default nav
