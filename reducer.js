const clone = require('clone')

module.exports = (state, action) => {
  var newState = clone(state)
  const {payload, type} = action
  switch (type) {
    case "TOGGLE_LOADING":
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
      return newState
    case 'LOGIN_SUCCESS':
      newState.user = payload.user
      newState.events = payload.events
      newState.currentGroup = payload.currentGroup[0]
      newState.groups = payload.groups
      newState.route = '/bizz'
      newState.view = 'groups'
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
    case 'CHANGE_GROUP':
      newState.currentGroup = payload
      return newState
    case 'RECIEVE_CONTENT':
      newState[payload.content_type] = payload.content
      newState.view = payload.content_type
      return newState
    case 'UPDATE_CREATE_POST':
      newState.createPost[payload.content_type] = payload.content
      return newState
    case 'POST_POST':
      newState.posts = payload
      newState.createPost.is_alert = false
      newState.createPost.content = ''
      newState.createPostToggle = false
      return newState
    case 'GET_POST_RESPONSES':
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
      newState[payload] = !newState[payload]
      return newState
    case 'UPDATE_CREATE_GROUP':
      newState.createGroup[payload.content_type] = payload.content
      return newState
    case 'RECIEVE_GROUP':
      console.log({payload});
      newState.groups.unshift(payload)
      newState.createGroupToggle = false
      return newState
    case 'SELECT_GROUP':
      newState.selectedGroup = payload
      return newState
    case 'RECIEVE_EVENTS':
    console.log({payload});
      newState.RSVPs = payload.RSVPs
      newState.events = payload.events
      newState.view = 'events'
      return newState
    case 'UPDATE_CREATE_EVENT':
      newState.createEvent[payload.content_type] = payload.content
      return newState
    case 'RECIEVE_EVENT':
      newState.events.unshift(payload)
      var keys = Object.keys(newState.createEvent)
      keys.forEach((prop) => prop = null)
      return newState
    case 'SELECT_EVENT':
      newState.selectedEvent = payload
      return newState
    case 'CREATE_RSVP':
      newState.RSVPs = payload.RSVPs
      var change = 1
      if (payload.going == false) change = -1
      newState.events.forEach((event) => {
        if (event.event_id == payload.event_id) {
          event.RSVP_count += change
        }
      })
      return newState
    default:
      return newState
  }
}
