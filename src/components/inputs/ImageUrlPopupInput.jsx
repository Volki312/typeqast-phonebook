import React from 'react'

const ImageUrlPopupInput = (props) => {
  const handleInputChange = (event) => {
    props.handleInputChange(event)
  }

  const handleButtonClick = (event) => {
    props.togglePopup(event)
  }

  return (
    <div>
      <button onClick={handleButtonClick} style={{background: "url(" + (props.value || "http://placehold.it/64xd64") + ")"}}>Image url</button>
      {
        props.showPopup &&
        <div className="form--popup">
          <div className="popup--inner">
            <label>
              image url
              <input
                name="image"
                placeholder="Image url"
                type="url"
                value={props.value}
                onChange={handleInputChange}
              />
            </label>
            <button onClick={handleButtonClick}>finish</button>
          </div>
        </div>
      }
    </div>
  )
}

export default ImageUrlPopupInput