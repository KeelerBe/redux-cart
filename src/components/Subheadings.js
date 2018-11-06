import React from 'react'

export const renderTotal = (total) => (
	<p>
		Total: <b>{total || '$0.00'}</b>
	</p>
)

export const renderCompanyName = (vendorName) => <p>{vendorName}</p>
