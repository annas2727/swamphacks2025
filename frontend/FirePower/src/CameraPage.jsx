import React from 'react'
import Navbar from './components/navBar'
import socketio from "socket.io-client";
import './CameraPage.css'
function CameraPage() {
    
    
    async function getMedia(){
        const constraints = {
            audio: true,
            video: true
        };
        console.log("test")
        let stream = null;
        const videoElement = document.getElementById('videoElement');
        try {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
            console.log(stream)
            videoElement.srcObject = stream;
          /* use the stream */
            
        } catch (err) {
          /* handle the error */
            console.log("We are cooked chat");
            console.log(err);
        }
    }
    return (
        <>
            <Navbar/>
            <div>
                <p>Camera View</p>
                <button onClick={getMedia} color="#841584">Click Me</button>
                <video className = "block mx-auto " id="videoElement" autoPlay></video>
            </div>
            
        </>
    )
}

export default CameraPage