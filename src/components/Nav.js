import React from 'react'
import { NavLink } from 'react-router-dom'

const style = {
  nav: {
    display: 'flex',
    borderTop: '1px solid #333',
    borderBottom: '1px solid #333',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  link: {
    padding: '0.5em 1em',
    fontVariant: 'small-caps',
    fontWeight: '600',
    color: '#333'
  },
  active: {
    color: '#39f'
  }
}

const Link = ({ to, children }) => {
  return (
    <NavLink style={style.link} activeStyle={style.active} exact to={to}>
      {children}
    </NavLink>
  )
}

export default () => (
  <nav className="navbar" style={style.nav}>
    <Link to="/">Home</Link>
    <Link to="/targets">Targets</Link>
    <Link to="/activities">Activities</Link>
    <Link to="/report">Report</Link>
  </nav>
)
