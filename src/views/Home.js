import React from 'react'
import { Link } from 'react-router-dom'

export default ({ targets, progress }) => (
  <div>
    {targets.map(({ activity, amount }) => (
      <div className="box" key={activity}>
        <p>
          {activity}: {progress[activity] || 0}/{amount}
        </p>
        <Link to={`/activities/${activity}`}>View</Link>
      </div>
    ))}
  </div>
)
