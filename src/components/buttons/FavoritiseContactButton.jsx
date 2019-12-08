import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'

function FavoritiseContactButton(props) {
  return (
    <button className={props.className}>
      {
        props.isFavorite 
        ? 
          <FontAwesomeIcon icon={faHeartRegular} />
        :
          <FontAwesomeIcon icon={faHeartSolid} />
      }
    </button>
  )
}

export default FavoritiseContactButton