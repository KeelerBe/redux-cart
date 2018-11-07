import { combineReducers } from 'redux'
import produce from 'immer'
import { RECEIVE_PRODUCTS } from '../constants/actionTypes'

const INITIAL_STATE = {
	byId: {},
	visibleIds: []
}

const byId = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_PRODUCTS:
			return (draft = action.products)
		default:
			break
	}
}, INITIAL_STATE.byId)

const visibleIds = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_PRODUCTS:
			Object.keys(action.products).map((id) => draft.push(id))
			break
		default:
			break
	}
}, INITIAL_STATE.visibleIds)

export default combineReducers({
	byId,
	visibleIds
})

export const getProduct = (state, productId) => state.byId[productId]
export const getVisibleProducts = (state) =>
	state.visibleIds.map((productId) => getProduct(state, productId))
