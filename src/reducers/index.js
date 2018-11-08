import { combineReducers } from 'redux'
import users, * as fromUsers from './users'
import products, * as fromProducts from './products'
import cart, * as fromCart from './cart'
import inventory, * as fromInventory from './inventory'

export default combineReducers({
	users,
	products,
	cart,
	inventory
})

const getUser = (state, userId) => fromUsers.getUser(state.users, userId)
const getProduct = (state, productId) =>
	fromProducts.getProduct(state.products, productId)
const getVisibleProducts = (state) =>
	fromProducts.getVisibleProducts(state.products)
const getCartProductIds = (state) => fromCart.getCartProductIds(state.cart)
const getQuantityById = (state, productId) =>
	fromCart.getQuantityById(state.cart, productId)
const getInventoryProductIds = (state) =>
	fromInventory.getInventoryProductIds(state.inventory)

const getVendorNameFromProduct = (state, userId) =>
	getUser(state, userId).vendorName

export const getStoreProducts = (state) =>
	getVisibleProducts(state).map((p) => {
		const { userId, ...product } = p
		return {
			...product,
			vendorName: getVendorNameFromProduct(state, userId)
		}
	})

export const getCartProducts = (state) =>
	getCartProductIds(state).map((productId) => {
		const product = getProduct(state, productId)
		return {
			...product,
			quantity: getQuantityById(state, productId)
		}
	})

export const getInventoryProducts = (state) =>
	getInventoryProductIds(state).map((productId) => getProduct(state, productId))
