import constants from '../constants'
import { TurboClient, HTTPAsync } from '../utils'

export default {

	addItem: (item) => {
		return dispatch => {
			return dispatch(HTTPAsync.post('/api/item', item, constants.ITEM_ADDED))
		}
	},

	fetchItems: (params) => {
		return dispatch => {
			return dispatch(HTTPAsync.get('/api/item', params, constants.ITEMS_RECEIVED))
		}
	},

	submitOrder: (order) => {
		return dispatch => {
			return dispatch(HTTPAsync.post('/api/order', order, null))
		}
	},

	sendEmail: (email) => {
		return dispatch => {
			return dispatch(HTTPAsync.post('/email/send', email, null))
		}
	},

	locationChanged: (location) => {
		return {
			// type: 'LOCATION_CHANGED',
			type: constants.LOCATION_CHANGED,
			data: location
		}
	},

	// this is an AsyncAction!!!
	// https://redux.js.org/docs/advanced/AsyncActions.html
	currentUser: () => {
	// get: (url, params, actionType) => {
		return dispatch => {
			return dispatch(HTTPAsync.get('/auth/currentuser', null, constants.CURRENT_USER_RECEIVED))
		}
	}


	// fetchUsers: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
	// 	}
	// },

	// addUser: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
	// 	}
	// },

	// // Unlike addUser, register() also maintains a session for login state. After calling 
	// // TurboClient.createUser(), the new user is logged in as well:
	// register: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
	// 	}
	// },

	// loginUser: (credentials) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
	// 	}
	// },

	// currentUser: () => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
	// 	}
	// }
	
}
