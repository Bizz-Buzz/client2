import request from 'superagent'
import url from '../requestUrl'

module.exports = (message, dispatch) => {
  request
    .post(`${url}admin/messages/pin`)
    .send(message)
    .withCredentials()
    .end((err, res) => {
      console.log(res);
    })
}
