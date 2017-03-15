import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  request
    .get(`${url}events`)
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        console.log({res});
        dispatch({type:'RECIEVE_EVENTS', payload: res.body})
      } else console.log({err});
    })
}
