import request from 'superagent'

module.exports = ({email, password, confirmPassword, first_name, last_name}, dispatch) => {
  console.log({email, password});
  if (!email || !password || !confirmPassword || !first_name || !last_name) {
    dispatch({type: "AUTH_ERROR", payload: "Please fill in all fields"})
  } else if (!email.includes('.') && !email.includes('@')) {
    dispatch({type: "AUTH_ERROR", payload: "Invalid Email"})
  } else if (password != confirmPassword) {
    dispatch({type: "AUTH_ERROR", payload: "Passwords don't match"})
  } else if (password.length < 6) {
    diaptch({type: "AUTH_ERROR", payload: "Password must be 6 characters or longer"})
  } else {
    request
      .post(`${url}users/signup`)
      .send({email, first_name, last_name, password})
      .withCredentials()
      .end((err, res) => {
        if (!err) {
          if (res.body.err) {
            dispatch({ type: 'AUTH_ERROR', payload: res.body.err })
          } else {
            dispatch({type: "SIGNUP_SUCCESS"})
          }
       }
       else dispatch({ type: 'CHANGE_ROUTE', payload: '/' })
      })
  }
}
