import React from 'react'
import deleteLeaveRequest from '../../services/deleteLeaveRequest'
import togglePin from '../../services/togglePinnedLeaveRequest'

module.exports = (state, dispatch) => {
  function selectAdminItem(content, content_type) {
    dispatch({type: 'SELECT_ADMIN_ITEM', payload: {content, content_type}})
  }
  function pinButton(leaveRequest) {
    if (leaveRequest.is_pinned) {
      return <button className="toggleButton" onClick={() => togglePin(leaveRequest, dispatch)}>Unpin</button>
    } return <button className="toggleButton" onClick={() => togglePin(leaveRequest, dispatch)}>Pin</button>
  }
  function renderMore(leaveRequest) {
    if (leaveRequest.request_id === state.adminSelected.leaveRequest) {
      return <div>
        <div className="adminLeaveRequestReason">{leaveRequest.leave_reason}</div>
        {pinButton(leaveRequest)}
        <button className="toggleButton" onClick={() => deleteLeaveRequest(leaveRequest.request_id, dispatch)}>Delete</button>
      </div>
    }
  }
  function renderAdminLeaveRequest(leaveRequest) {
    return <div onClick={() => selectAdminItem(leaveRequest.request_id, 'leaveRequest')} className="adminLeaveRequest">
      <div className="adminLeaveRequestName">{leaveRequest.first_name} {leaveRequest.last_name}</div>
      {renderMore(leaveRequest)}
      <div className="adminLeaveRequestGroup">{leaveRequest.group_name}</div>

    </div>
  }
  function renderSortedAdminLeaveRequests(leaveRequests) {
    return leaveRequests.map(leaveRequest => {
      return renderAdminLeaveRequest(leaveRequest)
    })
  }
  function renderAdminLeaveRequests() {
    var pinned = []
    var unpinned = []
    state.admin.leaveRequests.forEach((leaveRequest) => {
      if (leaveRequest.is_pinned) pinned.push(leaveRequest)
      else unpinned.push(leaveRequest)
    })
    return <div className="adminLeaveRequests">
        <div className="pinnedLeaveRequests">
          <p className="pinnedLeaveRequestsHeader">Pinned ({pinned.length})</p>
          {renderSortedAdminLeaveRequests(pinned)}
        </div>
        <div className="unpinnedLeaveRequests">
          <p className="unpinnedLeaveRequestsHeader">Unpinned ({unpinned.length})</p>
          {renderSortedAdminLeaveRequests(unpinned)}
        </div>
    </div>
  }
  return renderAdminLeaveRequests()
}
