import React from 'react'
import { Link } from 'react-router-dom'

import { Table, TableHead, TableBody, TableLink } from '../components/Table'

export default ({ targets, progress }) => (
  <div>
    <Table>
      <TableHead>
        <th>Activity</th>
        <th>Progress</th>
        <th />
      </TableHead>
      <TableBody>
        {targets.map(({ activity, amount }) => (
          <tr key={activity}>
            <td>
              <Link to={`/activities/${activity}`}>{activity}</Link>
            </td>
            <td>
              {progress[activity] || 0}/{amount}
            </td>
            <TableLink color="primary" to={`/log/${activity}`}>
              Add
            </TableLink>
          </tr>
        ))}
      </TableBody>
    </Table>
  </div>
)
