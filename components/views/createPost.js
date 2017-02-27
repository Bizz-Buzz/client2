import React from 'react'
import postPost from '../../services/postPost'

module.exports = (state, dispatch) => {
  function updatePostDetails(content, content_type) {
    dispatch({type: 'UPDATE_CREATE_POST', payload: {
      content, content_type
    }})
  }
  function renderAlertOption() {
    if (state.createPost.is_alert) {
      return <p>Alert</p>
    } return <p>Post</p>
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
    {state.createPost.content.length > 10
    ? <button className="createPostButtons rightButton" onClick={() => postPost(state, dispatch)}>Post</button>
    : <p>Post too short</p>}

  </div>
}
