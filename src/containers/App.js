import React from 'react'
import './App.css'
import * as selectors from '../api/selectors'
import ProductsContainer from './ProductsContainer'
import InventoryContainer from './InventoryContainer'
import CartContainer from './CartContainer'
import OrdersContainer from './OrdersContainer'

const App = () => (
	<div id="main">
		<ProductsContainer
			products={selectors.getProducts()}
			userName={selectors.getUserName()}
		/>
		<InventoryContainer />
		<CartContainer products={selectors.getCartProducts()} />
		<OrdersContainer />
	</div>
)

export default App
