import React from 'react'

module.exports = (state, dispatch) => {
	function updateCreateGroupDetails(content, content_type) {
    dispatch({type: 'UPDATE_CREATE_GROUP', payload: {content, content_type}})
  }
  return <div className="createGroup">
    <input className="detsInput groupInput" onChange={(e) => updateCreateGroupDetails(e.taget.value, 'groupName')} type="text" placeholder="Group Name"/>
    <input className="detsInputLast groupInput" onChange={(e) => updateCreateGroupDetails(e.taget.value, 'groupDescription')} type="text" placeholder="Group Description"/>
    <div className="createGroupButtonsDiv">
      <button className="createGroupButtons leftButton" onClick={() => dispatch({type: 'TOGGLE', payload: 'createGroupToggle'})}>Cancel</button>
      <button className="createGroupButtons rightButton">Create</button>
    </div>
  </div>
}
