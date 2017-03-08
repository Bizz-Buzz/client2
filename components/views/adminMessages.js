import React from 'react'

module.exports = (state, dispatch) => {
  function renderAdminMessage(message) {
    return <div className="adminMessage">
      <div className="adminMessageFrom">{message.first_name} {message.last_name}</div>
      <div className="adminMessageGroup">{message.group_name}</div>
      <div className="adminMessageContent">{message.content}</div>
      <div className="adminMessageCreated">{message.message_created_at}</div>
    </div>
  }
  function renderAdminMessages() {
    return state.admin.adminMessages.map((message) => {
      return renderAdminMessage(message)
    })
  }
  return <div>
    {renderAdminMessages()}
  </div>
}
