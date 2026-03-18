from flask import Flask, request, jsonify
from flask_cors import CORS

from scheduler.models import Task, Event
from scheduler.utils import generate_time_slots, apply_events
from scheduler.scheduler import schedule_tasks, format_schedule

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

    # parse data
    # create Task and Event class instances
    tasks = [Task(t["name"], t["deadline"], t["hours"]) for t in data["tasks"]]
    events = [Event(e["name"], e["start"], e["end"]) for e in data["events"]]

    # remaining data
    constraints = data["constraints"]
    start = data["range"]["start"]
    end = data["range"]["end"]

    # processing
    slots = generate_time_slots(start, end, constraints)
    slots = apply_events(slots, events)
    slots = schedule_tasks(slots, tasks, constraints)

    schedule = format_schedule(slots)

    return jsonify({ "schedule": schedule })

if __name__ == "__main__":
    app.run()

