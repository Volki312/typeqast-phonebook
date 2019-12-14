import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

const DeleteContactButton = props => {
  const handleClick = event => props.deleteContact(props.id)

  return (
    <button className={props.className} onClick={handleClick}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  )
}

DeleteContactButton.defaultProps = {
  className: "nav--button"
}

DeleteContactButton.propTypes = {
  className: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

export default DeleteContactButton