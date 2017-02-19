import React from 'react'
import renderCreateEvent from './createEvent'

module.exports = (state, dispatch) => {
  function renderEvent (event) {
    return <div className='event'>
      <div className="eventTitle">{event.title}</div>
      <div className="eventDescription">{event.description}</div>
      <div className="eventName">{event.first_name} {event.last_name}</div>
      <div className="eventTime">Time/Date: {event.date_time}</div>
    </div>
  }
  function renderEvents () {
    return state.events.map((event) => renderEvent(event))
  }
  return <div className="events">
      <h1 className="inAppHeading">Events</h1>
      {state.createEventToggle
        ?renderCreateEvent(state, dispatch)
        : <button id="createEventButton" onClick={() => dispatch({type: 'TOGGLE', payload: 'createEventToggle'})}>New Event</button>
      }
      {renderEvents()}
    </div>
}
