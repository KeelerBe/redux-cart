import React from 'react'

const QuantityField = ({ quantity, onIncrement, onDecrement }) => (
	<div id="quantity">
		<button type="button" onClick={onDecrement}>
			-
		</button>
		<p> {quantity} </p>
		<button type="button" onClick={onIncrement}>
			+
		</button>
	</div>
)

export default QuantityField
