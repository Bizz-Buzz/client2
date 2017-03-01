import request from 'superagent'
import url from '../requestUrl'

module.exports = ({createEvent}, dispatch) => {
  request
    .post(`${url}events/new`)
    .withCredentials()
    .send(createEvent)
    .end((err, res) => {
      if (!err) {
        console.log({res});
        dispatch({type: 'RECIEVE_EVENT', payload: res.body})
      } else console.log({err});
    })
}
