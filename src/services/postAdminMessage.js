import request from 'superagent'
import url from '../requestUrl'

module.exports = ({adminMessageDetails}, dispatch) => {
  request
    .post(`${url}admin/messages/new`)
    .withCredentials()
    .send(adminMessageDetails)
    .end((err, res) => {
      if (!err) {
        console.log({res});
        dispatch({type: 'ADMIN_POST_SUCCESS', payload: 'Admin Message Sent'})
      } else console.log({err});
    })
}
