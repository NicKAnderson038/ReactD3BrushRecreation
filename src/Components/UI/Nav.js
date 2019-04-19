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
  padding: 4px 10px;
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
  /* &:disabled {
    background-color: #cccccc !important;
  } */
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
  color: 'black'
}

const nav = () => {
  return (
    <div style={header}>
      <Button>
        <Link to="/" style={link}>
          Original D3
        </Link>
      </Button>
      <Button>
        <Link to="/grid-components" style={link}>
          Grid Components
        </Link>
      </Button>
    </div>
  )
}

export default nav