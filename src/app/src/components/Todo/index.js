import React from 'react'
import './todo.css'

export default function Todo({value}) {
  return (
    <div className='todo'>{value}</div>
  )
}
