import React from 'react'

const QuantityField = ({ quantity, onIncrement, onDecrement }) => (
	<div id="quantity">
		<button
			type="button"
			onClick={onDecrement}
			disabled={quantity <= 1 ? 'disabled' : ''}
		>
			-
		</button>
		<p> {quantity} </p>
		<button type="button" onClick={onIncrement}>
			+
		</button>
	</div>
)

export default QuantityField
