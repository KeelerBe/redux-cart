import { combineReducers } from 'redux'
import users, * as fromUsers from './users'
import products, * as fromProducts from './products'
import cart from './cart'
import inventory from './inventory'

export default combineReducers({
	users,
	products,
	cart,
	inventory
})

const getUser = (state, userId) => fromUsers.getUser(state.users, userId)
// const getCurrentUser = (state) => fromUsers.getCurrentUser(state.users)
const getVendorName = (state, userId) => getUser(state, userId).vendorName
const getVisibleProducts = (state) =>
	fromProducts.getVisibleProducts(state.products)

export const getStoreProducts = (state) =>
	getVisibleProducts(state).map((p) => {
		const { userId, ...product } = p
		return {
			...product,
			vendorName: getVendorName(state, userId)
		}
	})
