import React from 'react'

import { Table, TableHead, TableBody, TableButton } from '../components'

export default ({ targets, delTarget }) => (
  <Table>
    <TableHead>
      <th>Activity</th>
      <th>Target</th>
      <th />
    </TableHead>
    <TableBody>
      {targets.map((t, i) => (
        <tr key={i}>
          <td>{t.activity}</td>
          <td>{t.amount}</td>
          <TableButton color="danger" onClick={() => delTarget(t.id)}>
            X
          </TableButton>
        </tr>
      ))}
    </TableBody>
  </Table>
)
