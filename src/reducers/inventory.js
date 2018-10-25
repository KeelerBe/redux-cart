import produce from 'immer'

const INITIAL_STATE = {
	allIds: []
}

const inventory = produce((draft, action) => {}, INITIAL_STATE)

export default inventory
