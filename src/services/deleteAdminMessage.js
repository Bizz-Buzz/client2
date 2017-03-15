import request from 'superagent'
import url from '../requestUrl'

module.exports = (message_id, dispatch) => {
  console.log({message_id});
  request
    .post(`${url}admin/messages/delete`)
    .withCredentials()
    .send({message_id})
    .end((err, res) => {
      if (!err) {
        console.log({res});
        dispatch({type: 'DELETE_ADMIN_MESSAGE', payload: message_id})
      } else console.log({err});
    })
}
