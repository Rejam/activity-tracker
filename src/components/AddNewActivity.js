import React from "react";

const AddNewActivity = ({ addNew }) => {
  const handleSubmit = e => {
    e.preventDefault();
    addNew(e.target.elements.activity.value);
    e.target.reset();
  };

  return (
    <div>
      <h2>Add New Activity</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="activity">New activity</label>
        <input id="activity" name="activity" type="text" required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNewActivity;
