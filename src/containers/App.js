import React from 'react'
import './App.css'
import * as selectors from '../api/selectors' /* temp */
import ProductsContainer from './ProductsContainer'
import InventoryContainer from './InventoryContainer'
import CartContainer from './CartContainer'
import OrdersContainer from './OrdersContainer'

const App = () => (
	<div id="main">
		<ProductsContainer />
		<InventoryContainer
			products={selectors.getInventoryProducts()}
			vendorName={selectors.getVendorName()}
		/>
		<CartContainer products={selectors.getCartProducts()} />
		<OrdersContainer />
	</div>
)

export default App
