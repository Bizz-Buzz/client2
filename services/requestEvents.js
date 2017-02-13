import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  request
    .get(`${url}events`)
    .withCredentials()
    .end((err, res) => {
      console.log({res});
    })
}
