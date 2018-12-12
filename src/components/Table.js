import React from 'react'
import { Link } from 'react-router-dom'

export const Table = ({ children }) => (
  <div className="box">
    <table className="table is-fullwidth is-striped is-hoverable table">
      {children}
    </table>
  </div>
)

export const TableHead = ({ children }) => (
  <thead>
    <tr>{children}</tr>
  </thead>
)

export const TableBody = ({ children }) => <tbody>{children}</tbody>

export const TableButton = ({ children, color, onClick }) => (
  <td style={{ textAlign: 'right', width: '50px' }}>
    <button className={`button is-${color} is-outlined`} onClick={onClick}>
      {children}
    </button>
  </td>
)

export const TableLink = ({ children, color, to }) => (
  <td style={{ textAlign: 'right', width: '50px' }}>
    <Link className={`button is-${color} is-outlined`} to={to}>
      {children}
    </Link>
  </td>
)
