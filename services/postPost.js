import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  request
    .post(`${url}posts/new`)
    .withCredentials()
		.send(state.createPost)
    .end((err, res) => {
      if (!err) {
        console.log({res});
				dispatch({type: 'POST_POST', payload: res.body.post_id})
      } else console.log({err});
    })
}
