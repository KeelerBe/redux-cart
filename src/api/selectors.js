import _products from './products.json'
import _users from './users.json'

const getVendorName = (userId) => _users[userId].vendorName

export const getProducts = () =>
	Object.keys(_products).map((key) => {
		const { userId, ...product } = _products[key]

		return {
			...product,
			vendorName: getVendorName(userId)
		}
	})

const userId = 'bbeec34e-d71a-4128-8502-5bfef4776b9f'
const getCartProductIds = () => _users[userId].cartProductIds
const getInventoryProductIds = () => _users[userId].inventoryProductIds

export const getUserName = () => _users[userId].firstName

export const getCartProducts = () =>
	getCartProductIds().map((productId) => _products[productId])

export const getInventoryProducts = () =>
	getInventoryProductIds().map((productId) => _products[productId])
