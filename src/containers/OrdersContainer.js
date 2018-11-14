import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getOrders } from '../reducers/purchaseOrders'
import ProductsList from '../components/ProductsList'
import OrdersSection from '../components/sections/OrdersSection'
import PurchaseOrders from '../components/PurchaseOrders'
import Sales from '../components/Sales'
import PurchaseOrder from '../components/PurchaseOrder'

class OrdersContainer extends Component {
	state = {
		default: true
	}

	toggleLabel = () => this.setState({ default: !this.state.default })

	render() {
		return (
			<ProductsList title="Orders">
				<OrdersSection
					onClick={this.toggleLabel}
					label={this.state.default ? 'Sales' : 'Purchases'}
				/>
				{this.state.default ? (
					<PurchaseOrders>
						{this.props.purchaseOrders.map((order) => (
							<PurchaseOrder
								key={order.orderId}
								orderId={order.orderId}
								total={order.total}
								itemsList={order.itemsList}
							/>
						))}
					</PurchaseOrders>
				) : (
					<Sales />
				)}
			</ProductsList>
		)
	}
}

OrdersContainer.propTypes = {
	purchaseOrders: PropTypes.arrayOf(
		PropTypes.shape({
			orderId: PropTypes.string.isRequired,
			total: PropTypes.number.isRequired,
			itemsList: PropTypes.arrayOf(
				PropTypes.shape({
					productId: PropTypes.string.isRequired,
					productName: PropTypes.string.isRequired,
					userId: PropTypes.string.isRequired,
					price: PropTypes.number.isRequired,
					quantity: PropTypes.number.isRquired,
					subtotal: PropTypes.number.isRquired
				})
			)
		})
	).isRequired
}

const mapStateToProps = (state) => ({
	purchaseOrders: getOrders(state.purchaseOrders)
})

export default connect(mapStateToProps)(OrdersContainer)
