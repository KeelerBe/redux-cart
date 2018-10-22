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
