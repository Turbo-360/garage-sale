import constants from '../constants'

var initialState = {
	all: [
		{id:'1', price:10, name:'Nike Jordans', position:{lat:40.7224017, lng:-73.9896719}},
		{id:'2', price:20, name:'Sofa', position:{lat:40.71224017, lng:-73.9896719}},
		{id:'3', price:30, name:'TV', position:{lat:40.71224017, lng:-73.9796719}},
	]
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type){
		case constants.ITEM_ADDED:
			console.log('ITEM ADDED: ' + JSON.stringify(action.data))
			
			let all = Object.assign([], updated.all)
			all.push(action.data)
			updated['all'] = all

			return updated

		default:
			return updated
	}

}