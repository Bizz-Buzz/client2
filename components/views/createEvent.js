import React from 'react'

module.exports = (state, dispatch) => {

  return <div className="createEvent">
    <input type="text" placeholder="Event Title"/>
    <input type="texy" placeholder="Event Description"/>
    <button >Create Event</button>
    <button onClick={() => dispatch({type: 'TOGGLE', payload: 'createEventToggle'})}>Cancel</button>
  </div>
}
