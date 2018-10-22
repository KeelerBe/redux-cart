import React from 'react'
import './App.css'
import ProductsContainer from './ProductsContainer'
import InventoryContainer from './InventoryContainer'
import CartContainer from './CartContainer'
import OrdersContainer from './OrdersContainer'

// temp:
import _products from '../api/products.json'
const products = Object.keys(_products).map((key) => _products[key])

const App = () => (
	<div id="main">
		<ProductsContainer products={products} />
		<InventoryContainer />
		<CartContainer />
		<OrdersContainer />
	</div>
)

export default App
