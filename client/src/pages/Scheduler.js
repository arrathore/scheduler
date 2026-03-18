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
    const [events, setEvents] = useState([{ day: 'Monday', start: '', end: '' }]);
    const updateEvent = (index, field, value) => {
	const newEvents = [...events];
	newEvents[index][field] = value;
	setEvents(newEvents);
    };
    const addEvent = () => {
	setEvents([...events, { day: 'Monday', start: '', end: '' }]);
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
    {}
  </form>
</div>
  );    
}

export default Scheduler;
