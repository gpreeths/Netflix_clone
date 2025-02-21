import React from 'react'
import Netflix_logo from './Netflix_logo.png'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import Language from './Language'


function Navbar() {
  return (
    <div className='ls'>
    <img src={Netflix_logo} alt="Netflix_logo" className='logo'/>
    

{/* <ul>
    <li>Home</li><li>TV Shows</li>
    <li>Movies</li>
    <li>New and Popular</li></ul>  */}
    
    <Signup/>

    </div>
  )
}

export default Navbar