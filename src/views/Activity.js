import React from 'react'
import { Link } from 'react-router-dom'

export default ({ activity, log }) => {
  return (
    <div>
      <h1 className="heading is-size-4">{activity}</h1>
      <Link className="button is-primary" to={`/log/${activity}`}>
        New
      </Link>
      <div className="box">
        <table className="table is-fullwidth is-hoverable is-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Amount</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {log.map((l, i) => (
              <tr key={i}>
                <td>{new Date(l.dateTime).toLocaleDateString()}</td>
                <td>
                  {new Date(l.dateTime).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </td>
                <td>{l.amount}</td>
                <td className="is-pulled-right">
                  <Link to="/" className="button is-info is-outlined ">
                    edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
