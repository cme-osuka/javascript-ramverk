import React from 'react'

function InputBox(props) {

  function handleChange(event) {
    const value = event.target.value;
    props.setInputText(value);
  }

  return (
    <div>
      <p>{props.inputText}</p>
      <input type="text" onChange={handleChange} value={props.inputText} />
      <button onClick={props.createActivity}>Lägg till</button>
    </div>
  )
}

export default InputBox