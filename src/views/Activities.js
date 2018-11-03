import React from 'react'

const AddNewActivity = ({ activities, addActivity, deleteActivity }) => {
  const handleSubmit = e => {
    e.preventDefault()
    addActivity(e.target.elements.activity.value)
    e.target.reset()
  }

  const del = activity => {
    deleteActivity(activity)
  }

  return (
    <div>
      <h2>Add New Activity</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="activity">New activity</label>
        <input id="activity" name="activity" type="text" required />
        <button type="submit">Add</button>
      </form>
      <ul>
        {activities.map(a => (
          <li key={a}>
            {a} <button onClick={() => del(a)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AddNewActivity
