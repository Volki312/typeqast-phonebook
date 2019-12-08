import React from 'react'

const Footer = (props) => {
  const filter = props.isFiltered
  const numberOfContacts = props.numberOfContacts

  return (
    !filter &&
    <footer>
      <p className="contacts--info">{numberOfContacts} contacts total in total</p>
    </footer>
  )
}

export default Footer