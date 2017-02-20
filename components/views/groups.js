import React from 'react'
import renderCreateGroup from './createGroup'

module.exports = (state, dispatch) => {
  function renderGroup (group) {
    return <div className='group'>
			<p className="groupName">{group.group_name}</p>
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
