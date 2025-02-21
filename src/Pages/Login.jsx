import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='bg'>
            <Navbar />
            <div className='logindesc'>
                <h1>Sign In</h1>
                <form>
                    <input type="email" name="email" style={{ padding: "10px" }} placeholder='Email or mobile number' />
                    {<br></br>} 
                    {<br></br>} 
                    <input type="password" placeholder='Password' />
                    {<br></br>} 
                    {<br></br>} 
                    {<br></br>}
                    <Link to={'/movie'} className='redbutton'>Get started</Link>

                </form>
            </div>
            <Footer />

        </div>
    )
}


export default Login