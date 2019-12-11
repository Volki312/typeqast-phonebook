import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'

const FavoritiseContactButton = (props) => {
  const handleClick = (event) => {
    props.toggleFavorite && props.toggleFavorite(props.id)
  }

  return (
    <button className={props.className} onClick={handleClick} style={{cursor: props.toggleFavorite === undefined && "default"}}>
      {
        props.isFavorite 
        ? 
          <FontAwesomeIcon icon={faHeartSolid} />
        :
          <FontAwesomeIcon icon={faHeartRegular} />
      }
    </button>
  )
}

export default FavoritiseContactButton