import React from 'react'
import postPost from '../../services/postPost'

module.exports = (state, dispatch) => {
  function updatePostDetails(content) {
    dispatch({type: 'UPDATE_CREATE_POST', payload: content})
  }
  return <div className="createPost">
    <input type="text" className="detsInput postInput" onChange={(e) => updatePostDetails(e.target.value)}placeholder="content"/>
    <button className="createPostButtons leftButton" onClick={() => postPost(state, dispatch)}>Post</button>
    <button className="createPostButtons rightButton" onClick={() => dispatch({type: 'TOGGLE', payload: 'createPostToggle'})}>Cancel</button>
  </div>
}
