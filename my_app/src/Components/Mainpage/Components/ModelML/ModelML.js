import React, { useState } from "react";
import "./ModelML.css";

const ModelML = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Image preview
  const [result, setResult] = useState(""); // Simulated disease outcome

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setResult("Analyzing image...");

      // Simulate disease detection result
      setTimeout(() => {
        setResult("Disease Detected: Powdery Mildew");
      }, 2000);
    }
  };

  return (
    <div className="model-container">
      {/* Centered Title */}
      <h1 className="model-h1">Upload Pics Here For Disease Detection</h1>

      {/* Layout for Upload, Image Preview, and Results */}
      <div className="content-container">
        {/* Left: Upload Option */}
        <div className="left-panel">
          <h3>Upload Image</h3>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            className="file-input"
          />
        </div>

        {/* Center: Image Preview */}
        <div className="center-panel">
          {selectedImage ? (
            <img src={selectedImage} alt="Uploaded" className="preview-img" />
          ) : (
            <p>No Image Uploaded</p>
          )}
        </div>

        {/* Right: Disease Outcome */}
        <div className="right-panel">
          <h3>Disease Outcome</h3>
          <textarea
            value={result}
            readOnly
            placeholder="Result will appear here..."
            className="result-box"
          />
        </div>
      </div>
    </div>
  );
};

export default ModelML;
