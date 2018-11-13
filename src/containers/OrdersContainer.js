import React from 'react'
import OrdersSection from '../components/sections/OrdersSection'
import ProductsList from '../components/ProductsList'

const OrdersContainer = () => (
	<ProductsList
		title="Orders"
		section={<OrdersSection />}
		subheading={<p>Purchases</p>}
	>
		<p>Children go here</p>
	</ProductsList>
)

export default OrdersContainer
