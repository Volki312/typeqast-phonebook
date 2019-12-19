import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faLink } from '@fortawesome/free-solid-svg-icons'

class ImageUrlPopupInput extends React.Component {
  constructor() {
    super()
    this.state = {
      showPopup: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
  }

  static defaultProps  = {
    value: "https://i.ibb.co/80WvdvX/placeholder.png"
  }
  
  handleInputChange = event => this.handleInputChange(event)
  togglePopup = event => {
    event.preventDefault()
    this.setState(prevState => ({showPopup: !prevState.showPopup}))
  }

  render() {
    return (
      <div style={{display: "flex"}}>
        <button onClick={this.togglePopup} style={{backgroundImage: `url(${this.props.value})`, backgroundSize: "cover"}} className="form--image">
          <FontAwesomeIcon icon={faUpload} />
        </button>
        {
          this.state.showPopup &&
          <div className="form--popup">
            <div className="popup--inner">
              <label className="form--label popup--label">
              <FontAwesomeIcon icon={faLink} className="label--fa" />
              <p>image url</p><br/>
              <input
                name="image"
                placeholder="Image url"
                type="url"
                value={this.props.value}
                onChange={this.handleInputChange}
                className="form--input popup--input"
              />
              </label>
              <button onClick={this.togglePopup} className="popup--button">finish</button>
            </div>
          </div>
        }
      </div>
    )
  }
}

ImageUrlPopupInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default ImageUrlPopupInput