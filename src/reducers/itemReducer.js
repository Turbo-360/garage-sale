
var initialState = {
	all: [
		{id:1, key:'1', price:10, defaultAnimation:2, label:'Nike Jordans', position:{lat:40.7224017, lng:-73.9896719}},
		{id:2, key:'2', price:20, defaultAnimation:2, label:'Sofa', position:{lat:40.71224017, lng:-73.9896719}},
		{id:3, key:'3', price:30, defaultAnimation:2, label:'TV', position:{lat:40.71224017, lng:-73.9796719}},
	]
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type){
		case 'ITEM_ADDED':
			console.log('ITEM ADDED: ' + JSON.stringify(action.data))
			
			let all = Object.assign([], updated.all)
			all.push(action.data)
			updated['all'] = all

			return updated

		default:
			return updated
	}

}