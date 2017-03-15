import request from 'superagent'
import url from '../requestUrl'

module.exports = ({loginDetails}, dispatch) => {
  console.log({loginDetails});
  const {username, password} = loginDetails
  console.log("sending login");
  request
    .post(`${url}users/login`)
    .send({username, password})
    .withCredentials()
    .end((err, res) => {
      console.log(res);
      if (!err) {
       dispatch({ type: 'LOGIN_SUCCESS', payload: res.body })
      }
      else dispatch({ type: 'CHANGE_ROUTE', payload: '/' })
    })
}
