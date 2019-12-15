import React from 'react'
import PropTypes from 'prop-types'
import FavoritiseContactButton from '../buttons/FavoritiseContactButton'
import EditContactButton from '../buttons/EditContactButton'
import DeleteContactButton from '../buttons/DeleteContactButton'
import GoBackButton from '../buttons/GoBackButton'

const CrudNavigation = props => {
  const { match, id, isFavorite } = props
  const deleteContact = () => props.deleteContact(id)

  return (
    <nav id="nav_crud">
      <GoBackButton className="nav--button" />
        {
        match.path === "/contacts/details/:id" && 
        <div>
          <FavoritiseContactButton isFavorite={isFavorite} className="nav--button" />
          <EditContactButton id={id} className="nav--button" />
        </div>
        }
      { match.path === "/contacts/edit/:id" && <DeleteContactButton deleteContact={deleteContact} className="nav--button" /> }
    </nav>
  )
}

CrudNavigation.defaultProps = {
  id: 0,
  isFavorite: false
}

CrudNavigation.propTypes = {
  match: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  deleteContact: PropTypes.func,
  isFavorite: PropTypes.bool.isRequired
}

export default CrudNavigation