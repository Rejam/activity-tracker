import React from 'react'
import id from 'uuid/v4';

export default ({ logDate, log, activity, history }) => {
  const submitLog = e => {
    e.preventDefault()
    const { amount, date, time } = e.target.elements
    log({
      id: id(),
      dateTime: `${date.value} ${time.value}`,
      activity: activity,
      amount: parseInt(amount.value)
    })
    history.goBack()
  }

  function pad(num) {
    return `${num < 10 ? '0' : ''}${num}`
  }

  const year = logDate.getFullYear(),
    month = pad(logDate.getMonth() + 1),
    date = pad(logDate.getDate()),
    hours = pad(logDate.getHours()),
    mins = pad(logDate.getMinutes())

  return (
    <>
      <form
        onSubmit={submitLog}
        style={{
          maxWidth: '400px',
          padding: '2em',
          margin: 'auto'
        }}
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
          Submit
        </button>
      </form>
    </>
  )
}
