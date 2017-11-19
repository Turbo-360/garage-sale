import constants from '../constants'

var initialState = {
	all: null
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type){
		case constants.ITEM_ADDED:
			const payload = action.data
			// console.log('ITEM ADDED: ' + JSON.stringify(payload.data))
			
			let all = Object.assign([], updated.all)
			all.unshift(payload.data)
			updated['all'] = all

			return updated

		case constants.ITEMS_RECEIVED:
			// console.log('ITEMS_RECEIVED: ' + JSON.stringify(action.data))
			updated['all'] = action.data.data
			return updated

		default:
			return updated
	}

}