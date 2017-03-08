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
    return <select onChange={(e) => updateAdminMessageDetails(e.target.value, 'group_id')}>
      <option selected disabled>Select Group</option>
      {state.groups.map((group) => renderGroupOption(group))}
    </select>
  }
  function postAdminMessageFunction(e) {
    postAdminMessage(state, dispatch)
  }
  function renderSendAdminMessage() {
    if (!state.adminMessageDetails.content || !state.adminMessageDetails.group_id) {
      return <div className="authErrorMsg pleaseSelectAllError">Please fill in all fields</div>
    } else return <button onClick={(e) => postAdminMessageFunction(e)}>Send Message</button>
  }
<<<<<<< HEAD

  return <div className="groups">
    <button className="toggleButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'admin'})}>Back</button>
    <div className="messageAdmindiv">
      {renderGroupSelect()}
      <input onChange={(e) => updateAdminMessageDetails(e.target.value, 'content')} type="text" placeholder="message"></input>
=======
  return <div className="messageAdminForm">
    <button className="toggleButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'communication'})}>Back</button>
    <div>
      {renderGroupSelect()}
      <input className="detsInput" onChange={(e) => updateAdminMessageDetails(e.target.value, 'message')} type="text" placeholder="message"></input>
>>>>>>> 52e93bbfdc7027fbae463364ef0d0d649bdbfb8f
      {renderSendAdminMessage()}
    </div>
  </div>
}
