import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const FilterContactsInput = (props) => {
  const handleChange = (e) => {
    props.updateFilter(e.target.value);
  }

  return (
    <div className="nav--filter">
      <FontAwesomeIcon icon={faSearch} className="filter--icon" />
      <input type="text" name="filter" onChange={handleChange} value={props.value} className="filter--input" />
    </div>
  )
}

export default FilterContactsInput