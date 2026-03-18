import './CalendarView.css';

// component to view generated schedules
function CalendarView({ schedule, events }) {
    // combine tasks and events
    const items = [
	...schedule.map(s => ({ ...s, type: 'task' })),
	...events.map(e => ({ ...e, type: 'event', task: e.name }))
    ];

    // group by day
    const grouped = {};

    items.forEach(item => {
	const date = item.start.split('T')[0];

	if (!grouped[date]) grouped[date] = [];
	grouped[date].push(item);
    });

    const sortedDates = Object.keys(grouped).sort();

    const formatTime = (datetime) => {
	if (!datetime || !datetime.includes('T')) return '';

	const parts = datetime.split('T');
	if (parts.length < 2) return '';

	return parts[1].slice(0, 5);
    }
    
    return (
<div className="calendar">
  {sortedDates.map(date => (
  <div key={date} className="day-column">
    <h3>{date}</h3>

    {grouped[date].map((item, idx) => {
	const startTime = formatTime(item.start)
	const endTime = formatTime(item.end)

    return (
    <div
      key={idx}
      className={`block ${item.type}`}
      >
      <strong>{item.task}</strong>
      <div>{startTime} - {endTime}</div>
    </div>
    );
    })}
  </div>
  ))}
</div>
    );
}

export default CalendarView;

