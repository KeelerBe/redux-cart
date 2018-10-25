import produce from 'immer'
import { RECEIVE_PRODUCTS } from '../constants/actionTypes'
import { combineReducers } from 'redux'

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

export const getProduct = (state, id) => state.byId[id]
export const getVisibleProducts = (state) =>
	state.visibleIds.map((id) => getProduct(state, id))
