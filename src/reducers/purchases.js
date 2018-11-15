import produce from 'immer'
import { RECEIVE_USERS } from '../constants/actionTypes'

const INITIAL_STATE = {
	allIds: []
}

export default produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return action.users[action.currentUserId].buyerOrderIds
		default:
			return draft
	}
}, INITIAL_STATE.allIds)

export const getBuyerOrderIds = (state) => state
