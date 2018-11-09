import React from 'react'

export default ({ addLog, activity }) => {
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
      <h1>Log Activity</h1>
      <form onSubmit={submitLog}>
        <div>
          <label htmlFor="activity">Activity</label>
          <input type="text" name="activity" value={activity} disabled />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" id="amount" required />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            defaultValue={`${year}-${month}-${date}`}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="time"
            id="time"
            defaultValue={`${hours}:${mins}`}
          />
        </div>
        <button type="submit">Add Log</button>
      </form>
    </div>
  )
}

//{ date: "2018-10-02", activity: "press ups", amount: 50 }
