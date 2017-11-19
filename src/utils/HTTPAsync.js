import superagent from 'superagent'
import Promise from 'bluebird'

// standard superagent get request:
const getRequst = (url, params) => {
	return new Promise((resolve, reject) => {
		superagent.get(url)
		.query(params)
		.set('Accept', 'application/json')
		.end((err, response) => {
			if (err){
				reject(err)
				return
			}

			const payload = response.body || response.text
			resolve(payload)
		})
	})
}

const postRequst = (url, body) => {
	return new Promise((resolve, reject) => {
		superagent.post(url)
		.send(body)
		.set('Accept', 'application/json')
		.end((err, response) => {
			if (err){
				reject(err)
				return
			}

			const payload = response.body || response.text
			resolve(payload)
		})
	})
}

export default {
	post: (url, body, actionType) => {
		return dispatch => postRequst(url, body)
			.then(data => {
				// console.log('DATA: ' + JSON.stringify(data))
				if (actionType != null){
					dispatch({
						type: actionType,
						data: data
					})
				}

				return data
			})
			.catch(err => {
				throw err
			})
	},

	get: (url, params, actionType) => {
		return dispatch => getRequst(url, params)
			.then(data => {
				// console.log('DATA: ' + JSON.stringify(data))
				if (actionType != null){
					console.log('actionType: ' + actionType)
					dispatch({
						type: actionType,
						data: data
					})
				}

				return data
			})
			.catch(err => {
				throw err
			})
	}

}