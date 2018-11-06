import React from 'react'

export const renderTotal = (total) => (
	<p>
		Total: <b>{total || '$0.00'}</b>
	</p>
)

export const renderCartSummary = (numOfItems) => (
	<section>
		<p>
			There are <b>{numOfItems || 0}</b> items in your cart.
		</p>
		<button>Checkout</button>
	</section>
)
