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
      <ul>
        {activities.map(a => (
          <li
            className="box is-flex"
            style={{ justifyContent: 'space-between' }}
            key={a}
          >
            <p>{a}</p>{' '}
            <button className="button is-danger" onClick={() => del(a)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AddNewActivity
