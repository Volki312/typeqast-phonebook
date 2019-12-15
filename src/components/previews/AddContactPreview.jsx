import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddContactPreview = () => {
  return (
    <div id="contacts_add" className="contact">
        <Link to="/contacts/add" className="contacts_add--link" >
          <FontAwesomeIcon icon={faPlus} size="lg" className="contacts_add--fa" />Add new
        </Link>
    </div>
  )
}

export default AddContactPreview