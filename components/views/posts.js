import React from 'react'
import renderCreatePost from './createPost'
import requestPostResponses from '../../services/requestPostRespones'
import postPostResponse from '../../services/postPostResponse'

module.exports = (state, dispatch) => {
  function renderPostResponseForm() {
    return <div className="postResponseInput">
      <input type="text" className="detsInput postInput" onChange={(e) => dispatch({type: "UPDATE_RESPONSE", payload: e.target.value})}placeholder="response"/>
      {state.postResponse.length < 200
      ? <button className="createResButtons rightButton" onClick={() => postPostResponse(state, dispatch)}>Respond</button>
      : <p className="authErrorMsg">Too many characters</p>}
    </div>
  }
  function renderResponse(response) {
    return <div className="postResponse">
      {response.response_content} - {response.first_name} {response.last_name}
    </div>
  }
  function renderRespones(post) {
    if (state.selectedPost == post.post_id) {
      return <div className="postResponses">
        {renderPostResponseForm()}
        {state.postResponses.map((response) => renderResponse(response))}
      </div>
    } else return <div className="postRespones">{post.responses} responses</div>
  }
  function renderPost(post) {
    return <div className="post" onClick={() => requestPostResponses(post.post_id, state, dispatch)}>
      <div className="postContent">{post.content}</div>
      <div className="postedBy">{post.first_name} {post.last_name}</div>
      <div className="postedAt">{post.post_created_at}</div>
      {renderRespones(post)}
    </div>
  }
  function renderPosts() {
    return state.posts.map((post) => renderPost(post))
  }
  return <div>
    {state.createPostToggle
      ?renderCreatePost(state, dispatch)
      : <button className="createPostButton" onClick={() => dispatch({type: 'TOGGLE', payload: 'createPostToggle'})}>New Post</button>
    }
    {renderPosts()}
  </div>
}
