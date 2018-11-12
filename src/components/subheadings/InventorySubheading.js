import React from 'react'
import PropTypes from 'prop-types'

const CompanyName = ({ vendorName }) => <p>{vendorName}</p>

CompanyName.propTypes = {
	vendorName: PropTypes.string
}

export default CompanyName
