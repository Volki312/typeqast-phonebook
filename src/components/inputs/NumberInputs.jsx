import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const NumberInputs = (props) => {

  const handleInputChange = (event) => {
    props.handleInputChange(event)
  }

  const removeNumber = (event) => {
    props.removeNumber(event)
  }

  const addNumber = (event) => {
    props.addNumber(event)
  }

  return (
    <label className="form--label"><FontAwesomeIcon icon={faMobileAlt} className="label--fa" />numbers<br/>
      {
        props.numbers.map((number, i)=> {
          const numberId = "number-" + i
          const labelId = "label-" + i
          return (
            <div key={i}>
              <input
                type="tel"
                placeholder="Number"
                name={numberId}
                data-id={i}
                id={numberId}
                value={number.number} 
                className="number form--input"
                onChange={handleInputChange}
                maxLength="20"
                required
              />
              <br/>
              <input
                type="text"
                placeholder="Label"
                name={labelId}
                data-id={i}
                id={labelId}
                value={number.label} 
                className="label form--input form--input-shorter"
                onChange={handleInputChange}
                maxLength="20"
                required
              />
              <button onClick={removeNumber} className="form--button form--button-remove">X</button>
            </div>
          )
        })
      }
    <button onClick={addNumber} className="form--button form--button-add">+</button>Add number
    </label>
  )
}

export default NumberInputs