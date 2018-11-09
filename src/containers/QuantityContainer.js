import React from 'react'
import { connect } from 'react-redux'
import { getAvailable } from '../reducers/products'
import { incrementQuantity, decrementQuantity } from '../actions'
import QuantityField from '../components/QuantityField'

const QuantityContainer = ({
	available,
	incrementQuantity,
	decrementQuantity,
	quantity
}) => (
	<QuantityField
		available={available}
		quantity={quantity}
		onIncrement={incrementQuantity}
		onDecrement={decrementQuantity}
	/>
)

const mapStateToProps = (state, ownProps) => ({
	available: getAvailable(state.products, ownProps.productId) >= 1
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	incrementQuantity: () => dispatch(incrementQuantity(ownProps.productId)),
	decrementQuantity: () => dispatch(decrementQuantity(ownProps.productId))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuantityContainer)
