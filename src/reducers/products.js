import { combineReducers } from 'redux'
import produce from 'immer'
import {
	RECEIVE_PRODUCTS,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	INCREMENT_QUANTITY,
	DECREMENT_QUANTITY,
	ADD_NEW_PRODUCT,
	EDIT_PRODUCT,
	DELETE_PRODUCT
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
			draft.available += action.quantity
			return
		case INCREMENT_QUANTITY:
			draft.available -= 1
			return
		case DECREMENT_QUANTITY:
			draft.available += 1
			return
		case EDIT_PRODUCT:
			return {
				...draft,
				productName: action.product.productName,
				price: action.product.price,
				available: action.product.available
			}
	}
})

const byId = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_PRODUCTS:
			return action.products
		case ADD_NEW_PRODUCT:
			draft[action.product.productId] = action.product
			break
		case DELETE_PRODUCT:
			delete draft[action.productId]
			break
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
			break
		case ADD_NEW_PRODUCT:
			draft.splice(0, 0, action.product.productId)
			break
		case DELETE_PRODUCT:
			return draft.filter((id) => id !== action.productId)
	}
}, INITIAL_STATE.visibleIds)

export default combineReducers({
	byId,
	visibleIds
})

export const getProduct = (state, productId) => state.byId[productId]
export const getVisibleProducts = (state) =>
	state.visibleIds.map((productId) => getProduct(state, productId))
export const getAvailable = (state, productId) =>
	getProduct(state, productId).available
