import React from 'react'
import renderCreatePost from './createPost'
import requestPostResponses from '../../services/requestPostRespones'
import postPostResponse from '../../services/postPostResponse'

module.exports = (state, dispatch) => {
  function renderSearch () {
    return <form className="searchForm">
      <input className="searchInput" onChange={(e) => dispatch({type: 'UPDATE_SEARCH', payload: {search: e.target.value, search_type: 'postsSearch'} })} type="text" placeholder="Search Posts"/>
      <input className="resetSearch" onClick={(e) => dispatch({type: 'UPDATE_SEARCH', payload: {search: null, search_type: 'postsSearch'} })} type="reset" value="Reset"/>
    </form>
  }
  function renderPostResponseForm() {
    return <div className="postResponseInput">
      <input type="text" className="detsInput postInput customClass" onChange={(e) => dispatch({type: "UPDATE_RESPONSE", payload: e.target.value})}placeholder="response"/>
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
    var customClass
    post.is_alert ? customClass = 'alertTypePost post' : customClass = 'postTypePost post'
    return <div className={customClass} onClick={() => requestPostResponses(post.post_id, state, dispatch)}>
      <div className="postDets">
        <div className="postedAt rightButton">{post.post_created_at}</div>
      </div>
      <div className="postContent">{post.content}</div>
      <div className="postedBy">{post.first_name} {post.last_name}</div>
      <div className="postedBy">{post.group_name}</div>
      <div className="postDets">
        {renderRespones(post)}
      </div>
    </div>
  }
  function renderAlerts() {
    var alerts = state.posts.filter((post) => {
      return post.is_alert == true
    })
    return alerts
  }
  function renderPosts() {
    var posts
    if (state.alertsOnly) {
      var alerts = renderAlerts()
      posts = alerts
    }

    if (state.search.postsSearch === '' || !state.search.postsSearch) posts = state.posts
    else posts = state.posts.filter((post) => {
      return (post.group_name.toLowerCase().includes(state.search.postsSearch.toLowerCase() || ''))
      || (post.first_name.toLowerCase().includes(state.search.postsSearch.toLowerCase() || ''))
      || (post.last_name.toLowerCase().includes(state.search.postsSearch.toLowerCase() || ''))
      || (post.content.toLowerCase().includes(state.search.postsSearch.toLowerCase() || ''))
      || (`${post.first_name.toLowerCase()} ${post.last_name.toLowerCase()}`.includes(state.search.postsSearch.toLowerCase() || ''))
    })

    return posts.map((post) => renderPost(post))

  }
  function toggleCreatePost() {
    if (state.createPostToggle) return renderCreatePost(state, dispatch)
    else return <button className="createPostButton" onClick={() => dispatch({type: 'TOGGLE', payload: 'createPostToggle'})}>New Post</button>
  }
  function toggleAlertsOnly() {
    dispatch({type: "TOGGLE", payload: 'alertsOnly'})
  }
  function AlertToggleButton() {
    if (state.alertsOnly) {
      return <button onClick={() => toggleAlertsOnly()}className='createPostButton'>All Posts</button>
    } else return <button onClick={() => toggleAlertsOnly()} className='createPostButton'>Alerts Only</button>
  }

  return <div className="posts">
    {toggleCreatePost()}
    {AlertToggleButton()}
    {renderSearch()}
    {renderPosts()}
  </div>
}
