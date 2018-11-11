import React from 'react'

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
          <form onSubmit={submit} className="is-flex">
            <div className="control">
              <div className="select">
                <select
                  style={{ display: 'span' }}
                  name="activities"
                  defaultValue=""
                  required
                >
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
            <div className="control">
              <input
                className="input"
                style={{ display: 'span' }}
                name="amount"
                type="number"
                placeholder="Amount"
                min="0"
                required
              />
            </div>
            <button className="button is-primary" type="submit">
              Add target
            </button>
          </form>
          {targets.map((t, i) => (
            <div
              className="box is-flex"
              style={{ justifyContent: 'space-between' }}
              key={i}
            >
              <p>{t.activity}</p>
              <p>{t.amount}</p>
              <button className="button is-danger" onClick={() => delTarget(t)}>
                X
              </button>
            </div>
          ))}
        </React.Fragment>
      ) : (
        <p>Please add some activities</p>
      )}
    </React.Fragment>
  )
}
