import React from 'react'
import renderAdminMessages from './adminMessages.js'
import renderAdminLeaveRequests from './adminLeaveRequests'

module.exports = (state, dispatch) => {
  function renderAdminHeader() {
    return <div className="adminHeader">
      <p onClick={() => dispatch({type: 'CHANGE_ADMIN_VIEW', payload: 'adminMessages'})}>Messages ({state.admin.adminMessages.length})</p>
      <p onClick={() => dispatch({type: 'CHANGE_ADMIN_VIEW', payload: 'leaveRequests'})}>Leave ({state.admin.leaveRequests.length})</p>
      <p>Emergency ({state.admin.emergency.length})</p>
    </div>
  }
  function renderAdminView() {
    switch (state.adminView) {
      case 'leaveRequests':
        return renderAdminLeaveRequests(state, dispatch)
      case 'adminMessages':
        return renderAdminMessages(state, dispatch)
      default:
        return renderAdminMessages(state, dispatch)
    }
  }
  return <div>
    {renderAdminHeader()}
    <div className='adminView'>
      {renderAdminView()}
    </div>
  </div>
}
