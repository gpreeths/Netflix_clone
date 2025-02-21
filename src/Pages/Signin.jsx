import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import Language from '../Components/Language'

function Signin() {
    return (
        <div className='bg'>
            <Navbar /><Language/>
            <div className='signindesc'>
                <h1 ><b>Unlimited movies,<br></br> TV  shows and more</b></h1>
                <h3>Starts at ₹149. Cancel at any time.</h3>
                <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                <form>
                    <input type="email" name="email" style={{ padding: "10px" }} placeholder='Enter email' />
                    <Link to={'/movie'} className='redbutton'>Get started</Link>
                </form>
            </div>
            <Footer/>
        
        </div>
    )
}

export default Signin