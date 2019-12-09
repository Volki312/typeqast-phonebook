import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

const DeleteContactButton = (props) => {
  const handleClick = (e) => {
    props.deleteContact(props.id);
  }

  return (
    <button className={props.className} onClick={handleClick}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  )
}

export default DeleteContactButton