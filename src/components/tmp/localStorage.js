const LocalStorage = () => {

  /**
   * Gets data from local storage or mocks contacts
   * @returns {Array}
   */
  const get = () => {
    let data = JSON.parse(localStorage.getItem('contacts'));
    return data;
  }

  /**
   * Saves provided array into local storage
   * @param {Array} array
   */
  const save = (array) => {
    localStorage.setItem('contacts', JSON.stringify(array));
  }

  return Object.freeze({ get, save });
}

export default LocalStorage;