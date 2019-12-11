const LocalStorage = () => {

  /**
   * Gets data from local storage or mocks contacts
   * @returns {Array}
   */
  const get = () => {
    let data = JSON.parse(localStorage.getItem('contacts'))
    return data
  }

  /**
   * Saves provided array into local storage
   * @param {Array} contacts
   */
  const save = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }

  return Object.freeze({ get, save })
}

export default LocalStorage