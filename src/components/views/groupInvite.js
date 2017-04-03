import React from 'react'

module.exports = (state, dispatch) => {
  function renderInviteForm () {
    return <div className="sendInviteForm">
      Form
    </div>
  }
  function renderInviteButton () {
    return <button className="createPostButton" onClick={() => dispatch({type: 'TOGGLE_SEND_INVITE'})}>Send Invite</button>
  }
  function renderSendInvite () {
    if (state.sendInviteToggle) return renderInviteForm()
    return renderInviteButton()
  }
  return <div className="groupInvite">
    {renderSendInvite()}
  </div>

}
