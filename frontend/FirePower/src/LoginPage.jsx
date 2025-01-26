import React from 'react'
import "./LoginPage.css"
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton'; 
import LogoutButton from './components/LogoutButton';
import Navbar from './components/Navbar';
import firelogo from './assets/firelogo.jpg';



function LoginPage() {
    const { loginWithRedirect, isAuthenticated } =  useAuth0();

    console.log("LoginPage")
    return (           
        <>
        {console.log(isAuthenticated)}
        {isAuthenticated&&<Navbar/>}
            <main className = "column">             
                <img src={firelogo} className = "logo"alt="Fire Logo" />
                <h1>FlameFinder</h1>
                <LoginButton />
                <LogoutButton />
                <p>With the California wildfires in mind, we have created a tool to help you detect fire in real time to protect peopel and their homes.</p>
                
            
            </main>
        </>
        
    )
}

export default LoginPage