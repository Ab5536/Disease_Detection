from flask import Flask, request, jsonify
import pickle
import os
import numpy as np
from PIL import Image

# Load the trained model
MODEL_FILE = "model_1_Binary.pkl"

if os.path.exists(MODEL_FILE):
    with open(MODEL_FILE, "rb") as model_file:
        model = pickle.load(model_file)
    print("Model loaded successfully!")
else:
    raise FileNotFoundError(f"{MODEL_FILE} not found in the current directory.")

# Initialize the Flask app
app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Check if the file is in the request
        if "file" not in request.files:
            return jsonify({"error": "No file part in the request"}), 400

        file = request.files["file"]

        # Check if a file was uploaded
        if file.filename == "":
            return jsonify({"error": "No file selected for uploading"}), 400

        # Open and preprocess the image
        image = Image.open(file)
        image = image.resize((224, 224))  # Resize to match model input size
        image_array = np.array(image) / 255.0  # Normalize pixel values
        image_array = image_array.reshape(1, *image_array.shape)  # Add batch dimension

        # Predict using the loaded model
        prediction = model.predict(image_array)  # Assuming model has `predict` method
        result = "Yes" if prediction[0] > 0.5 else "No"  # Adjust threshold as needed

        # Return the result as JSON
        return jsonify({"prediction": result})

    except Exception as e:
        # Handle unexpected errors
        return jsonify({"error": str(e)}), 500

# Run the Flask app
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)  # Run on localhost
