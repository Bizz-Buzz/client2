import React from 'react'
import renderAdminMessages from './adminMessages.js'
import renderAdminLeaveRequests from './adminLeaveRequests'
import renderAdminEmergency from './adminEmergency'

module.exports = (state, dispatch) => {
  function renderAdminHeader() {
    return <div className="adminHeader">
    <button className="goBackButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'admin'})}>Go Back</button>
      <div className="adminBar">
        <span className="adminNavItem" onClick={() => dispatch({type: 'CHANGE_ADMIN_VIEW', payload: 'adminMessages'})}>Messages ({state.admin.adminMessages.length})</span>
        <span className="adminNavItem" onClick={() => dispatch({type: 'CHANGE_ADMIN_VIEW', payload: 'leaveRequests'})}>Leave ({state.admin.leaveRequests.length})</span>
        <span className="adminNavItem" onClick={() => dispatch({type: 'CHANGE_ADMIN_VIEW', payload: 'emergency'})}>Emergency ({state.admin.emergency.length})</span>
      </div>
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
    {renderAdminHeader()}
    <div className='adminView'>
      {renderAdminView()}
    </div>
  </div>
}
