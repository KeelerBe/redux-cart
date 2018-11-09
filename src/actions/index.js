import _products from '../api/products.json'
import _users from '../api/users.json'
import * as types from '../constants/actionTypes'

const receiveProducts = (products) => ({
	type: types.RECEIVE_PRODUCTS,
	products
})

const receiveUsers = (users, currentUserId) => ({
	type: types.RECEIVE_USERS,
	users,
	currentUserId
})

export const getInitData = () => (dispatch) => {
	const products = _products // data fetching here
	const users = _users
	const currentUserId = 'bbeec34e-d71a-4128-8502-5bfef4776b9f'
	dispatch(receiveProducts(products))
	dispatch(receiveUsers(users, currentUserId))
}

export const addToCart = (productId) => ({
	type: types.ADD_TO_CART,
	productId
})

export const removeFromCart = (productId) => ({
	type: types.REMOVE_FROM_CART,
	productId
})

const incrementQuantity = (productId) => ({
	type: types.INCREMENT_QUANTITY,
	productId
})

export const requestIncrement = (productId) => (dispatch, getState) => {
	if (getState().products.byId[productId].available >= 1)
		dispatch(incrementQuantity(productId))
}

export const decrementQuantity = (productId) => ({
	type: types.DECREMENT_QUANTITY,
	productId
})
