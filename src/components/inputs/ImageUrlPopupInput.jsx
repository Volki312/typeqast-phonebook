import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faLink } from '@fortawesome/free-solid-svg-icons'

const ImageUrlPopupInput = props => {
  const handleInputChange = event => props.handleInputChange(event)
  const handleButtonClick = event => props.togglePopup(event)

  return (
    <div style={{display: "flex"}}>
      <button 
        onClick={handleButtonClick} 
        style={{backgroundImage: `url(${props.value || "https://i.ibb.co/80WvdvX/placeholder.png"})`, backgroundSize: "cover"}} 
        className="form--image"
      >
        <FontAwesomeIcon icon={faUpload} />
      </button>
      {
        props.showPopup &&
        <div className="form--popup">
          <div className="popup--inner">
            <label className="form--label popup--label">
            <FontAwesomeIcon icon={faLink} className="label--fa" />
            <p>image url</p><br/>
            <input
              name="image"
              placeholder="Image url"
              type="url"
              value={props.value}
              onChange={handleInputChange}
              className="form--input popup--input"
            />
            </label>
            <button onClick={handleButtonClick} className="popup--button">finish</button>
          </div>
        </div>
      }
    </div>
  )
}

ImageUrlPopupInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  togglePopup: PropTypes.func.isRequired,
  showPopup: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
}

export default ImageUrlPopupInput