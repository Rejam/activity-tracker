import React from 'react'

import ViewHeading from '../components/ViewHeading'

export default ({ addLog, activity, history }) => {
  const submitLog = e => {
    e.preventDefault()
    const { amount, date, time } = e.target.elements
    addLog({
      dateTime: `${date.value} ${time.value}`,
      activity: activity,
      amount: parseInt(amount.value)
    })
    history.goBack()
  }
  function pad(num) {
    return `${num < 10 ? '0' : ''}${num}`
  }
  const now = new Date(),
    year = now.getFullYear(),
    month = pad(now.getMonth() + 1),
    date = pad(now.getDate()),
    hours = pad(now.getHours()),
    mins = pad(now.getMinutes())

  return (
    <div>
      <ViewHeading>Log Activity</ViewHeading>
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
