import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  request
    .get(`${url}groups`)
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        console.log({res});
				dispatch({type: 'RECIEVE_CONTENT', payload: {content_type: 'groups', content: res.body}})
      } else console.log({err});
    })
}
