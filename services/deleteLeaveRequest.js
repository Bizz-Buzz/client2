import request from 'superagent'
import url from '../requestUrl'

module.exports = (request_id, dispatch) => {
  console.log({request_id});
  request
    .post(`${url}admin/leaveRequests/delete`)
    .withCredentials()
    .send({request_id})
    .end((err, res) => {
      if (!err) {
        console.log({res});
        dispatch({type: 'DELETE_LEAVE_REQUEST', payload: request_id})
      } else console.log({err});
    })
}
