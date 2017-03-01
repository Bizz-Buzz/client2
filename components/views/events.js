import React from 'react'
import renderCreateEvent from './createEvent'
import postRSVP from '../../services/postRSVP'
import dateTime from '../../services/dateTime'

module.exports = (state, dispatch) => {
  function renderSearch () {
    return <form>
      <input onChange={(e) => dispatch({type: 'UPDATE_SEARCH', payload: {search: e.target.value, search_type: 'eventsSearch'} })} type="text" placeholder="Search posts"/>
      <input type="reset" value="Reset"/>
    </form>
  }
  function renderRsvpButtons (event) {
    var RSVP = state.RSVPs.find((RSVP) => {
      return RSVP.event_id == event.event_id
    })
    console.log({RSVP});
    if (RSVP) {
      if (RSVP.going == true) {
        return <div className="eventButtons">
          <button onClick={() => postRSVP(event.event_id, false, dispatch, -1)}>No Longer Attending</button>
        </div>
      } else {
        return <div className="eventButtons">
          <button onClick={() => postRSVP(event.event_id, true, dispatch, 1)}>Can Attend</button>
        </div>
      }
    } else {
      return <div className="eventButtons">
        <button onClick={() => postRSVP(event.event_id, true, dispatch, 1)}>Attending</button>
        <button onClick={() => postRSVP(event.event_id, false, dispatch, 0)}>Not Attending</button>
      </div>
    }
    console.log({RSVP});
  }
  function renderMore (event) {
    return <div className="eventSelected">
      <div className="eventDescription">{event.description}</div>
      {renderRsvpButtons(event)}
      <div className="eventRsvpCount">{event.RSVP_count} attending</div>
    </div>
  }
  function renderDate (event) {
    var syntax = 'th'
    if (event.day_id === 1) syntax = 'st'
    else if (event.day_id === 2) syntax = 'nd'
    else if (event.day_id === 3) syntax = 'rd'

    return <div className="eventDate">{`${(event.day_id).toString() + syntax} ${dateTime.months[event.month_id].name} ${event.year_id}`}</div>
  }
  function renderTime (event) {
    var minutes = event.minute_id
    if (minutes < 10) minutes = `0${minutes.toString()}`
    var hours = event.hour_id
    if (hours < 10) hours = `0${hours.toString()}`
    return <div className="eventTime">{`${hours} : ${minutes}`}</div>
  }
  function renderDateTime (event) {

    return <div className="eventDateTime">
      {renderDate(event)}
      {renderTime(event)}
    </div>
  }
  function renderEvent (event) {
    return <div onClick={() => dispatch({type: 'SELECT_EVENT', payload: event.event_id})} className='event'>
      <div className="eventTitle">{event.title}</div>
        {renderDateTime(event)}
        {state.selectedEvent == event.event_id
          ? renderMore(event)
          : ''
        }
      <div className="eventName">{event.first_name} {event.last_name}</div>
    </div>
  }
  function renderEvents () {
    var events
    if (state.search.eventsSearch === '' || !state.search.eventsSearch) events = state.events
    else events = state.events.filter((event) => {
      return (event.title.toLowerCase().includes(state.search.eventsSearch.toLowerCase() || ''))
      || (event.first_name.toLowerCase().includes(state.search.eventsSearch.toLowerCase() || ''))
      || (event.last_name.toLowerCase().includes(state.search.eventsSearch.toLowerCase() || ''))
      || (event.description.toLowerCase().includes(state.search.eventsSearch.toLowerCase() || ''))
      || (`${event.first_name.toLowerCase()} ${event.last_name.toLowerCase()}`.includes(state.search.eventsSearch.toLowerCase() || ''))
    })

    return events.map((event) => renderEvent(event))
  }
  return <div className="events">
      {state.createEventToggle
        ?renderCreateEvent(state, dispatch)
        : <button className="createEventButton" onClick={() => dispatch({type: 'TOGGLE', payload: 'createEventToggle'})}>New Event</button>
      }
      <div className="eventSorting">Today</div>
      {renderSearch()}
      {renderEvents()}
    </div>
}
