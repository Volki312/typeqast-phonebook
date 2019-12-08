import React from 'react'

const FilterContactsInput = (props) => {
  const handleChange = (e) => {
    props.updateFilter(e.target.value);
  }

  return (
    <input type="text" name="filter" placeholder="Search" onChange={handleChange} value={props.value} className="nav--input" />
  )
}

export default FilterContactsInput