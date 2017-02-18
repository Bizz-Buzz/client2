import request from 'superagent'
import url from '../requestUrl'

module.exports = (post_id, state, dispatch) => {
  request
    .get(`${url}posts/responses`)
		.query({post_id: state.post_id})
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        dispatch({type: "GET_POST_RESPONES", payload: {post_id, responses: res.body}})
      } else console.log({err});
    })
}
