import React from 'react'
import postPost from '../../services/postPost'

module.exports = (state, dispatch) => {
  function updatePostDetails(content, content_type) {
    dispatch({type: 'UPDATE_CREATE_POST', payload: {
      content, content_type
    }})
  }
  function renderOption(option) {
    if (option.isAdmin) {
      return <option value={option.group_id}>{option.group_name}</option>
    } else return <p></p>

	}
  function groupHandler() {
		var parentOptions = state.groups.filter((group) => {
			return group.isAdmin
		})
		return <select className="selectParentGroup" onChange={(e) => updatePostDetails(e.target.value, 'group_id')} >
			<option value=" " disabled selected>Group</option>
			{parentOptions.map((option) => renderOption(option))}
		</select>
	}
  function renderAlertOption() {
    if (state.createPost.is_alert) {
      return <p className="postTypeToggleButton alertTypeToggleShow">Alert</p>
    } return <p className="postTypeToggleButton postTypeToggleShow">Post</p>
  }
  function alertHandler() {
		return <div>
			{renderAlertOption()}
			<button className="toggleButton" onClick={() => updatePostDetails(!state.createPost.is_alert, "is_alert")}>Toggle</button>
		</div>
	}
  return <div className="createPost">
    <input type="text" className="detsInput postInput" onChange={(e) => updatePostDetails(e.target.value, 'content')}placeholder="content"/>
    <button className="createPostButtons leftButton" onClick={() => dispatch({type: 'TOGGLE', payload: 'createPostToggle'})}>Cancel</button>
    {alertHandler()}
    {groupHandler()}
    {state.createPost.content.length >= 6
    ? <button className="createPostEnter" onClick={() => postPost(state, dispatch)}>Post</button>
    : <p>Post too short</p>}
  </div>
}
