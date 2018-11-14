import { produce } from 'immer'
import { combineReducers } from 'redux'
import { START_CHECKOUT } from '../constants/actionTypes'

const INITIAL_STATE = {
	byId: {},
	allIds: []
}

const byId = produce((draft, action) => {
	switch (action.type) {
		case START_CHECKOUT:
			draft[action.orderId] = {
				itemsList: action.itemsList,
				total: action.total
			}
			return draft
		default:
			return draft
	}
}, INITIAL_STATE.byId)

const allIds = produce((draft, action) => {
	switch (action.type) {
		default:
			return draft
	}
}, INITIAL_STATE.allIds)

export default combineReducers({
	byId,
	allIds
})
