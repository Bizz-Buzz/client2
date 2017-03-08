import React from 'react'


module.exports = (state, dispatch) => {
  return <div className="communication">
    <button className="leaveRequestButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'requestLeave'})}>Request Leave</button>
    <button className="emergencyButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'emergency'})}>Emergency</button>
    <button className="messageAdminsButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'messageAdmin'})}>Message Admins</button>
  </div>
}
