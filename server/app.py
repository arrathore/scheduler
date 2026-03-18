from flask import Flask, request, jsonify
from flask_cors import CORS

'''
Main flask server application to route endpoints
'''
app = Flask(__name__)
CORS(app)

@app.route('/generate_schedule', methods=['POST'])
def generate_schedule():
    if not request.is_json:
        print("request is not json")
        return jsonify({})        

    data = request.get_json()
    print(data)
    return jsonify({})

if __name__ == "__main__":
    app.run()

