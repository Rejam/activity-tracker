import React from 'react'

import { Table, TableHead, TableBody, TableButton } from '../components/Table'
import ViewHeading from '../components/ViewHeading'

const AddActivity = ({ activities, addActivity, delActivity }) => {
  const handleSubmit = e => {
    e.preventDefault()
    addActivity(e.target.elements.activity.value)
    e.target.reset()
  }

  const del = activity => {
    delActivity(activity)
  }

  return (
    <div>
      <ViewHeading>Add New Activity</ViewHeading>
      <form onSubmit={handleSubmit}>
        <div className="field is-grouped">
          <div className="control is-expanded">
            <input
              className="input"
              id="activity"
              name="activity"
              type="text"
              placeholder="Enter new activity"
              required
            />
          </div>
          <div className="control">
            <button className="button is-primary" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
      <Table>
        <TableHead>
          <th>Activity</th>
          <th />
        </TableHead>
        <TableBody>
          {activities.map(a => (
            <tr key={a}>
              <td>{a}</td>
              <TableButton color="danger" onClick={() => del(a)}>
                X
              </TableButton>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AddActivity
