import React from 'react'
import Link from './Link'

export default function List({ notes }) {
  return (
    <ul>
      {notes.map(n => (
        <li key={n.link}>
          <Link note={n}></Link>
        </li>
      ))}
    </ul>
  )
}
