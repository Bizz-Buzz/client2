import React from 'react'
import renderCreateGroup from './createGroup'
import requestUnjoinedGroups from '../../services/requestFindGroups'

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
        <button>Switch Group</button>
      </div>
    } else return

  }
  function renderGroup (group) {
    return <div className='group' onClick={() => dispatch({type: 'SELECT_GROUP', payload: group.group_id})}>
			<p className="groupName">{group.group_name}</p>
      {renderMore(group)}
			<p className="groupMemberCount">{group.member_count} members</p>
    </div>
  }
  function renderGroups () {
    return state.groups.map((group) => renderGroup(group))
  }
  return <div className="groups">
			<button className="findGroupButton" onClick={() => requestUnjoinedGroups(state, dispatch)}>Find Groups</button>

			{state.createGroupToggle
	      ? renderCreateGroup(state, dispatch)
	      : <button className="createGroupButton" onClick={() => dispatch({type: 'TOGGLE', payload: 'createGroupToggle'})}>New Group</button>
	    }
      {renderGroups()}
  </div>
}
