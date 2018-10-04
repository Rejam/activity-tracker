import React from "react";

export default ({ activities, targets }) => {
  return (
    <div>
      <h2>View Progress</h2>
      {targets.map(({ activity, target, current }) => (
        <p>
          {activity}: {current}/{target}
        </p>
      ))}
    </div>
  );
};
