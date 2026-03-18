# greedily schedule tasks in slots (earliest deadline first)
def schedule_tasks(slots, tasks, constraints):
    tasks.sort(key=lambda t: t.deadline)

    for task in tasks:
        remaining = int(task.hours * 2) # 30 min slots

        for slot in slots:
            if remaining == 0:
                break

            if not slot["available"]:
                continue

            if slot["start"] > task.deadline:
                continue

            if slot["task"] is not None:
                continue

            # assign slot if it is available and not assigned yet
            slot["task"] = task.name
            remaining -= 1

    return slots

# format as JSON
def format_schedule(slots):
    output = []

    for slot in slots:
        if slot["task"]:
            output.append({
                "task": slot["task"],
                "start": slot["start"].isoformat(),
                "end": slot["end"].isoformat()
            })

    return output

