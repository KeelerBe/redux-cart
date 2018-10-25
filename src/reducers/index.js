import { combineReducers } from 'redux'
import users from './users'
import products from './products'
import cart from './cart'
import inventory from './inventory'

export default combineReducers({
	users,
	products,
	cart,
	inventory
})
