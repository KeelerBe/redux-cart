import { combineReducers } from 'redux'
import produce from 'immer'
import {
	RECEIVE_USERS,
	ADD_TO_CART,
	REMOVE_FROM_CART
} from '../constants/actionTypes'

const INITIAL_STATE = {
	allIds: [],
	quantityById: {}
}

const allIds = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return (draft = action.users[action.currentUserId].cartProductIds)
		case ADD_TO_CART:
			draft.push(action.productId)
			break
		case REMOVE_FROM_CART:
			return draft.filter((id) => id !== action.productId)
		default:
			break
	}
}, INITIAL_STATE.allIds)

const quantityById = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return (draft =
				action.users[action.currentUserId].cartProductQuantityById)
		case ADD_TO_CART:
			draft[action.productId] = 1
			break
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
