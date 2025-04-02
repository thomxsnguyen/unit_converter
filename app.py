from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/convert', methods=['POST'])
def convert():
    try:
      data = request.json
      print("✅ Received:", data)
      result = float(data.get('length', 0))
      return jsonify({
          "converted": result
      })
    except Exception as e:
       print("Flask error")
       return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
