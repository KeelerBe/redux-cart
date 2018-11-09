import React from 'react'
import { connect } from 'react-redux'
import { requestIncrement, decrementQuantity } from '../actions'
import QuantityField from '../components/QuantityField'

const QuantityContainer = ({
	incrementQuantity,
	decrementQuantity,
	quantity
}) => (
	<QuantityField
		quantity={quantity}
		onIncrement={incrementQuantity}
		onDecrement={decrementQuantity}
	/>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
	incrementQuantity: () => dispatch(requestIncrement(ownProps.productId)),
	decrementQuantity: () => dispatch(decrementQuantity(ownProps.productId))
})

export default connect(
	null,
	mapDispatchToProps
)(QuantityContainer)
