import { combineReducers } from 'redux'
import users, * as fromUsers from './users'
import products, * as fromProducts from './products'
import cart, * as fromCart from './cart'
import inventory, * as fromInventory from './inventory'
import purchases, * as fromPurchases from './purchases'
import sales, * as fromSales from './sales'
// import purchaseOrders from './purchaseOrders'
// import salesOrders from './salesOrders'
import orders, * as fromOrders from './orders'

export default combineReducers({
	users,
	products,
	orders,
	cart,
	inventory,
	purchases,
	sales
})

const getCurrentUserId = (state) => fromUsers.getCurrentUserId(state.users)
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

const getOrder = (state, orderId) => fromOrders.getOrder(state.orders, orderId)

const getBuyerOrderIds = (state) =>
	fromPurchases.getBuyerOrderIds(state.purchases)

const getVendorOrderIds = (state) => fromSales.getVendorOrderIds(state.sales)

const getVendorNameFromProduct = (state, userId) =>
	getUser(state, userId).vendorName
const getSubtotal = (state, productId, productPrice) =>
	productPrice * getQuantityById(state, productId)

export const getStoreProducts = (state) =>
	getVisibleProducts(state).map((p) => {
		const { vendorId, ...product } = p
		return {
			...product,
			vendorName: getVendorNameFromProduct(state, vendorId)
		}
	})

export const getCartProducts = (state) =>
	getCartProductIds(state).map((productId) => {
		const product = getProduct(state, productId)
		return {
			...product,
			subtotal: getSubtotal(state, productId, product.price),
			quantity: getQuantityById(state, productId)
		}
	})

export const getTotal = (state) =>
	getCartProductIds(state).reduce((total, productId) => {
		const { price } = getProduct(state, productId)
		return total + price * getQuantityById(state, productId)
	}, 0)

export const getInventoryProducts = (state) =>
	getInventoryProductIds(state).map((productId) => getProduct(state, productId))

export const getPurchaseOrders = (state) =>
	getBuyerOrderIds(state).map((orderId) => getOrder(state, orderId))

export const getSalesOrders = (state) => {
	const orders = getVendorOrderIds(state).map((orderId) =>
		getOrder(state, orderId)
	)
	return orders.map((order) => {
		const orderItems = order.orderItems.filter(
			(item) => item.vendorId === getCurrentUserId(state)
		)
		return {
			orderId: order.orderId,
			buyerId: order.buyerId,
			orderItems
		}
	})
}
