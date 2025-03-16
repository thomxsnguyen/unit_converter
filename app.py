from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/convert', methods=['POST'])
def convert_units():
  data = request.get_json()
  return jsonify({"message": "Data received successfully", "data": data})



if __name__ == '__main__':
    app.run(debug=True)