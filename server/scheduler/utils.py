from datetime import datetime, timedelta

# assume the user only wants to work in 30 minute intervals
# make assignable later
SLOT_MINUTES = 30

# get a list of SLOT_MINUTES min slots when the user is able to work
def generate_time_slots(start_date, end_date, constraints):
    slots = []

    current = datetime.fromisoformat(start_date)
    end = datetime.fromisoformat(end_date)

    while current <= end:
        day_start = current.replace(
            hour=int(constraints["work_start"].split(":")[0]),
            minute=0
        )
        day_end = current.replace(
            hour=int(constraints["work_end"].split(":")[0]),
            minute=0
        )
        day_end = current.replace(
            hour=int(constraints["work_end"].split(":")[0]),
            minute=0
        )

        t = day_start
        while t < day_end:
            slots.append({
                "start": t,
                "end": t + timedelta(minutes=SLOT_MINUTES),
                "available": True,
                "task": None
            })
            t += timedelta(minutes=SLOT_MINUTES)

        current += timedelta(days=1)

    return slots

# mark some slots as unavailable due to events
def apply_events(slots, events):
    for slot in slots:
        for event in events:
            # if an slot ends before an event starts or if it starts after the event ends, it is available
            if not (slot["end"] <= event.start or slot["start"] >= event.end):
                slot["available"] = False

    return slots

