import React from 'react'
import PropTypes from 'prop-types'
import FavoritiseContactButton from '../buttons/FavoritiseContactButton'
import EditContactButton from '../buttons/EditContactButton'
import DeleteContactButton from '../buttons/DeleteContactButton'
import GoBackButton from '../buttons/GoBackButton'

const CrudNavigation = (props) => {
  const { match, id, isFavorite } = props
  const deleteContact = () => props.deleteContact(id)

  return (
    <nav id="nav_crud">
      <GoBackButton />
        {
        match.path === "/contacts/details/:id" && 
        <div>
          <FavoritiseContactButton isFavorite={isFavorite} />
          <EditContactButton id={id} />
        </div>
        }
      { match.path === "/contacts/edit/:id" && <DeleteContactButton deleteContact={deleteContact} /> }
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