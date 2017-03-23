import request from 'superagent'
import url from '../requestUrl'

module.exports = (data, dispatch) => {
  console.log("is this even being called");
  request
    .post(`${url}group/invites/incoming/new`)
    .withCredentials()
    .send(data)
    .end((err, res) => {
      if (!err) {
        console.log({res});
      } else console.log({err});
    })
}
