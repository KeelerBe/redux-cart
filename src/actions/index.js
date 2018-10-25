import _products from '../api/products.json'
import * as types from '../constants/actionTypes'

const receiveProducts = (products) => ({
	type: types.RECEIVE_PRODUCTS,
	products
})

export const getAllProducts = () => (dispatch) => {
	const products = _products // data fetching here
	dispatch(receiveProducts(products))
}
