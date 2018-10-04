import React from "react";

export default ({ progress, targets }) => {
  return (
    <div>
      <h2>View Progress</h2>
      {targets.map(({ activity, amount }) => (
        <p>
          {activity}: {progress[activity] || 0}/{amount}
        </p>
      ))}
    </div>
  );
};
