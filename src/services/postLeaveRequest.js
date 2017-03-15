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
       dispatch({type: 'ADMIN_POST_SUCCESS', payload: 'Leave Request Sent'})
      }
      else dispatch({ type: 'CHANGE_VIEW', payload: 'leaveRequests' })
    })
}
