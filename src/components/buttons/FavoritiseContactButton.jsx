import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'

const FavoritiseContactButton = props => {
  const toggleFavorite = event => !!props.toggleFavorite && props.toggleFavorite(props.id)

  return (
    <button className={props.className} onClick={toggleFavorite} style={{cursor: !props.toggleFavorite && "default"}}>
      { props.isFavorite ? <FontAwesomeIcon icon={faHeartSolid} /> : <FontAwesomeIcon icon={faHeartRegular} /> }
    </button>
  )
}

FavoritiseContactButton.propTypes = {
  className: PropTypes.string,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func
}

export default FavoritiseContactButton