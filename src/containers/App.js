import React from 'react'
import './App.css'
import { getProducts } from '../api/selectors'
import ProductsContainer from './ProductsContainer'
import InventoryContainer from './InventoryContainer'
import CartContainer from './CartContainer'
import OrdersContainer from './OrdersContainer'

const App = () => (
	<div id="main">
		<ProductsContainer products={getProducts()} />
		<InventoryContainer />
		<CartContainer />
		<OrdersContainer />
	</div>
)

export default App
