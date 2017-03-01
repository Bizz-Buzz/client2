import request from 'superagent'
import url from '../requestUrl'

module.exports = (event_id, going, dispatch, change) => {
  request
    .post(`${url}events/RSVP/new`)
    .send({event_id, going})
    .withCredentials()
    .end((err, res) => {
      console.log(res);
      if (!err) {
       	dispatch({type: 'CREATE_RSVP', payload: {RSVPs: res.body, event_id, change}})
      }
    })
}
