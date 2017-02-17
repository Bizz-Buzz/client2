import React from 'react'
import postPost from '../../services/postPost'

module.exports = (state, dispatch) => {
  function updatePostDetails(content) {
    dispatch({type: 'UPDATE_CREATE_POST', payload: content})
  }
  return <div className="createPost">
    <input type="text" onChange={(e) => updatePostDetails(e.target.value)}placeholder="content"/>
    <button onClick={() => postPost(state, dispatch)}>Post</button>
    <button onClick={() => dispatch({type: 'TOGGLE', payload: 'createPostToggle'})}>Cancel</button>
  </div>
}
