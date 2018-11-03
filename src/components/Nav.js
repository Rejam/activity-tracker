import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <header>
    <h1>Activity Tracker</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/targets">Targets</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/report">Report</Link>
    </nav>
  </header>
)
