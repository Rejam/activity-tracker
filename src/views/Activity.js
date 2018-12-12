import React from 'react'
import { Link } from 'react-router-dom'
import { Table, TableHead, TableBody, TableLink } from '../components/Table'
import ViewHeading from '../components/ViewHeading'

export default ({ activity, log }) => {
  return (
    <>
      <ViewHeading>{activity}</ViewHeading>
      <Link className="button is-primary" to={`/log/${activity}`}>
        Add
      </Link>
      <Table>
        <TableHead>
          <th>Date</th>
          <th>Time</th>
          <th>Amount</th>
          <th />
        </TableHead>

        <TableBody>
          {log.map((l, i) => (
            <tr key={i}>
              <td>{new Date(l.dateTime).toLocaleDateString()}</td>
              <td>
                {new Date(l.dateTime).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </td>
              <td>{l.amount}</td>
              <TableLink to="/" color="info">
                edit
              </TableLink>
            </tr>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
