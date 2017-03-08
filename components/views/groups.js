import React from 'react'
import renderCreateGroup from './createGroup'
import requestUnjoinedGroups from '../../services/requestFindGroups'

module.exports = (state, dispatch) => {
  function renderSearch () {
    return <div className="searchdiv">
      <input className="detsInput searchGroups" onChange={(e) => dispatch({type: 'UPDATE_SEARCH', payload: {search: e.target.value, search_type: 'groupsSearch'} })} type="text" placeholder="Search Groups"/>
      <input className="resetSearch" onClick={(e) => dispatch({type: 'UPDATE_SEARCH', payload: {search: null, search_type: 'groupsSearch'} })} type="reset" value="Reset"/>
    </div>
  }
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
        {state.currentGroup.group_id == group.group_id
        ? <p>This is your current group</p>
        : <button className="changeGroupButton" onClick={() => dispatch({type: 'CHANGE_GROUP', payload: group})}>Switch Group</button>}

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
    var groups

    if (state.search.groupsSearch === '' || !state.search.groupsSearch) groups = state.groups
    else groups = state.groups.filter((group) => {
      return (group.group_name.toLowerCase().includes(state.search.groupsSearch.toLowerCase() || ''))
      || (group.group_description.toLowerCase().includes(state.search.groupsSearch.toLowerCase() || ''))
      || (group.member_count >= Number(state.groupsSearch))
    })

    return groups.map((group) => renderGroup(group))
  }
  return <div className="groups">
			<button className="findGroupButton" onClick={() => requestUnjoinedGroups(state, dispatch)}>Find Groups</button>

			{state.createGroupToggle
	      ? renderCreateGroup(state, dispatch)
	      : <button className="createGroupButton" onClick={() => dispatch({type: 'TOGGLE', payload: 'createGroupToggle'})}>New Group</button>
	    }
      {renderSearch()}
      {renderGroups()}
  </div>
}
