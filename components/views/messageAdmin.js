import React from 'react'


module.exports = (state, dispatch) => {
  function updateAdminMessageDetails(content, content_type) {
    dispatch({type: 'UPDATE_ADMIN_MESSAGE_DETAILS', payload: {content, content_type}})
  }
  function renderGroupOption(group) {
    return <option value={group.group_id}>{group.group_name}</option>
  }
  function renderGroupSelect() {
    return <select onChange={(e) => updateAdminMessageDetails(e.target.value, 'group_id')}>
      <option selected disabled>Select Group</option>
      {state.groups.map((group) => renderGroupOption(group))}
    </select>
  }
  function renderSendAdminMessage() {
    if (!state.adminMessageDetails.message || !state.adminMessageDetails.group_id) {
      return <div className="authErrorMsg pleaseSelectAllError">Please fill in all fields</div>
    } else return <button className="toggleButton">Send Message</button>
  }
  return <div className="messageAdminForm">
    <button className="toggleButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'communication'})}>Back</button>
    <div>
      {renderGroupSelect()}
      <input className="detsInput" onChange={(e) => updateAdminMessageDetails(e.target.value, 'message')} type="text" placeholder="message"></input>
      {renderSendAdminMessage()}
    </div>
  </div>
}
