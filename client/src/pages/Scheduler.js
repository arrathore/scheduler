import { useState } from 'react';

import '../App.css'

function Scheduler() {

    // user tasks
    const [tasks, setTasks] = useState([{ name: '', deadline: '', hours: '' }]);
    const updateTask = (index, field, value) => { // update the task at index
	const newTasks = [...tasks];
	newTasks[index][field] = value;
	setTasks(newTasks);
    }
    const addTask = () => { // add a new task
	setTasks([...tasks, { name: '', deadline: '', hours: '' }]);
    };

    // user's events to work around
    const [events, setEvents] = useState([{ name: '', date: '', start: '', end: '' }]);
    const updateEvent = (index, field, value) => {
	const newEvents = [...events];
	newEvents[index][field] = value;
	setEvents(newEvents);
    };
    const addEvent = () => {
	setEvents([...events, { name: '', date: '', start: '', end: '' }]);
    };

    // user-defined constraints
    const [constraints, setConstraints] = useState({
	work_start: '09:00',
	work_end: '22:00',
	max_hours_per_day: 6
    });

    // send data to backend
    const handleSubmit = async (e) => {
	e.preventDefault();

	const payload = {tasks, events, constraints};

	console.log("sending: ", payload);
	
    };

    return (
<div className="main">
  <h1><i>scheduler</i></h1>

  <form onSubmit= {handleSubmit}>
    <h2>Tasks</h2>
    {tasks.map((task, index) => (
    <div key={index} className="row">
      <input
	type="text"
	placeholder="task name"
	value={task.name}
	onChange={(e) => updateTask(index, 'name', e.target.value)}
      required
      />

      <input
	type="date"
	value={task.deadline}
	onChange={(e) => updateTask(index, 'deadline', e.target.value)}
      required
      />

      <input
	type="number"
	placeholder="hours to complete"
	value={task.hours}
	onChange={(e) => updateTask(index, 'hours', e.target.value)}
      required
      />
    </div>
    ))}

    <button type="button" onClick={addTask}>
      + add task
    </button>

    <br/><br/>

    <h2>Events (Busy Times)</h2>
    {events.map((event, index) => (
    <div key={index} className="row">
      <input
	type="text"
	placeholder="event name"
	value={event.name}
	onChange={(e) => updateEvent(index, 'name', e.target.value)}
      required
      />
      

      <input
	type="time"
	value={event.start}
	onChange={(e) => updateEvent(index, 'start', e.target.value)}
      />

       to 
      
      <input
	type="time"
	value={event.end}
	onChange={(e) => updateEvent(index, 'end', e.target.value)}
      />
    </div>
    ))}

    <button type="button" onClick={addEvent}>
      + add event
    </button>

    <br/><br/>

    <h2>Work Constraints</h2>

    <div className="row">
      <label>Work Start: </label>
      <input
	type="time"
	value={constraints.work_start}
	onChange={(e) =>
      setConstraints({ ...constraints, work_start: e.target.value })
      }
      />
    </div>

    <div className="row">
      <label>Work End: </label>
      <input
	type="time"
	value={constraints.work_end}
	onChange={(e) =>
      setConstraints({ ...constraints, work_end: e.target.value })
      }
      />
    </div>

    <div className="row">
      <label>Max Hours / Day: </label>
      <input
	type="number"
	value={constraints.max_hours_per_day}
	onChange={(e) =>
      setConstraints({ ...constraints, max_hours_per_day: e.target.value })
      }
      />
    </div>

    <br />
    <button type="submit">Generate Schedule</button>
    
  </form>
</div>
  );    
}

export default Scheduler;
