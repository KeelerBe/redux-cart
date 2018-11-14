import React, { Component, Fragment } from 'react'
import OrdersSection from './sections/OrdersSection'
import Purchases from './Purchases'
import Sales from './Sales'

class Orders extends Component {
	state = {
		default: true
	}

	toggleLabel = () => this.setState({ default: !this.state.default })

	render() {
		return (
			<Fragment>
				<OrdersSection
					onClick={this.toggleLabel}
					label={this.state.default ? 'Sales' : 'Purchases'}
				/>
				{this.state.default ? (
					<Purchases purchaseOrders={this.props.purchaseOrders} />
				) : (
					<Sales />
				)}
			</Fragment>
		)
	}
}

export default Orders
