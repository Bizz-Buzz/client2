import React from 'react'
import postAdminMessage from '../../services/postAdminMessage'

module.exports = (state, dispatch) => {
  function updateAdminMessageDetails(content, content_type) {
    dispatch({type: 'UPDATE_ADMIN_MESSAGE_DETAILS', payload: {content, content_type}})
  }
  function renderGroupOption(group) {
    return <option value={group.group_id}>{group.group_name}</option>
  }
  function renderGroupSelect() {
    return <select className="selectParentGroup" onChange={(e) => updateAdminMessageDetails(e.target.value, 'group_id')}>
      <option selected disabled>Select Group</option>
      {state.groups.map((group) => renderGroupOption(group))}
    </select>
  }
  function postAdminMessageFunction(e) {
    e.preventDefault()
    postAdminMessage(state, dispatch)
  }
  function renderSendAdminMessage() {
    if (!state.adminMessageDetails.content || !state.adminMessageDetails.group_id) {
      return <div className="authErrorMsg pleaseSelectAllError">Please fill in all fields</div>
    } else return <button className="toggleButton" onClick={(e) => postAdminMessage(state, dispatch)}>Send Message</button>
  }

  return <div className="messageAdminForm">
    <button className="goBackButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'admin'})}>Back</button>
    <div>
      {renderGroupSelect()}
      <input className="detsInput messageAdminDets" onChange={(e) => updateAdminMessageDetails(e.target.value, 'content')} type="text" placeholder="message"></input>
      {renderSendAdminMessage()}
    </div>
  </div>
}
