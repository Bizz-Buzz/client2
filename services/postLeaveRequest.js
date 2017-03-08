import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {

  request
    .post(`${url}admin/leaveRequests/new`)
    .send(state.leaveRequestDetails)
    .withCredentials()
    .end((err, res) => {
      console.log(res);
      if (!err) {
       console.log(res.body);
      }
      else dispatch({ type: 'CHANGE_VIEW', payload: 'leaveRequests' })
    })
}
