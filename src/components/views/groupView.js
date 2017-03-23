import React from 'react'
import renderGroupMembers from './groupMembers'
import renderGroupSettings from './groupSettings'
import renderGroupInvite from './groupInvite'

module.exports = (state, dispatch) => {
  function renderChild () {
    switch (state.groupView) {
      case 'groupSettings':
        return renderGroupSettings()
      case 'groupInvite':
        return renderGroupInvite()
      case 'groupMembers':
        return renderGroupMembers()
      default:
        return renderGroupMembers()
    }
  }
  function renderGroupHeader () {
    return <div className="groupHeader">
    <button className="goBackButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'groups'})}>Go Back</button>
      <div className="adminBar">
        <span className="groupNavItem" onClick={() => dispatch({type: 'CHANGE_GROUP_VIEW', payload: 'groupMembers'})}>Members</span>
        <span className="groupNavItem" onClick={() => dispatch({type: 'CHANGE_GROUP_VIEW', payload: 'groupInvite'})}>Invite</span>
        <span className="groupNavItem" onClick={() => dispatch({type: 'CHANGE_GROUP_VIEW', payload: 'groupSettings'})}>Settings</span>
      </div>
    </div>
  }
  return <div className="groupView">
    {renderGroupHeader()}
    {renderChild()}
    this is the group view hahahhahaha
  </div>
}
