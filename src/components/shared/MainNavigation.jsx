import React from 'react'
import FilterContactsInput from './FilterContactsInput'
import { NavLink } from 'react-router-dom'

const MainNavigation = (props) => {
  const filter = props.filter

  const updateFilter = (updatedFilter) => {
    props.updateFilter(updatedFilter);
  }

  return (
      <nav id="nav">
        <div className="nav--links">
          <NavLink exact to={"/contacts/all"} className="nav--link">All contacts</NavLink>
          <NavLink exact to={"/contacts/favorites"} className="nav--link nav--link-last">My favorites</NavLink>
        </div>
        <FilterContactsInput updateFilter={updateFilter} value={filter} />
      </nav>
  )
}

export default MainNavigation