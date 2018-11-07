import { combineReducers } from 'redux'
import users, * as fromUsers from './users'
import products, * as fromProducts from './products'
import cart, * as fromCart from './cart'
import inventory from './inventory'

export default combineReducers({
	users,
	products,
	cart,
	inventory
})

const getUser = (state, userId) => fromUsers.getUser(state.users, userId)
const getProduct = (state, productId) =>
	fromProducts.getProduct(state.products, productId)
// const getCurrentUser = (state) => fromUsers.getCurrentUser(state.users)
const getVendorName = (state, userId) => getUser(state, userId).vendorName
const getVisibleProducts = (state) =>
	fromProducts.getVisibleProducts(state.products)
const getCartProductIds = (state) => fromCart.getCartProductIds(state.cart)

export const getStoreProducts = (state) =>
	getVisibleProducts(state).map((p) => {
		const { userId, ...product } = p
		return {
			...product,
			vendorName: getVendorName(state, userId)
		}
	})

export const getCartProducts = (state) =>
	getCartProductIds(state).map((productId) => getProduct(state, productId))
