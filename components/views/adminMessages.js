import React from 'react'
import togglePin from '../../services/togglePinnedAdminMessage'

module.exports = (state, dispatch) => {
  function selectAdminItem(content, content_type) {
    dispatch({type: 'SELECT_ADMIN_ITEM', payload: {content, content_type}})
  }
  function pinButton(message) {
    if (message.is_pinned) {
      return <button>Unpin</button>
    } return <button onClick={() => togglePin(message, dispatch)} >Pin</button>
  }
  function renderMore(message) {
    console.log({message, state});
    if (message.message_id === state.adminSelected.adminMessage) {
      return <div>
        <div className="adminMessageContent">{message.content}</div>
        {pinButton(message)}
        <button>Delete</button>
      </div>
    } else {
      var snippet = message.content.slice(0, 14)
      if (message.content.length > 14) snippet += ' (...)'
      return <div className="adminMessageContent">{snippet}</div>
    }
  }
  function renderAdminMessage(message) {
    return <div onClick={() => selectAdminItem(message.message_id, 'adminMessage')} className="adminMessage">
      <div className="adminMessageFrom">{message.first_name} {message.last_name}</div>
      <div className="adminMessageGroup">{message.group_name}</div>

      <div className="adminMessageCreated">{message.message_created_at}</div>
      {renderMore(message)}
    </div>
  }
  function renderSortedMessages(messages) {
    return messages.map((message) => {
      return renderAdminMessage(message)
    })
  }
  function renderAdminMessages() {
    var pinned = []
    var unpinned = []
    state.admin.adminMessages.forEach((message) => {
      if (message.is_pinned) pinned.push(message)
      else unpinned.push(message)
    })
    return <div className="adminMessages">
        <div className="pinnedAdminMessages">
          <p className="pinnedAdminMessagesHeader">Pinned</p>
          {renderSortedMessages(pinned)}
        </div>
        <div className="unpinnedAdminMessages">
          <p className="unpinnedAdminMessagesHeader">Unpinned</p>
          {renderSortedMessages(unpinned)}
        </div>
    </div>
  }
    return renderAdminMessages()
}
