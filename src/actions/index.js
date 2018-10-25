import _products from '../api/products.json'
import _users from '../api/users.json'
import * as types from '../constants/actionTypes'

const receiveProducts = (products, users) => ({
	type: types.RECEIVE_PRODUCTS,
	products,
	users
})

export const getAllProducts = () => (dispatch) => {
	const products = _products // data fetching here
	const users = _users
	dispatch(receiveProducts(products, users))
}
