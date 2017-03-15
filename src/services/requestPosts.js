import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  request
    .get(`${url}posts`)
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        dispatch({type:'RECIEVE_CONTENT', payload: {content: res.body, content_type: 'posts'}})
      } else console.log({err});
    })
}
