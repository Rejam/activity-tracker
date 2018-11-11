import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  const { activities, addTarget, delTarget, targets } = props

  const submit = e => {
    e.preventDefault()
    const form = e.target
    console.log(form.activities.value)
    const newTarget = {
      activity: form.activities.value,
      amount: parseInt(form.amount.value)
    }
    addTarget(newTarget)
    form.reset()
  }

  return (
    <React.Fragment>
      <h1 className="heading is-size-4">Set Weekly Targets</h1>
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

          <div className="box">
            <table className="table is-fullwidth is-striped is-hoverable">
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Target</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {targets.map((t, i) => (
                  <tr key={i}>
                    <td>{t.activity}</td>
                    <td>{t.amount}</td>
                    <td className="is-pulled-right">
                      <button
                        className="button is-danger is-outlined"
                        onClick={() => delTarget(t)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
