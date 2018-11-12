import React from 'react'
import PropTypes from 'prop-types'

const AddNewProductButton = ({ onClick }) => (
	<button onClick={onClick}>
		<b>Add new product</b>
	</button>
)

AddNewProductButton.propTypes = {
	onClick: PropTypes.func.isRequired
}

export default AddNewProductButton
