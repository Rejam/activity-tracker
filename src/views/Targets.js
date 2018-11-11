import React from 'react'
import { Link } from 'react-router-dom'

import { Table, TableHead, TableBody, TableButton } from '../components/Table'
import ViewHeading from '../components/ViewHeading'

export default props => {
  const { activities, addTarget, delTarget, targets } = props

  const submit = e => {
    e.preventDefault()
    const form = e.target
    const newTarget = {
      activity: form.activities.value,
      amount: parseInt(form.amount.value)
    }
    addTarget(newTarget)
    form.reset()
  }

  return (
    <React.Fragment>
      <ViewHeading>Set Weekly Targets</ViewHeading>
      {activities.length ? (
        <React.Fragment>
          <form onSubmit={submit}>
            <div className="field is-grouped">
              <div className="control">
                <div className="select">
                  <select name="activities" defaultValue="" required>
                    <option disabled value="">
                      Select activity
                    </option>
                    {activities.map(activity => (
                      <option key={activity} value={activity}>
                        {activity}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="control is-expanded">
                <input
                  className="input"
                  name="amount"
                  type="number"
                  placeholder="Target"
                  min="1"
                  required
                />
              </div>
              <button className="button is-primary" type="submit">
                Add
              </button>
            </div>
          </form>

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
                  <TableButton color="danger" onClick={() => delTarget(t)}>
                    X
                  </TableButton>
                </tr>
              ))}
            </TableBody>
          </Table>
        </React.Fragment>
      ) : (
        <div>
          <p>Please add some activities</p>
          <Link className="button is-primary" to="/activities">
            Add activities
          </Link>
        </div>
      )}
    </React.Fragment>
  )
}
