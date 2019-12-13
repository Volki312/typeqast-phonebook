import React from 'react'
import { Link } from 'react-router-dom'
import FavoritiseContactButton from '../buttons/FavoritiseContactButton'
import DeleteContactButton from '../buttons/DeleteContactButton'
import EditContactButton from '../buttons/EditContactButton'

const ContactPreview = (props) => {
  const toggleFavorite = (id) => {
    props.toggleFavorite(id)
  }

  const deleteContact = (id) => {
    props.deleteContact(id)
  }

  return (
    <div className="contact">
        <img className="contact--image" src={props.image || "https://i.ibb.co/80WvdvX/placeholder.png"} alt="Contact_Image" />
        <Link className="contact--name" to={`/contacts/details/${props.id}`}>{props.name}</Link>
        <div className="contact--actions">
          <FavoritiseContactButton id={props.id} isFavorite={props.isFavorite} toggleFavorite={toggleFavorite} className="contact--button" />
          <EditContactButton id={props.id} className="contact--button" />
          <DeleteContactButton id={props.id} deleteContact={deleteContact} className="contact--button" />
        </div>
    </div>
  )
}

export default ContactPreview
