import React from "react";

export default ({ history }) => {
  return (
    <div>
      <h2>History</h2>
      {history.map(week => {
        const [date, ...activities] = week;
        const dateFormatted = new Date(date).toLocaleDateString();
        return (
          <div>
            <h3>{dateFormatted}</h3>
            <ul>
              {activities.map(({ activity, target, current }) => (
                <li>
                  {activity}: {current}/{target}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
