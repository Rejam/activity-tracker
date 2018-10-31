import React from "react";

export default ({ activities, deleteActivity }) => {
  const del = activity => {
    deleteActivity(activity);
  };

  return (
    <div>
      <h2>Activity List</h2>
      <ul>
        {activities.map(a => (
          <li>
            {a} <button onClick={() => del(a)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
