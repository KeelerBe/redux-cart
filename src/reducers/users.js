import { combineReducers } from 'redux'
import produce from 'immer'
import { RECEIVE_USERS } from '../constants/actionTypes'

const INITIAL_STATE = {
	currentUserId: '',
	byId: {}
}

const currentUserId = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return (draft = action.currentUserId)
		default:
			break
	}
}, INITIAL_STATE.currentUserId)

const byId = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
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
export const getUser = (state, userId) => state.byId[userId]
const getCurrentUser = (state) => state.byId[getCurrentUserId(state)]
// export const getCurrentUserName = (state) =>
// 	getUser(state, getCurrentUserId(state)).firstName
// export const getVendorName = (state) =>
// 	getUser(state, getCurrentUserId(state)).vendorName

export const getCurrentUserName = (state) => getCurrentUser(state).firstName
export const getVendorName = (state) => getCurrentUser(state).vendorName
