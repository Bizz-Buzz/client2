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
    case 'TOGGLE':
      newState[payload] = !newState[payload]
      return newState
    default:
      return newState
  }
}
