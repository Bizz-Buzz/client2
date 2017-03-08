import React from 'react'


module.exports = (state, dispatch) => {
  return <div className="groups">
    <button onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'sickLeave'})}>Sick Leave</button>
    <button onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'annualLeave'})}>Annual Leave</button>
    <button onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'emergency'})}>Emergency</button>
    <button onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'messageAdmin'})}>Message Admins</button>
  </div>
}
