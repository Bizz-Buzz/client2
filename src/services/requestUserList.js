import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
	const {parent_id, group_name, group_description, invite_only} = state.createGroup
  request
    .get(`${url}group/userList`)
		.query({group_id: state.currentGroup.group.group_id})
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        console.log({res});
				// dispatch({type: "RECIEVE_GROUP", payload: res.body})
      } else console.log({err});
    })
}
