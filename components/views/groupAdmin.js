import React from 'react'
import renderAdminMessages from './adminMessages.js'
import renderAdminLeaveRequests from './adminLeaveRequests'
import renderAdminEmergency from './adminEmergency'

module.exports = (state, dispatch) => {
  function renderAdminHeader() {
    return <div className="adminHeader">
      <p onClick={() => dispatch({type: 'CHANGE_ADMIN_VIEW', payload: 'adminMessages'})}>Messages ({state.admin.adminMessages.length})</p>
      <p onClick={() => dispatch({type: 'CHANGE_ADMIN_VIEW', payload: 'leaveRequests'})}>Leave ({state.admin.leaveRequests.length})</p>
      <p onClick={() => dispatch({type: 'CHANGE_ADMIN_VIEW', payload: 'emergency'})}>Emergency ({state.admin.emergency.length})</p>
    </div>
  }
  function renderAdminView() {
    switch (state.adminView) {
      case 'leaveRequests':
        return renderAdminLeaveRequests(state, dispatch)
      case 'adminMessages':
        return renderAdminMessages(state, dispatch)
      case 'emergency':
        return renderAdminEmergency(state, dispatch)
      default:
        return renderAdminMessages(state, dispatch)
    }
  }
  return <div className="groupAdmin">
    <button className="toggleButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'admin'})}>Go Back</button>
    {renderAdminHeader()}
    <div className='adminView'>
      {renderAdminView()}
    </div>
  </div>
}
