import React from 'react'
import { Link } from 'react-router-dom'

import { ViewHeading, TargetForm, TargetsTable } from '../components'

export default ({ activities, addTarget, delTarget, targets }) => (
  <>
    <ViewHeading>Set Weekly Targets</ViewHeading>
    {activities.length ? (
      <>
        <TargetForm addTarget={addTarget} activities={activities} />
        <br />
        <TargetsTable targets={targets} delTarget={delTarget} />
      </>
    ) : (
      <>
        <p>Please add some activities</p>
        <Link className="button is-primary" to="/activities">
          Add activities
        </Link>
      </>
    )}
  </>
)
