import produce from 'immer'
import { RECEIVE_USERS } from '../constants/actionTypes'

const INITIAL_STATE = {
	allIds: []
}

export default produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return (draft = action.users[action.currentUserId].inventoryProductIds)
		default:
			break
	}
}, INITIAL_STATE)

export const getInventoryProductIds = (state) => state
