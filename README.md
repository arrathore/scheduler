# Constraint-Based Scheduler
This is a web app for creating a schedule, given a set of user defined
constraints, including existing events to work around, deadlines, and
more. Currently, the app only creates weekly schedules, but can be
easily expanded to provide any size of schedule.

## Constraints
Currently supported constraints are:
- User's working hours
- Existing events in user's calendar
- User tasks and deadlines
- Time user is willing to spend working on any day

## Architecture
The application is implemented using a React.js frontend and Python
Flask backend.

