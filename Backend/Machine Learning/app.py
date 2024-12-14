#pip install flask flask-cors pickle5
from flask import Flask, request, jsonify
import pickle
import numpy as np
from PIL import Image
import io
import torch
from torchvision import transforms

# Load the pre-trained model
model_path = "model_1_Binary.pkl"  # Replace with your pickle file path
with open(model_path, "rb") as f:
    model = pickle.load(f)

# Initialize Flask app
app = Flask(__name__)

# Allow CORS for frontend interaction
from flask_cors import CORS
CORS(app)

# Define image transformations
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

@app.route("/predict", methods=["POST"])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded."}), 400

    file = request.files["file"]
    if not file:
        return jsonify({"error": "No file uploaded."}), 400

    try:
        # Open the image file
        image = Image.open(io.BytesIO(file.read())).convert("RGB")
        
        # Preprocess the image
        input_tensor = transform(image).unsqueeze(0)  # Add batch dimension

        # Perform inference
        model.eval()
        with torch.no_grad():
            outputs = model(input_tensor)
            _, predicted_class = outputs.max(1)

        # Map class index to label (customize based on your classes)
        classes = ["Normal", "Tuberculosis"]  # Replace with actual class names
        prediction = classes[predicted_class.item()]

        return jsonify({"prediction": prediction})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
