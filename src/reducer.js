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
      newState.currentGroup.group = payload.currentGroup[0]
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
      newState.currentGroup.group = payload
      return newState
    case 'UPDATE_SEARCH':
      newState.search[payload.search_type] = payload.search
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
      newState.createEvent = {
        day_id: null,
        month_id: null,
        year_id: null,
        hour_id: null,
        minute_id: null,
        group_id: null,
        title: null,
        description: null
      }
      newState.createEventToggle = false
      return newState
    case 'SELECT_EVENT':
      newState.selectedEvent = payload
      return newState
    case 'CREATE_RSVP':
      newState.RSVPs = payload.RSVPs
      newState.events.forEach((event) => {
        if (event.event_id == payload.event_id) {
          event.RSVP_count += payload.change
        }
      })
      return newState
    case 'UPDATE_LEAVE_REQUEST_DETAILS':
      newState.leaveRequestDetails[payload.content_type] = payload.content
      return newState
    case 'UPDATE_ADMIN_MESSAGE_DETAILS':
      newState.adminMessageDetails[payload.content_type] = payload.content
      return newState
    case 'ADMIN_POST_SUCCESS':
      newState.adminMessageDetails = {
        group_id: null,
        content: null
      }
      newState.leaveRequestDetails = {
        group_id: null,
        leave_reason: null,
        year_id: null,
        month_id: null,
        day_id: null,
        leave_days: null,
        is_sick_leave: true
      }
      newState.successAlert = payload
      newState.view = 'adminSuccess'
      return newState
    case 'RECIEVE_ADMIN_DATA':
      newState.admin = payload
      newState.view = 'groupAdmin'
      return newState
    case 'CHANGE_ADMIN_VIEW':
      newState.adminView = payload
      return newState
    case 'SELECT_ADMIN_ITEM':
      newState.adminSelected[payload.content_type] = payload.content
      return newState
    case 'TOGGLE_MESSAGE_PINNED':
      newState.admin.adminMessages.forEach((message) => {
        if (message.message_id === payload) {
          message.is_pinned = !message.is_pinned
        }
      })
      return newState
    case 'DELETE_ADMIN_MESSAGE':
      newState.admin.adminMessages.forEach((message, index) => {
        if (message.message_id === payload) newState.admin.adminMessages.splice(index, 1)
      })
      return newState
    case 'TOGGLE_REQUEST_PINNED':
      console.log("toggling request id", payload);
      newState.admin.leaveRequests.forEach((leaveRequest) => {
        if (leaveRequest.request_id === payload) {
          leaveRequest.is_pinned = !leaveRequest.is_pinned
        }
      })
      return newState
    case 'DELETE_LEAVE_REQUEST':
      newState.admin.leaveRequests.forEach((leaveRequest, index) => {
        if (leaveRequest.request_id === payload) newState.admin.leaveRequests.splice(index, 1)
      })
      return newState
    case 'VIEW_GROUP':
      newState.currentGroup = payload
      newState.view = 'groupView'
      return newState
    case 'CHANGE_GROUP_VIEW':
      newState.groupView = payload
      return newState
    case 'TOGGLE_SEND_INVITE':
      newState.sendInviteToggle = !newState.sendInviteToggle
      return newState
    default:
      return newState
  }
}
