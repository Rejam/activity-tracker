import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from 'react-bulma-components'

export default ({ targets, progress }) => (
  <div>
    {targets.map(({ activity, amount }) => (
      <Box key={activity}>
        <p>
          {activity}: {progress[activity] || 0}/{amount}
        </p>
        <Link to={`/activities/${activity}`}>View</Link>
      </Box>
    ))}
  </div>
)
