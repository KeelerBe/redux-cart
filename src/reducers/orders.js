import { combineReducers } from 'redux'
import { produce } from 'immer'
import { RECEIVE_ORDERS, START_CHECKOUT } from '../constants/actionTypes'

const INITIAL_STATE = {
	byId: {},
	allIds: []
}

const byId = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_ORDERS:
			return action.orders
		case START_CHECKOUT:
			draft[action.orderId] = {
				orderId: action.orderId,
				total: action.total,
				orderItems: action.products
			}
			return
		default:
			return draft
	}
}, INITIAL_STATE.byId)

const allIds = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_ORDERS:
			Object.keys(action.orders).forEach((id) => draft.push(id))
			return
		case START_CHECKOUT:
			draft.push(action.orderId)
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
