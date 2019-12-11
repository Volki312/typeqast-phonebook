import React from 'react'

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
    <label> numbers
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
                className="number"
                onChange={handleInputChange}
                maxLength="20"
                required
              />
              <input
                type="text"
                placeholder="Label"
                name={labelId}
                data-id={i}
                id={labelId}
                value={number.label} 
                className="label"
                onChange={handleInputChange}
                maxLength="20"
                required
              />
              <button onClick={removeNumber}>X</button>
            </div>
          )
        })
      }
    <button onClick={addNumber}>Add number</button>
    </label>
  )
}

export default NumberInputs