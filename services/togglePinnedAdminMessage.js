import request from 'superagent'
import url from '../requestUrl'

module.exports = (message, dispatch) => {
  request
    .post(`${url}admin/messages/pin`)
    .send(message)
    .withCredentials()
    .end((err, res) => {
      console.log(res);
      if (!err) {
       dispatch({ type: 'TOGGLE_MESSAGE_PINNED', payload: message.message_id })
      }
      else dispatch({ type: 'CHANGE_ROUTE', payload: '/' })
    })
}
