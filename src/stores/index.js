import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { userReducer, itemReducer, mapReducer, accountReducer } from '../reducers'

var store
export default {

	configure: (initialState) => { // initialState can be null
		
		const reducers = combineReducers({ // insert reducers here
			user: userReducer,
			item: itemReducer,
			map: mapReducer,
			account: accountReducer
		})

		if (initialState){
			store = createStore(
			    reducers,
			    initialState,
			    applyMiddleware(thunk)
			)

			return store
		}

		store = createStore(
		    reducers,
		    applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}
