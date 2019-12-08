import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

const EditContactButton = (props) => {
  return (
    <button className={props.className}>
      <Link to={`/contacts/edit/${props.id}`}>
        <FontAwesomeIcon icon={faEdit} />
      </Link>
    </button>
  )
}

export default EditContactButton