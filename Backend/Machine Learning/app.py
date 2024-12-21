from flask import Flask, request, jsonify
import pickle
import numpy as np
from PIL import Image

# Load the trained model
with open("D:/Semester 5/SE/New commit/Disease_Detection/Backend/Machine Learning/model_1_Binary.pkl", "rb") as model_file:
    model = pickle.load(model_file)

# Initialize the Flask app
app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get the uploaded image from the request
        if "file" not in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        file = request.files["file"]
        if file.filename == "":
            return jsonify({"error": "No file selected for uploading"}), 400

        # Open and preprocess the image
        image = Image.open(file)
        image = image.resize((224, 224))  # Resize to match model input
        image_array = np.array(image) / 255.0  # Normalize the image
        image_array = image_array.reshape(1, *image_array.shape)  # Add batch dimension

        # Predict using the model
        prediction = model.predict(image_array)
        result = "Yes" if prediction[0] > 0.5 else "No"  # Adjust threshold if needed

        # Return the prediction as JSON
        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
