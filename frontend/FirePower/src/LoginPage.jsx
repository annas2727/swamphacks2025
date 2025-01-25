import React from 'react'

import LoginButton from './components/LoginButton'; 
import LogoutButton from './components/LogoutButton';
import firelogo from './assets/firelogo.jpg';

function LoginPage() {
    console.log("LoginPage")
    return (           
        <main className = "column"> 
            <img src={firelogo} className = "logo"alt="Fire Logo" />
            <h1>FlameFinder</h1>
            <p>With the California wildfires in mind, we have created a tool to help you detect fire in real time to protect peopel and their homes.</p>
            <LoginButton />
            <LogoutButton />
        
        </main>
        
    )
}

export default LoginPage