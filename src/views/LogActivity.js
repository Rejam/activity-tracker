import React from 'react'

export default ({ addLog, activity, history }) => {
  const submitLog = e => {
    e.preventDefault()
    const amount = e.target.elements.amount.value
    const date = e.target.elements.date.value
    const time = e.target.elements.time.value

    addLog({
      dateTime: `${date} ${time}`,
      activity: activity,
      amount: parseInt(amount)
    })
    history.goBack()
  }

  function pad(num) {
    return `${num < 10 ? '0' : ''}${num}`
  }
  const now = new Date()
  const year = now.getFullYear()
  const month = pad(now.getMonth() + 1)
  const date = pad(now.getDate())

  const hours = pad(now.getHours())
  const mins = pad(now.getMinutes())

  return (
    <div>
      <h1 className="heading is-size-4">Log Activity</h1>
      <form
        onSubmit={submitLog}
        style={{ maxWidth: '400px', padding: '2em', margin: 'auto' }}
      >
        <div className="field">
          <label className="label" htmlFor="activity">
            Activity
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="activity"
              value={activity}
              disabled
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="amount">
            Amount
          </label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="amount"
              id="amount"
              min="1"
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="date">
            Date
          </label>
          <div className="control">
            <input
              className="input"
              type="date"
              name="date"
              id="date"
              defaultValue={`${year}-${month}-${date}`}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="time">
            Time
          </label>
          <div className="control">
            <input
              className="input"
              type="time"
              name="time"
              id="time"
              defaultValue={`${hours}:${mins}`}
              required
            />
          </div>
        </div>
        <button className="button" color="primary" type="submit">
          Add Log
        </button>
      </form>
    </div>
  )
}
