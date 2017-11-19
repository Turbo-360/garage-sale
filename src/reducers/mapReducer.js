var initalState = {
	currentLocation: {lat:40.7224017, lng:-73.9896719}
}

export default (state = initalState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type){

		case 'LOCATION_CHANGED':
			console.log('LOCATION_CHANGED: ' + JSON.stringify(action.data))
			updated['currentLocation'] = action.data
			return updated

		default:
			return updated
	}

}