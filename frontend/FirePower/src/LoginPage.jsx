import React from 'react'
import "./LoginPage.css"
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton'; 
import LogoutButton from './components/LogoutButton';
<<<<<<< HEAD
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
        
=======
import firelogo from './assets/firelogo.jpg';

function LoginPage() {
<<<<<<< HEAD
    console.log("LoginPage")
    return (           
=======

    return (  
      <>
        <Navbar/>
>>>>>>> 48178c19ea12d24de7d02f41fef04417baf669e0
        <main className = "column"> 
            <img src={firelogo} className = "logo"alt="Fire Logo" />
            <h1>FlameFinder</h1>
            <p>With the California wildfires in mind, we have created a tool to help you detect fire in real time to protect peopel and their homes.</p>
            <LoginButton />
            <LogoutButton />
        
        </main>
      <>
>>>>>>> a103d5e9b873474bb66f057f5a14004a2d49f345
    )
}

export default LoginPage