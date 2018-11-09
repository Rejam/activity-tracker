import React from 'react'
import { Button } from 'react-bulma-components/full'
import { Form } from 'react-bulma-components/full'

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
      <form
        onSubmit={submitLog}
        style={{ maxWidth: '400px', padding: '2em', margin: 'auto' }}
      >
        <Form.Field>
          <Form.Label htmlFor="activity">Activity</Form.Label>
          <Form.Control>
            <Form.Input type="text" name="activity" value={activity} disabled />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label htmlFor="amount">Amount</Form.Label>
          <Form.Control>
            <Form.Input type="number" name="amount" id="amount" required />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label htmlFor="date">Date</Form.Label>
          <Form.Control>
            <Form.Input
              type="date"
              name="date"
              id="date"
              defaultValue={`${year}-${month}-${date}`}
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label htmlFor="time">Time</Form.Label>
          <Form.Control>
            <Form.Input
              type="time"
              name="time"
              id="time"
              defaultValue={`${hours}:${mins}`}
            />
          </Form.Control>
        </Form.Field>
        <Button color="primary" type="submit">
          Add Log
        </Button>
      </form>
    </div>
  )
}
