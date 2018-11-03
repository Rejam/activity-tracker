import React from 'react'

export default ({ activity, log }) => {
  console.log(log)
  return (
    <div>
      <h1>{activity}</h1>
      <h2>**Chart**</h2>
      <ul>
        {log.map((l, i) => (
          <li key={i}>
            <p>
              {l.date}: {l.amount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
