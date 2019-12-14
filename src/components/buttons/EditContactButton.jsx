import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

const EditContactButton = props => {
  return (
    <button className={props.className}>
      <Link to={`/contacts/edit/${props.id}`}>
        <FontAwesomeIcon icon={faEdit} />
      </Link>
    </button>
  )
}

EditContactButton.defaultProps = {
  className: "nav--button"
}

EditContactButton.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number.isRequired
}

export default EditContactButton