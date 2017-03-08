import React from 'react'
import renderCreateGroup from './createGroup'

module.exports = (state, dispatch) => {
  function renderSearch () {
    return <form className="searchForm">
      <input className="detsInput searchGroups" onChange={(e) => dispatch({type: 'UPDATE_SEARCH', payload: {search: e.target.value, search_type: 'findGroupSearch'} })} type="text" placeholder="Search Groups"/>
      <input className="resetSearch" onClick={(e) => dispatch({type: 'UPDATE_SEARCH', payload: {search: null, search_type: 'findGroupSearch'} })} type="reset" value="Reset"/>
    </form>
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
    var findGroup

    if (state.search.findGroupSearch === '' || !state.search.findGroupSearch) findGroup = state.findGroup
    else findGroup = state.findGroup.filter((group) => {
      return (group.group_name.toLowerCase().includes(state.search.findGroupSearch.toLowerCase() || ''))
      || (group.group_description.toLowerCase().includes(state.search.findGroupSearch.toLowerCase() || ''))
      || (group.member_count >= Number(state.groupsSearch))
    })

    if (state.findGroup.length > 0) {
      return findGroup.map(group => renderGroup(group))
    } else {
      <p>There are no groups to join</p>
    }

  }
  return <div className="findGroup">
    <button className='findGroupButton' onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'groups'})}>Back to Groups</button>
    {renderSearch()}
    {renderGroups()}
  </div>
}
