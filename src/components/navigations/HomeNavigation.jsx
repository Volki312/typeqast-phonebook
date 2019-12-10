import React from 'react'
import FilterContactsInput from '../inputs/FilterContactsInput'
import { NavLink } from 'react-router-dom'

const HomeNavigation = (props) => {
  const filter = props.filter

  const updateFilter = (updatedFilter) => {
    props.updateFilter(updatedFilter);
  }

  return (
      <nav id="nav-home">
        <div className="nav--links">
          <NavLink exact to={"/contacts/all"} className="nav--link" activeClassName="nav--link-active">All contacts</NavLink>
          <NavLink exact to={"/contacts/favorites"} className="nav--link nav--link-last" activeClassName="nav--link-active">My favorites</NavLink>
        </div>
        <FilterContactsInput updateFilter={updateFilter} value={filter} />
      </nav>
  )
}

export default HomeNavigation