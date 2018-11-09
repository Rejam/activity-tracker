import React from 'react'
import { Link } from 'react-router-dom'

export default ({ activity, log }) => {
  console.log(log)
  return (
    <div>
      <h1>{activity}</h1>
      <Link to={`/log/${activity}`}>Add</Link>
      <h2>**Chart**</h2>
      <ul>
        {log.map((l, i) => (
          <li key={i}>
            <p>
              {new Date(l.dateTime).toLocaleDateString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            <p>Amount: {l.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
