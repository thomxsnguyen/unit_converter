from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin

app = Flask(__name__)

CORS(app, resources={r"/convert": {"origins": "*"}})

@app.route('/')
def home():
   return render_template("index.html")

@app.route('/convert', methods=['POST'])
def convert():
    try:
      data = request.json
      print(data)
      length = float(data.get('length'))
      from_unit = data.get('from')
      to_unit = data.get('to')
      response = convert_length(length, from_unit, to_unit)
      return jsonify({
          "converted": response
      })
    except Exception as e:
       print("Flask error")
       return jsonify({"error": str(e)}), 500

def convert_length(length, unit_from, unit_to):
   if unit_from == "mm":
      length /= 1000
   elif unit_from == "cm":
      length /= 100
   elif unit_from == "km":
      length *= 1000

   print(length)
   
   if unit_to == "mm":
      length *= 1000
   elif unit_to == "cm":
      length *= 100
   elif unit_to == "km":
      length /= 1000
   
   return length

if __name__ == '__main__':
    app.run(debug=True, port=5000)
