import React from 'react'
import { NavLink } from 'react-router-dom'
import { Heading } from 'react-bulma-components/full'

const style = {
  nav: {
    display: 'flex'
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
  <header>
    <Heading>Activity Tracker</Heading>
    <nav style={style.nav}>
      <Link to="/">Home</Link>
      <Link to="/targets">Targets</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/report">Report</Link>
    </nav>
  </header>
)
