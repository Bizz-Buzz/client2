import React from 'react'

module.exports = (state, dispatch) => {
  function renderAdminLeaveRequest(leaveRequest) {
    return <div className="adminLeaveRequest">
      <div className="adminLeaveRequestName">{leaveRequest.first_name} {leaveRequest.last_name}</div>
      <div className="adminLeaveRequestReason">{leaveRequest.leave_reason}</div>
      <div className="adminLeaveRequestGroup">{leaveRequest.group_name}</div>
    </div>
  }
  function renderAdminLeaveRequests() {
    return state.admin.leaveRequests.map(leaveRequest => {
      return renderAdminLeaveRequest(leaveRequest)
    })
  }
  return <div className="adminLeaveRequests">
    {renderAdminLeaveRequests()}
  </div>
}
