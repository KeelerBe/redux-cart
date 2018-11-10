import React from 'react'

const Total = ({ total }) => (
	<p>
		Total:{' '}
		<b>
			&#36;
			{total.toFixed(2)}
		</b>
	</p>
)

export default Total
