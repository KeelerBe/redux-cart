import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getOrders } from '../reducers/purchaseOrders'
import Orders from '../components/Orders'
import ProductsList from '../components/ProductsList'

const OrdersContainer = ({ items }) => (
	<ProductsList title="Orders">
		<Orders />
	</ProductsList>
)

OrdersContainer.propTypes = {
	items: PropTypes.array
}

const mapStateToProps = (state) => ({
	items: getOrders(state.purchaseOrders)
})

export default connect(mapStateToProps)(OrdersContainer)
