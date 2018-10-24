import React from 'react'
import './App.css'
import * as selectors from '../api/selectors'
import ProductsContainer from './ProductsContainer'
import InventoryContainer from './InventoryContainer'
import CartContainer from './CartContainer'
import OrdersContainer from './OrdersContainer'
import ProductForm from '../components/ProductForm'

const App = () => (
	<div id="main">
		<ProductForm />
		{/* <ProductsContainer
			products={selectors.getProducts()}
			userName={selectors.getUserName()}
		/>
		<InventoryContainer
			products={selectors.getInventoryProducts()}
			vendorName={selectors.getVendorName()}
		/>
		<CartContainer products={selectors.getCartProducts()} />
		<OrdersContainer /> */}
	</div>
)

export default App
