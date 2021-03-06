import React from 'react'
import postGroup from '../../services/postGroup'

module.exports = (state, dispatch) => {
	function updateCreateGroupDetails(content, content_type) {
    dispatch({type: 'UPDATE_CREATE_GROUP', payload: {content, content_type}})
  }
	function renderGroupInviteOption() {
		if (state.createGroup.invite_only) return <p>Invite Only</p>
		return <p>Open Group</p>
	}
	function renderOption(option) {
		return <option value={option.group_id}>{option.group_name}</option>
	}
	function selectParentGroup() {
		var parentOptions = state.groups.filter((group) => {
			return group.isAdmin
		})
		return <select className="selectParentGroup" onChange={(e) => updateCreateGroupDetails(e.target.value, 'parent_id')} >
			<option value=" " disabled selected>Parent Group</option>
			{parentOptions.map((option) => renderOption(option))}
		</select>
	}
	function inviteConditionHandler() {
		return <div>
			{renderGroupInviteOption()}
			<button className="toggleButton" onClick={() => updateCreateGroupDetails(!state.createGroup.invite_only, "invite_only")}>Toggle</button>
		</div>
	}
  return <div className="createGroup">
    <input className="detsInput groupInput" onChange={(e) => updateCreateGroupDetails(e.target.value, 'group_name')} type="text" placeholder="Group Name"/>
    <input className="detsInputLast groupInput" onChange={(e) => updateCreateGroupDetails(e.target.value, 'group_description')} type="text" placeholder="Group Description"/>
		{inviteConditionHandler()}
		{selectParentGroup()}
    <div className="createGroupButtonsDiv">
      <button className="createGroupButtons leftButton" onClick={() => dispatch({type: 'TOGGLE', payload: 'createGroupToggle'})}>Cancel</button>
      <button className="createGroupButtons rightButton" onClick={() => postGroup(state, dispatch)}>Create</button>
    </div>
  </div>
}
