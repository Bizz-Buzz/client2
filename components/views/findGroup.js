import React from 'react'
import renderCreateGroup from './createGroup'

module.exports = (state, dispatch) => {
  function renderRequestButtons (group) {
    if (group.invite_only) {
      return <div>
        <button className="findGroupButton">Request To Join</button>
      </div>
    } else return <div>
      <button className="findGroupButton">Join Group</button>
    </div>
  }
  return <div className="findGroup">
    Find groups
  </div>
}
