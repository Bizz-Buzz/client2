import React from 'react'
import renderCreatePost from './createPost'

module.exports = (state, dispatch) => {
  function renderPost(post) {
    return <div className="post">
      <div className="postedBy">{post.first_name} {post.last_name}</div>
      <div className="postContent">{post.content}</div>
      <div className="postedAt">{post.post_created_at}</div>
    </div>
  }
  function renderPosts() {
    return state.posts.map((post) => renderPost(post))
  }
  return <div>
    {state.createPostToggle
      ?renderCreatePost(state, dispatch)
      : <button onClick={() => dispatch({type: 'TOGGLE', payload: 'createPostToggle'})}>New Post</button>
    }
    {renderPosts()}
  </div>
}
