import React from 'react'

module.exports = (state, dispatch) => {

  return <div className="createEvent">
    <input className="detsInput eventInput" type="text" placeholder="Event Title"/>
    <input className="detsInputLast eventInput" type="text" placeholder="Event Description"/>
    <div className="createEventButtonsDiv">
      <button className="createEventButtons leftButton" onClick={() => dispatch({type: 'TOGGLE', payload: 'createEventToggle'})}>Cancel</button>
      <button className="createEventButtons rightButton">Create</button>
    </div>
  </div>
}
