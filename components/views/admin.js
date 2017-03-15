import React from 'react'
import requestAdminData from '../../services/requestAdminData'

module.exports = (state, dispatch) => {
  // function renderGroupAdmin() {
  //   var groups = state.groups.filter((group) => {
  //     return group.isAdmin
  //   })
  //   console.log({groups});
  //   if (groups.length != 0) {
  //     return <button className="messageAdminsButton" onClick={() => requestAdminData(state, dispatch)}>Group Admin</button>
  //   }
  // }
  // return <div className="communication">
  //   <button className="leaveRequestButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'requestLeave'})}>Request Leave</button>
  //   <button className="emergencyButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'emergency'})}>Emergency</button>
  //   <button className="messageAdminsButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'messageAdmin'})}>Message Admins</button>
  //   {renderGroupAdmin()}
  // </div>
}
