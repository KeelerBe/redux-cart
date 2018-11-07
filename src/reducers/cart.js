import { combineReducers } from 'redux'
import produce from 'immer'

const INITIAL_STATE = {
	allIds: [],
	quantityById: {}
}

const allIds = produce((draft, action) => {
	switch (action.type) {
		default:
			break
	}
}, INITIAL_STATE.allIds)

const quantityById = produce((draft, action) => {
	switch (action.type) {
		default:
			break
	}
}, INITIAL_STATE.quantityById)

export default combineReducers({
	allIds,
	quantityById
})
