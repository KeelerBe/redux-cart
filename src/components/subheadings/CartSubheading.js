import React from 'react'
import PropTypes from 'prop-types'

const Total = ({ total }) => (
	<p>
		Total:{' '}
		<b>
			&#36;
			{total.toFixed(2)}
		</b>
	</p>
)

Total.propTypes = {
	total: PropTypes.number.isRequired
}

export default Total
