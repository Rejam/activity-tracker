import React from 'react'

const AddNewActivity = ({ activities, addActivity, delActivity }) => {
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
      <h2 className="heading is-size-4">Add New Activity</h2>
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
      <div className="box">
        <table className="table is-fullwidth is-striped is-hoverable">
          <thead>
            <tr>
              <th>Activity</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {activities.map(a => (
              <tr key={a}>
                <td>{a}</td>
                <td className="is-pulled-right">
                  <button
                    className="button is-danger is-outlined"
                    onClick={() => del(a)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AddNewActivity
