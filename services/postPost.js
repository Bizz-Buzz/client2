import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  request
    .post(`${url}posts/new`)
    .withCredentials()
		.send({content: state.createPost.content, is_alert: state.createPost.is_alert, group_id: state.createPost.group_id})
    .end((err, res) => {
      if (!err) {
        console.log({res});
				dispatch({type: 'POST_POST', payload: res.body})
      } else console.log({err});
    })
}
