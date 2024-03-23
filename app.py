from flask import Flask, jsonify, request

app = Flask(__name__)

# Predefined activities and their corresponding locations
activities = {
    'movies': ['Cinema Hall A', 'Cinema Hall B', 'Cinema Hall C'],
    'picnic': ['City Park', 'Lake Park', 'Forest Reserve'],
    'museum': ['Art Museum', 'History Museum', 'Science Museum'],
    'hiking': ['Mountain Trail', 'Hilltop Park', 'Nature Reserve']
}

# Endpoint to suggest weekend plans
@app.route('/suggest-plans', methods=['GET'])
def suggest_plans():
    location = request.args.get('location', '')
    
    # Check if location is provided
    if not location:
        return jsonify({'error': 'Location is required!'}), 400

    # Generate suggested plans for the weekend
    suggested_plans = {}
    for activity, locations in activities.items():
        suggested_plans[activity] = [loc for loc in locations if location.lower() in loc.lower()]

    return jsonify({'suggested_plans': suggested_plans})

if __name__ == '__main__':
    app.run(debug=True)
