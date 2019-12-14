import React from 'react'
import PropTypes from 'prop-types'
import FavoritiseContactButton from '../buttons/FavoritiseContactButton'
import EditContactButton from '../buttons/EditContactButton'
import DeleteContactButton from '../buttons/DeleteContactButton'
import GoBackButton from '../buttons/GoBackButton'

const CrudNavigation = (props) => {
  const deleteContact = id => props.deleteContact(id)
  const path = props.match.path

  return (
    <nav id="nav-crud">
      <GoBackButton />
        {
        path === "/contacts/details/:id" && 
        <div>
          <FavoritiseContactButton isFavorite={props.isFavorite} />
          <EditContactButton id={props.id} />
        </div>
        }
      { path === "/contacts/edit/:id" && <DeleteContactButton id={props.id} deleteContact={deleteContact} /> }
    </nav>
  )
}

CrudNavigation.propTypes = {
  match: PropTypes.object.isRequired,
  id: PropTypes.number,
  deleteContact: PropTypes.func,
  isFavorite: PropTypes.bool
}

export default CrudNavigation