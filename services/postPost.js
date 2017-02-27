import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  request
    .post(`${url}posts/new`)
    .withCredentials()
		.send({content: state.createPost.content, is_alert: state.createPost.is_alert})
    .end((err, res) => {
      if (!err) {
        console.log({res});
				dispatch({type: 'POST_POST', payload: res.body.post_id})
      } else console.log({err});
    })
}
