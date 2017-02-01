import request from 'superagent'

module.exports = ({loginDetails}, dispatch) => {
  const {username, password} = loginDetails
  request
    .post(`${url}users/login`)
    .send({username, password})
    .withCredentials()
    .end((err, res) => {
      if (!err) {
       dispatch({ type: 'LOGIN_SUCCESS', payload: res.body })
     }
     else dispatch({ type: 'CHANGE_ROUTE', payload: '/' })
    })
}
