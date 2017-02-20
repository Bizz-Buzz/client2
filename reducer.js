const clone = require('clone')

module.exports = (state, action) => {
  var newState = clone(state)
  const {payload, type} = action
  switch (type) {
    case "TOGGLE_LOADING":
      console.log("loading toggled");
      newState.isLoading = !newState.isLoading
      return newState
    case "AUTH_ERROR":
      newState.authError = payload
      return newState
    case 'UPDATE_LOGIN_DETAILS':
      newState.loginDetails[payload.change] = payload.value
      return newState
    case 'UPDATE_SIGNUP_DETAILS':
      newState.signupDetails[payload.change] = payload.value
      console.log(newState.signupDetails);
      return newState
    case 'LOGIN_SUCCESS':
      newState.user = payload.user
      newState.events = payload.events
      newState.route = '/bizz'
      newState.view = 'events'
      return newState
    case 'SIGNUP_SUCCESS':
      newState.route = '/login'
      newState.authError = "Signup Successful, please log in"
      return newState
    case 'CHANGE_ROUTE':
      newState.route = payload
      newState.authError = null
      return newState
    case 'CHANGE_VIEW':
      newState.view = payload
      return newState
    case 'RECIEVE_CONTENT':
      newState[payload.content_type] = payload.content
      newState.view = payload.content_type
      return newState
    case 'UPDATE_CREATE_POST':
      newState.createPost = payload
      return newState
    case 'POST_POST':
      newState.posts.unshift({
        post_id: payload,
        content: newState.createPost,
        first_name: newState.user.first_name,
        last_name: newState.user.last_name,
        post_created_at: 'Just Now',
        responses: 0
      })
      newState.createPost = ''
      newState.createPostToggle = false
      return newState
    case 'GET_POST_RESPONSES':
      console.log({payload});
      newState.selectedPost = payload.post_id
      newState.postResponses = payload.responses
      return newState
    case 'UPDATE_RESPONSE':
      newState.postResponse = payload
      return newState
    case 'NEW_POST_RESPONSE':
      newState.postResponses.unshift({
        first_name: newState.user.first_name,
        last_name: newState.user.last_name,
        post_response_id: payload,
        response_content: newState.postResponse,
        post_id: newState.selectedPost
      })
      newState.posts.forEach((post) => {
        if (post.post_id == newState.selectedPost) post.responses++
      })
      newState.postResponse = ''
      return newState
    case 'TOGGLE':
      console.log('toggling', payload);
      newState[payload] = !newState[payload]
      return newState
    case 'UPDATE_CREATE_GROUP':
      newState.createGroup[payload.content_type] = payload.content
      return newState
    default:
      return newState
  }
}
