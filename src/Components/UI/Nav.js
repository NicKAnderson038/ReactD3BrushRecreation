import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const header = {
  padding: '12px',
  backgroundColor: '#1fc8db',
  backgroundImage:
    'linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)'
}

const Button = styled.button`
  /* padding: 4px 10px; */
  border-radius: 4%;
  outline: none;
  background-color: white;
  cursor: pointer;
  margin: 0 2px;
  &:hover {
    background-color: #ffb6c1;
    border-radius: 4%;
    border-color: #ffb6c1;
    box-shadow: 0 7px 14px rgba(48, 51, 54, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }
  &:active {
    background-color: #dc5379;
    border-radius: 4%;
    border-color: #dc5379;
    border: none;
    box-shadow: 0 4px 6px rgba(48, 51, 54, 0.1), 0 1px 3px rgba(0, 0, 0, 0.12);
    transform: translateY(1px);
  }
`
const link = {
  fontSize: '16px',
  textDecoration: 'none',
  color: 'black',
  margin: '8px',
  userSelect: 'none'
}

const nav = () => {
  return (
    <div style={header}>
      <Button>
        <Link to="/" style={link}>
          Circle Plots
        </Link>
      </Button>
      <Button>
        <Link to="/cicle-plots" style={link}>
          Cirlce Plots 2
        </Link>
      </Button>
      <Button>
        <Link to="/line-graph" style={link}>
          Line Graph
        </Link>
      </Button>
      {/* <Button>
        <Link to="/line-graph-react" style={link}>
          Line Graph 2
        </Link>
      </Button> */}
    </div>
  )
}

export default nav
