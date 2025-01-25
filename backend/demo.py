from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os
from datetime import datetime

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

# Optional: Endpoint to check server status
@app.get("/")
async def root():
    return {"status": "Server is running"}