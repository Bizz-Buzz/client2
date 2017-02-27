import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  request
    .get(`${url}groups/find`)
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        console.log({res});
				dispatch({type: 'RECIEVE_CONTENT', payload: {content_type: 'findGroup', content: res.body}})
      } else console.log({err});
    })
}
