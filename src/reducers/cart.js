import { combineReducers } from 'redux'
import produce from 'immer'
import { RECEIVE_USERS } from '../constants/actionTypes'

const INITIAL_STATE = {
	allIds: [],
	quantityById: {}
}

const allIds = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return (draft = action.users[action.currentUserId].cartProductIds)
		default:
			break
	}
}, INITIAL_STATE.allIds)

const quantityById = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return (draft =
				action.users[action.currentUserId].cartProductQuantityById)
		default:
			break
	}
}, INITIAL_STATE.quantityById)

export default combineReducers({
	allIds,
	quantityById
})

export const getCartProductIds = (state) => state.allIds
export const getQuantityById = (state, productId) =>
	state.quantityById[productId]

export const getNumOfItems = (state) =>
	getCartProductIds(state).reduce(
		(total, productId) => total + getQuantityById(state, productId),
		0
	)
