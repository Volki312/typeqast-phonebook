import React from 'react'
import { Link } from 'react-router-dom'
import FavoritiseContactButton from '../buttons/FavoritiseContactButton'
import DeleteContactButton from '../buttons/DeleteContactButton'
import EditContactButton from '../buttons/EditContactButton'

const ContactPreview = (props) => {

  return (
    <div className="contact">
        <img className="contact--image" src={props.profile} alt="Contact_Image" />
        <Link className="contact--name" to={`/contacts/details/${props.id}`}>{props.name}</Link>
        <div className="contact--actions">
          <FavoritiseContactButton isFavorite={props.isFavorite} className="contact--button" />
          <EditContactButton id={props.id} className="contact--button" />
          <DeleteContactButton className="contact--button" />
        </div>
    </div>
  )
}

export default ContactPreview
