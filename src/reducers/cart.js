import produce from 'immer'

const INITIAL_STATE = {
	allIds: [],
	quantityById: {}
}

const cart = produce((draft, action) => {}, INITIAL_STATE)

export default cart
