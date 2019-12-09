import React from 'react'

const Footer = (props) => {
  return (
    !props.isFiltered &&
    <footer>
      <p className="contacts--info">{props.numberOfContacts} contacts total in total</p>
    </footer>
  )
}

export default Footer