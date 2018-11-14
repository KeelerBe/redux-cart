import React from 'react'
import PropTypes from 'prop-types'
import PurchaseItem from './PurchaseItem'

const PurchaseOrder = ({ orderId, total, itemsList }) => (
	<div>
		<p>
			<b>Order ID:</b> {orderId}
		</p>
		<table>
			<thead>
				<tr>
					<th>Product Name</th>
					<th>Vendor ID</th>
					<th>Price</th>
					<th>Qty.</th>
					<th>Subtotal</th>
				</tr>
			</thead>
			{itemsList.map((item) => (
				<PurchaseItem
					key={item.productId}
					productName={item.productName}
					userId={item.userId}
					price={item.price}
					quantity={item.quantity}
					subtotal={item.subtotal}
				/>
			))}
		</table>
		<p>
			<b>
				Total: &#36;
				{total.toFixed(2)}
			</b>
		</p>
	</div>
)

PurchaseOrder.propTypes = {
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
	).isRequired
}

export default PurchaseOrder
