import { produce } from 'immer'
import { combineReducers } from 'redux'

const INITIAL_STATE = {
	byId: {},
	allIds: []
}

const byId = produce((draft, action) => {
	switch (action.type) {
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

// export const getOrderById = (state, orderId) => state.byId[orderId]
// export const getOrders = (state) =>
// 	state.allIds.map((id) => getOrderById(state, id))
