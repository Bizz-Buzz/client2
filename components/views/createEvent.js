import React from 'react'

module.exports = (state, dispatch) => {

  return <div className="createEvent">
    <input className="detsInput eventInput" type="text" placeholder="Event Title"/>
    <input className="detsInputLast eventInput" type="text" placeholder="Event Description"/>
    <button className="createEventButtons leftButton">Create</button>
    <button className="createEventButtons rightButton" onClick={() => dispatch({type: 'TOGGLE', payload: 'createEventToggle'})}>Cancel</button>
  </div>
}
