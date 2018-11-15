import { combineReducers } from 'redux'
import { produce } from 'immer'
import { RECEIVE_ORDERS } from '../constants/actionTypes'

const INITIAL_STATE = {
	byId: {},
	allIds: []
}

const byId = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_ORDERS:
			return action.orders
		default:
			return draft
	}
}, INITIAL_STATE.byId)

const allIds = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_ORDERS:
			Object.keys(action.orders).forEach((id) => draft.push(id))
			return
		default:
			return draft
	}
}, INITIAL_STATE.allIds)

export default combineReducers({
	byId,
	allIds
})

export const getOrder = (state, orderId) => state.byId[orderId]
