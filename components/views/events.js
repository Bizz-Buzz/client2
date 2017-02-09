import React from 'react'

module.exports = (state, dispatch) => {
  console.log(state.events);
  function renderEvent (event) {
    console.log({event});
    return <div className='event'>
      <div className="eventTitle">{event.title}</div>
      <div className="eventName">Created by: {event.first_name} {event.last_name}</div>
      <div className="eventTime">Time/Date: {event.date_time}</div>
      <div className="eventDescription">{event.description}</div>
    </div>
  }
  function renderEvents () {
    console.log(state.events);
    return state.events.map((event) => renderEvent(event))
  }
  return <div className="events">
      <h1>Events</h1>
      {renderEvents()}
    </div>
}
