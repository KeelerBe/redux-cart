import React from 'react'
import PropTypes from 'prop-types'

const EditProductButton = ({ onClick }) => (
	<button onClick={onClick}>
		<b>Edit</b>
	</button>
)

EditProductButton.propTypes = {
	onClick: PropTypes.func.isRequired
}

export default EditProductButton
