import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
	const {parent_id, group_name, group_description, invite_only} = state.createGroup
  request
    .post(`${url}groups/new`)
		.send({parent_id, group_name, group_description, invite_only})
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        console.log({res});
      } else console.log({err});
    })
}
