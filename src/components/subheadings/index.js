import React from 'react'

export const renderTotal = (total) => (
	<p>
		Total:{' '}
		<b>
			&#36;
			{total.toFixed(2)}
		</b>
	</p>
)

export const renderCompanyName = (vendorName) => <p>{vendorName}</p>
