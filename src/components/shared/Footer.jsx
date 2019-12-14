import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
  return (
    <footer>
      <p className="contacts--info">{props.contactsLength} contacts total in total</p>
    </footer>
  )
}

Footer.propTypes = {
  contactsLength: PropTypes.number.isRequired
}

export default Footer