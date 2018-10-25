import produce from 'immer'
import { RECEIVE_PRODUCTS } from '../constants/actionTypes'
import { combineReducers } from 'redux'

const INITIAL_STATE = {
	currentUserId: 'bbeec34e-d71a-4128-8502-5bfef4776b9f',
	byId: {}
}

const currentUserId = produce((draft, action) => {},
INITIAL_STATE.currentUserId)

const byId = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_PRODUCTS:
			return (draft = action.users)
		default:
			break
	}
}, INITIAL_STATE.byId)

export default combineReducers({
	currentUserId,
	byId
})

const getCurrentUserId = (state) => state.currentUserId
export const getCurrentUser = (state) => state.byId[getCurrentUserId(state)]
