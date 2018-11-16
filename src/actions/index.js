import uuidv4 from 'uuid/v4'
import _products from '../api/products.json'
import _users from '../api/users.json'
import _orders from '../api/orders.json'
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

const receiveOrders = (orders) => ({
	type: types.RECEIVE_ORDERS,
	orders
})

export const getInitData = () => (dispatch) => {
	const products = _products // data fetching here
	const users = _users
	const orders = _orders
	const currentUserId = 'bbeec34e-d71a-4128-8502-5bfef4776b9f'
	dispatch(receiveProducts(products))
	dispatch(receiveUsers(users, currentUserId))
	dispatch(receiveOrders(orders))
}

export const addToCart = (productId) => ({
	type: types.ADD_TO_CART,
	productId
})

export const removeFromCart = (productId, quantity) => ({
	type: types.REMOVE_FROM_CART,
	productId,
	quantity
})

export const incrementQuantity = (productId) => ({
	type: types.INCREMENT_QUANTITY,
	productId
})

export const decrementQuantity = (productId) => ({
	type: types.DECREMENT_QUANTITY,
	productId
})

const addNewProduct = (product) => ({
	type: types.ADD_NEW_PRODUCT,
	product
})

export const startAddNewProduct = (newProduct) => (dispatch, getState) => {
	const userId = getState().users.currentUserId
	const product = {
		...newProduct,
		productId: uuidv4(),
		userId
	}
	dispatch(addNewProduct(product))
}

export const editProduct = (productId, product) => ({
	type: types.EDIT_PRODUCT,
	productId,
	product
})

export const deleteProduct = (productId) => ({
	type: types.DELETE_PRODUCT,
	productId
})

export const startCheckout = (products, total) => ({
	type: types.START_CHECKOUT,
	orderId: uuidv4(),
	products,
	total
})

// const emptyCart = () => ({
// 	type: types.EMPTY_CART
// })

// const setPurchaseOrders = (purchaseOrders) => ({
// 	types: types.SET_PURCHASE_ORDERS,
// 	purchaseOrders
// })

// const setSalesOrders = (salesItems) => ({
// 	type: types.SET_SALES_ORDERS,
// 	salesItems
// })

// export const startCheckout = (products, total) => (dispatch, getState) => {
// 	const orderId = uuidv4()
// 	const purchaseOrders = {
// 		orderId,
// 		itemsList: products,
// 		total: total
// 	}
// 	const salesItems =
// 		products.reduce((obj, product) => {
// 			if (product.userId === getState().users.currentUserId)
// 				obj = { ...product, orderId }
// 			return obj
// 		}, {})

// 	dispatch(emptyCart())
// 	dispatch(setPurchaseOrders(purchaseOrders))
// 	dispatch(setSalesOrders(salesItems))
// }

// export const startCheckout = (itemsList, total) => ({
// 	type: 'START_CHECKOUT',
// 	orderId: uuidv4(),
// 	itemsList,
// 	total
// })
