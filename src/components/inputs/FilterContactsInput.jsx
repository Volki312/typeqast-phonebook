import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const FilterContactsInput = props => {
  const handleInputChange = event => props.handleInputChange(event.target.value)

  return (
    <div className="nav--filter">
      <FontAwesomeIcon icon={faSearch} className="filter--icon" />
      <label><input type="text" name="filter" onChange={handleInputChange} value={props.value} className="filter--input" /></label>
    </div>
  )
}

FilterContactsInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default FilterContactsInput