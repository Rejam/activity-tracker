import React from 'react'

export default props => {
  const { activities, addTarget, delTarget, targets } = props

  const submit = e => {
    e.preventDefault()
    const form = e.target
    const newTarget = {
      activity: form.activity.value,
      amount: parseInt(form.amount.value)
    }
    addTarget(newTarget)
    form.reset()
  }

  return (
    <div>
      <h2>Set Weekly Targets</h2>
      {activities.length ? (
        <React.Fragment>
          <form onSubmit={submit}>
            <select name="activity">
              {activities.map(activity => (
                <option key={activity} value={activity}>
                  {activity}
                </option>
              ))}
            </select>
            <input
              name="amount"
              type="number"
              placeholder="Enter amount"
              min="0"
            />
            <button type="submit">Add target</button>
          </form>
          {targets.map((t, i) => (
            <div key={i}>
              {t.activity}: {t.amount}
              <button onClick={() => delTarget(t)}>X</button>
            </div>
          ))}
        </React.Fragment>
      ) : (
        <p>Please add some activities</p>
      )}
    </div>
  )
}
