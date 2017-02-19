import request from 'superagent'
import url from '../requestUrl'

module.exports = (post_id, state, dispatch) => {
  if (post_id != state.selectedPost) {
    request
      .get(`${url}posts/responses`)
  		.query({post_id})
      .withCredentials()
      .end((err, res) => {
        if (!err) {
          console.log("responses", res);
          dispatch({type: "GET_POST_RESPONSES", payload: {post_id, responses: res.body}})
        } else console.log({err});
      })
  }
}
