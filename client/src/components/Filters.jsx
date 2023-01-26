import React from 'react'

function Filters() {
  return (
    <>
      <button>Orden alfabetico</button>
      <button>Peso</button>
      <button>Origen</button>
      <select name="select">
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select>

    </>
  )
}

export default Filters