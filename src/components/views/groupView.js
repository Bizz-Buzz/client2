import React from 'react'
import renderGroupMembers from './groupMembers'
import renderGroupSettings from './groupSettings'
import renderGroupInvite from './groupInvite'

module.exports = (state, dispatch) => {
  function renderChild () {
    switch (state.groupView) {
      case 'groupSettings':
        return renderGroupSettings(state, dispatch)
      case 'groupInvite':
        return renderGroupInvite(state, dispatch)
      case 'groupMembers':
        return renderGroupMembers(state, dispatch)
      default:
        return renderGroupMembers(state, dispatch)
    }
  }
  function renderGroupHeader () {
    return <div className="adminHeader">
    <button className="goBackButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'groups'})}>Go Back</button>
      <div className="adminBar">
        <span className="adminNavItem" onClick={() => dispatch({type: 'CHANGE_GROUP_VIEW', payload: 'groupMembers'})}>Members</span>
        <span className="adminNavItem" onClick={() => dispatch({type: 'CHANGE_GROUP_VIEW', payload: 'groupInvite'})}>Invite</span>
        <span className="adminNavItem" onClick={() => dispatch({type: 'CHANGE_GROUP_VIEW', payload: 'groupSettings'})}>Settings</span>
      </div>
    </div>
  }
  return <div className="groupView">
    {renderGroupHeader()}
    {renderChild()}
  </div>
}
