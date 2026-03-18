from datetime import datetime

'''
Define classes for structured data
'''

# tasks the user wants to complete
class Task:
    def __init__(self, name, deadline, hours):
        self.name = name
        self.deadline = datetime.fromisoformat(deadline)
        self.hours = hours

# times the user is busy and cannot work        
class Event:
    def __init__(self, name, start, end):
        self.name = name
        self.start = datetime.fromisoformat(start)
        self.end = datetime.fromisoformat(end)

