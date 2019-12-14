import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

const GoBackButton = props => {
  return (
    <button className={props.className}>
      <Link to="/contacts/all">
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </Link>
    </button>
  )
}

GoBackButton.defaultProps = {
  className: "nav--button"
}

GoBackButton.propTypes = {
  className: PropTypes.string
}

export default GoBackButton
