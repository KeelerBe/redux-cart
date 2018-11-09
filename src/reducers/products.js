import { combineReducers } from 'redux'
import produce from 'immer'
import {
	RECEIVE_PRODUCTS,
	ADD_TO_CART,
	REMOVE_FROM_CART
} from '../constants/actionTypes'

const INITIAL_STATE = {
	byId: {},
	visibleIds: []
}

const product = produce((draft, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			draft.available -= 1
			return
		case REMOVE_FROM_CART:
			draft.available += 1
			return
		default:
			break
	}
})

const byId = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_PRODUCTS:
			return action.products
		default:
			const { productId } = action
			if (productId) {
				draft[productId] = product(draft[productId], action)
			}
			return draft
	}
}, INITIAL_STATE.byId)

const visibleIds = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_PRODUCTS:
			Object.keys(action.products).forEach((id) => draft.push(id))
			return
		default:
			return draft
	}
}, INITIAL_STATE.visibleIds)

export default combineReducers({
	byId,
	visibleIds
})

export const getProduct = (state, productId) => state.byId[productId]
export const getVisibleProducts = (state) =>
	state.visibleIds.map((productId) => getProduct(state, productId))
