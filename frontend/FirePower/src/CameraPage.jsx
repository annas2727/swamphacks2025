import React from 'react'
import Navbar from './components/navBar'
import './CameraPage.css'
function CameraPage() {

    const constraints = {
        audio: true,
        video: true
    };

    async function getMedia(constraints) {
        console.log("test")
        let stream = null;
        try {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
            console.log(stream)
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
                <button onClick={getMedia(constraints)} color="#841584">Click Me</button>
            </div>
            
        </>
    )
}

export default CameraPage