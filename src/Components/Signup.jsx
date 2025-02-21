import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <Link to={'/login'}  className='signup'>Sign In</Link>
  )
}

export default Signup