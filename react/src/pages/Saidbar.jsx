import React from 'react'
import { NavLink } from 'react-router-dom'
import Teachers from './Teachers'
import Students from './Students'


export default function Saidbar() {
  return (
    <div className='saidbar'>

      <h1 className='Asliddin'>Khonimqulov Asliddin</h1>

    <div className='saidbar_menu'>
    <NavLink to={"Teachers"}  > Teachers</NavLink>
    <NavLink to={"Students"} >Students</NavLink>
    </div>
    </div>
  )
}
