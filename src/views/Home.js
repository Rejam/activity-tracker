import React from 'react'

export default ({ targets, progress }) => (
  <div>
    {targets.map(({ activity, amount }) => (
      <p key={activity}>
        {activity}: {progress[activity] || 0}/{amount}
      </p>
    ))}
  </div>
)
