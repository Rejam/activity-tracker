import React from 'react'
import id from 'uuid/v4'

export default ({ addTarget, activities }) => {

  const submit = e => {
    e.preventDefault()
    const form = e.target
    const newTarget = {
      id: id(),
      activity: form.activities.value,
      amount: parseInt(form.amount.value)
    }
    addTarget(newTarget)
    form.reset()
  }
  return (
  <form onSubmit={submit}>
  <div className="field is-grouped">
    <div className="control">
      <div className="select">
        <select name="activities" defaultValue="" required>
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
    <div className="control is-expanded">
      <input
        className="input"
        name="amount"
        type="number"
        placeholder="Target"
        min="1"
        required
      />
    </div>
    <button className="button is-primary" type="submit">
      Add
    </button>
  </div>
</form>
  )
}