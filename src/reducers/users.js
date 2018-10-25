import produce from 'immer'

const INITIAL_STATE = {
	currentUserId: '',
	byId: {}
}

const users = produce((draft, action) => {}, INITIAL_STATE)

export default users
