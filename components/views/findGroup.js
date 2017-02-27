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
  function renderMore (group) {
    if (state.selectedGroup == group.group_id) {
      return <div>
        <p className="group_description">{group.group_description}</p>
        {renderRequestButtons(group)}
      </div>
    } else return

  }
  function renderGroup (group) {
    return <div className="group" onClick={() => dispatch({type: 'SELECT_GROUP', payload: group.group_id})}>
      <p className="groupName">{group.group_name}</p>
      {renderMore(group)}
      <p className="groupMemberCount">{group.member_count} members</p>
    </div>
  }
  function renderGroups () {
    if (state.findGroup.length > 0) {
      return state.findGroup.map(group => renderGroup(group))
    } else {
      <p>There are no groups to join</p>
    }

  }
  return <div className="findGroup">
    {renderGroups()}
  </div>
}
