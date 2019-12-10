import React from 'react';
import FavoritiseContactButton from '../buttons/FavoritiseContactButton'
import EditContactButton from '../buttons/EditContactButton'
import DeleteContactButton from '../buttons/DeleteContactButton'
import GoBackButton from '../buttons/GoBackButton'

const CrudNavigation = (props) => {
  const path = props.match.path

  const deleteContact = (id) => {
    props.deleteContact(id)
  }

  return (
    <nav id="nav-crud">
      <GoBackButton className="contact--button"/>
      <div>
        {path === "/contacts/details/:id" && <FavoritiseContactButton isFavorite={props.isFavorite} className="contact--button"/>}
        {path === "/contacts/details/:id" && <EditContactButton id={props.id} className="contact--button"/>}
      </div>
      {path === "/contacts/edit/:id" && <DeleteContactButton id={props.id} deleteContact={deleteContact} className="contact--button"/>}
    </nav>
  )
}

export default CrudNavigation