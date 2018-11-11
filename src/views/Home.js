import React from 'react'
import { Link } from 'react-router-dom'

export default ({ targets, progress }) => (
  <div className="box">
    <table className="table is-fullwidth is-striped is-hoverable">
      <thead>
        <tr>
          <th>Activity</th>
          <th>Progress</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {targets.map(({ activity, amount }) => (
          <tr key={activity}>
            <td>{activity}</td>
            <td>
              {progress[activity] || 0}/{amount}
            </td>
            <td className="is-pulled-right">
              <Link
                className="button is-info is-outlined"
                to={`/activities/${activity}`}
              >
                View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
