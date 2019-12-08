import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

const DeleteContactButton = (props) => {
  return (
    <button className={props.className}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  )
}

export default DeleteContactButton