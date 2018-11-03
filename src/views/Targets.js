import React, { Component } from 'react'

export default class SetTargets extends Component {
  state = {
    targets: []
  }

  formRef = React.createRef()

  submit = e => {
    e.preventDefault()
    this.props.setTargets(this.state.targets)
    this.setState({ targets: [] })
    this.props.history.push('/')
  }

  addTarget = e => {
    e.preventDefault()
    this.setState(({ targets }) => {
      const form = this.formRef.current
      const activity = form.elements.activity.value
      const amount = parseInt(form.elements.amount.value)
      const newTarget = {
        activity,
        amount
      }
      form.reset()
      // filter matching activities to prevent duplicates
      return {
        targets: [...targets.filter(t => t.activity !== activity), newTarget]
      }
    })
  }

  render() {
    const { activities } = this.props
    const { targets } = this.state
    return (
      <div>
        <h2>Set Weekly Targets</h2>
        {activities.length ? (
          <React.Fragment>
            <form ref={this.formRef} onSubmit={this.submit}>
              <div>
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
                <button onClick={this.addTarget}>Add target</button>
              </div>
              {targets.map((t, i) => (
                <div key={i}>
                  {t.activity}: {t.amount}
                </div>
              ))}
              <button type="submit">Set Targets</button>
            </form>
          </React.Fragment>
        ) : (
          <p>Please add some activities</p>
        )}
      </div>
    )
  }
}
