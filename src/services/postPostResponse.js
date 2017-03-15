import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  request
    .post(`${url}posts/responses`)
		.send({post_id: state.selectedPost, response_content: state.postResponse})
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        dispatch({type: "NEW_POST_RESPONSE", payload: res.body})
      } else console.log({err});
    })
}
