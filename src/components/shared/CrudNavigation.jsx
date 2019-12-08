import React from 'react';
import FavoritiseContactButton from '../buttons/FavoritiseContactButton'
import EditContactButton from '../buttons/EditContactButton'
import DeleteContactButton from '../buttons/DeleteContactButton'
import GoBackButton from '../buttons/GoBackButton'

class CrudNavigation extends React.Component {
  
  render() {
    const match = this.props.match

    return (
      <nav>
        <GoBackButton className="contact--button"/>
      	
          {match.path === "/contacts/details/:id" && <FavoritiseContactButton isFavorite={this.props.isFavorite} className="contact--button"/>}
          {match.path === "/contacts/details/:id" && <EditContactButton id={this.props.id} className="contact--button"/>}
          {match.path === "/contacts/edit/:id" && <DeleteContactButton className="contact--button"/>}
      </nav>
    )
  }
}

export default CrudNavigation