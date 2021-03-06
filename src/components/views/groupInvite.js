import React from 'react'
import requestUserList from '../../services/requestUserList'

module.exports = (state, dispatch) => {
  function renderInviteForm () {
    return <div className="sendInviteForm">
      Form
    </div>
  }
  function renderInviteButton () {
    return <button className="createPostButton" onClick={() => requestUserList(state, dispatch)}>Send Invite</button>

  }
  function renderSendInvite () {
    if (state.sendInviteToggle) return renderInviteForm()
    return renderInviteButton()
  }
  return <div className="groupInvite">
    {renderSendInvite()}
  </div>

}
