import constants from '../constants'

var initialState = {
	all: [
		{id:'1', price:10, name:'Nike Jordans', position:{lat:40.7224017, lng:-73.9896719}, seller:{username:'lebron_james', image:'http://www.athletesgonegood.com/images/thumbnails/thumb-lebron-james.jpg'}},
		{id:'2', price:20, name:'Sofa', position:{lat:40.71224017, lng:-73.9896719}, seller:{username:'kevin_durant', image:'https://pbs.twimg.com/profile_images/749992876906536960/mf3yAOgW.jpg'}},
		{id:'3', price:30, name:'TV', position:{lat:40.71224017, lng:-73.9796719}, seller:{username:'kyrie_irving', image:'https://bookingagentinfo.com/wp-content/uploads/2016/12/Kyrie-Irving-Contact-Information.jpg'}}
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