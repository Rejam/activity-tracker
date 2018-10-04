import React, { Component } from "react";

export default class SetTargets extends Component {
  state = {
    targets: []
  };

  formRef = React.createRef();

  submit = e => {
    e.preventDefault();
    const { targets } = this.state;
    const { setTargets } = this.props;
    setTargets(targets);
  };

  addTarget = e => {
    e.preventDefault();
    const form = this.formRef.current;
    const activity = form.elements.activity.value;
    const amount = form.elements.amount.value;
    const newTarget = {
      activity,
      amount: parseInt(amount)
    };
    this.setState(({ targets }) => ({ targets: [...targets, newTarget] }));
    form.reset();
  };

  useCurrentTargets = () => {
    const { currentTargets, setTargets } = this.props;
    setTargets(currentTargets);
  };

  render() {
    const { activities } = this.props;
    const { targets } = this.state;

    return (
      <div>
        <h2>Set Targets</h2>
        <button onClick={this.useCurrentTargets}>
          Stick with current targets
        </button>
        <form ref={this.formRef} onSubmit={this.submit}>
          <div>
            <select name="activity">
              {activities.map(activity => (
                <option value={activity}>{activity}</option>
              ))}
            </select>
            <input
              onEnter={this.addTarget}
              name="amount"
              type="number"
              placeholder="Enter amount"
              min="0"
            />
            <button onClick={this.addTarget}>Add target</button>
          </div>
          {targets.map(t => (
            <div>
              {t.activity}: {t.amount}
            </div>
          ))}
          <button type="submit">Set Targets</button>
        </form>
      </div>
    );
  }
}
