import React from 'react'
import { Link } from 'react-router-dom'

function Logout() {
  return (
    <Link to={'/'}  className='signup'>Logout</Link>
  )
}

export default Logout