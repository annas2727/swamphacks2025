from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os
from datetime import datetime
from fastapi.responses import FileResponse

import subprocess

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this in production!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create uploads directory if it doesn't exist
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/upload")
async def upload_video(video: UploadFile = File(...)):
    try:
        # Create unique filename with timestamp
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"video_{timestamp}.mp4"
        file_path = os.path.join(UPLOAD_DIR, filename)
        
        # Save the video file
        with open(file_path, "wb") as buffer:
            content = await video.read()
            buffer.write(content)
        
        subprocess.Popen(["python", "yolov5/detect.py", "--source", file_path, "--weights", "model/yolov5s_best.pt", "--conf", "0.2"])
        
        return {
            "filename": filename,
            "status": "success",
            "message": f"Video saved as {filename}"
        }
    
    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }

@app.get("/latest")
async def get_latest_video():
    try:
        files = os.listdir(UPLOAD_DIR)
        files.sort(reverse=True)
        
        if len(files) > 0:
            latest_file = files[0]
            file_path = os.path.join(UPLOAD_DIR, latest_file)
            
            return FileResponse(file_path, media_type="video/mp4")
        else:
            return {
                "status": "error",
                "message": "No videos found"
            }
            
    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }

# Optional: Endpoint to check server status
@app.get("/")
async def root():
    return {"status": "Server is running"}