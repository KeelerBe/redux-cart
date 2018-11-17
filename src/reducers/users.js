/* eslint-disable */
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
			return action.currentUserId
	}
}, INITIAL_STATE.currentUserId)

const byId = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return action.users
	}
}, INITIAL_STATE.byId)

export default combineReducers({
	currentUserId,
	byId
})

export const getCurrentUserId = (state) => state.currentUserId

const getCurrentUser = (state) => state.byId[getCurrentUserId(state)]

export const getUser = (state, userId) => state.byId[userId]

export const getCurrentUserName = (state) => getCurrentUser(state).firstName

export const getVendorName = (state) => getCurrentUser(state).vendorName
