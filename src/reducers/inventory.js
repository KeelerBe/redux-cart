import produce from 'immer'

const INITIAL_STATE = {
	allIds: []
}

const inventory = produce((draft, action) => {
	switch (action.type) {
		default:
			break
	}
}, INITIAL_STATE)

export default inventory
