import React from "react";

export default ({ targets, addLog }) => {
  const submit = e => {
    e.preventDefault();
    const { value: activity } = e.target.elements.activity;
    const { value } = e.target.elements.amount;
    const newLog = { activity, amount: parseInt(value) };
    addLog(newLog);
  };
  return (
    <div>
      <h2>Update Progress</h2>
      <form onSubmit={submit}>
        <select name="activity" id="activity" required>
          <option value="">Select Activity</option>
          {targets.map(({ activity }) => (
            <option value={activity}>{activity}</option>
          ))}
        </select>
        <input
          name="amount"
          type="number"
          placeholder="Enter amount to update"
          min="0"
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
