import React from 'react'
<<<<<<< HEAD
import Navbar from './components/Navbar'

import './CameraPage.css'
function CameraPage() {
=======
import Navbar from './components/navBar'
import socketio from "socket.io-client";
import './CameraPage.css'
function CameraPage() {
    
    
>>>>>>> a103d5e9b873474bb66f057f5a14004a2d49f345
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

            videoElement.srcObject = stream;
<<<<<<< HEAD
            let isRecording = false;
    
            // Function to handle a single recording session
            function startRecordingSession() {
                let recordedChunks = [];
                
                // Don't start a new recording if one is in progress
                if (isRecording) return;
                
                let mediaRecorder = new MediaRecorder(stream, {
                    mimeType: 'video/webm'
                });
    
                mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        recordedChunks.push(event.data);
                    }
                };
    
                mediaRecorder.onstop = () => {
                    const blob = new Blob(recordedChunks, {
                        type: '[REDACTED]'
                    });
                    sendToServer(blob);
                    isRecording = false;
                    console.log("Clip recorded and sent");
                };
    
                // Start recording
                isRecording = true;
                mediaRecorder.start();
                console.log("Started recording");
    
                // Stop after 10 seconds
                setTimeout(() => {
                    if (mediaRecorder.state !== 'inactive') {
                        mediaRecorder.stop();
                    }
                }, 10000);
            }
            startRecordingSession(); 
            setInterval(startRecordingSession, 20000); 
          
=======
          /* use the stream */
            
>>>>>>> a103d5e9b873474bb66f057f5a14004a2d49f345
        } catch (err) {
          /* handle the error */
            console.log("We are cooked chat");
            console.log(err);
        }
    }

    async function sendToServer(blob) {
        const formData = new FormData();
        formData.append('video', blob, `clip-${Date.now()}.mp4`); // Unique filename
    
        try {
            const response = await fetch('http://localhost:8000/upload', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            console.log('Video uploaded successfully:', result);
        } catch (error) {
            console.error('Error uploading video:', error);
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