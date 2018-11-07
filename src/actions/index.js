import _products from '../api/products.json'
import _users from '../api/users.json'
import * as types from '../constants/actionTypes'

const receiveProducts = (products) => ({
	type: types.RECEIVE_PRODUCTS,
	products
})

const receiveUsers = (users) => ({
	type: types.RECEIVE_USERS,
	users
})

const receiveCurrentUserId = (id) => ({
	type: types.RECEIVE_CURRENT_USER_ID,
	id
})

export const getInitData = () => (dispatch) => {
	const products = _products // data fetching here
	const users = _users
	const currentUserId = 'bbeec34e-d71a-4128-8502-5bfef4776b9f'
	dispatch(receiveProducts(products))
	dispatch(receiveUsers(users))
	dispatch(receiveCurrentUserId(currentUserId))
}
