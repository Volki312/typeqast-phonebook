import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import FavoritiseContactButton from '../buttons/FavoritiseContactButton'
import DeleteContactButton from '../buttons/DeleteContactButton'
import EditContactButton from '../buttons/EditContactButton'

const ContactPreview = props => {
  const toggleFavorite = id => props.toggleFavorite(id)
  const deleteContact = id => props.deleteContact(id)
  const { image, id, name, isFavorite } = props
  
  return (
    <div className="contact">
        <img className="contact--image" src={image || "https://i.ibb.co/80WvdvX/placeholder.png"} alt="Contact_Image" />
        <Link className="contact--name" to={`/contacts/details/${id}`}>{name}</Link>
        <div className="contact--actions">
          <FavoritiseContactButton id={id} isFavorite={isFavorite} toggleFavorite={toggleFavorite} className="contact--button" />
          <EditContactButton id={id} className="contact--button" />
          <DeleteContactButton id={id} deleteContact={deleteContact} className="contact--button" />
        </div>
    </div>
  )
}

ContactPreview.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  deleteContact: PropTypes.func.isRequired,
  toggleFavorite:PropTypes.func.isRequired,
}

export default ContactPreview
