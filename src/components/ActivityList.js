import React from "react";

export default ({ activities }) => {
  return (
    <div>
      <h2>Activity List</h2>
      <ul>
        {activities.map(a => (
          <li>{a}</li>
        ))}
      </ul>
    </div>
  );
};
