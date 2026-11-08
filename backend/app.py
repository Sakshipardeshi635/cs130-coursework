
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({
        "message": "Welcome to AWS Flask Backend!",
        "status": "Running Successfully"
    })

@app.route("/api/message")
def get_message():
    return jsonify({
        "message": "Hello from Flask Backend!",
        "status": "success"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
