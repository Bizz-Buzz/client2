import request from 'superagent'
import url from '../requestUrl'

module.exports = (leaveRequest, dispatch) => {
  request
    .post(`${url}admin/leaveRequests/pin`)
    .withCredentials()
    .send({leaveRequest})
    .end((err, res) => {
      if (!err) {
        console.log({res});
        dispatch({type: 'TOGGLE_REQUEST_PINNED', payload: leaveRequest.request_id})
      } else console.log({err});
    })
}
