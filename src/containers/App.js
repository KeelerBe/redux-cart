import React from 'react'
import './App.css'
import * as selectors from '../api/selectors'
import ProductsContainer from './ProductsContainer'
import InventoryContainer from './InventoryContainer'
import CartContainer from './CartContainer'
import OrdersContainer from './OrdersContainer'

const App = () => (
	<div id="main">
		{console.log(selectors.getInventoryProducts())}
		<ProductsContainer
			products={selectors.getProducts()}
			userName={selectors.getUserName()}
		/>
		<InventoryContainer />
		<CartContainer />
		<OrdersContainer />
	</div>
)

export default App
