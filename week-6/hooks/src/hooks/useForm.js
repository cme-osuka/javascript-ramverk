import { useState } from "react";

function useForm(initialState = {}, onSubmit) {
  const [formData, setFormData] = useState(initialState);
  /**
   * State: 
   * {
   *  username: "",
   *  password: ""
   * }
   */
 
  function handleInputChange(event) {
    // Samma sak som 
    // const name = event.target.name;
    const { name, value } = event.target;
    //console.log(`${name}: ${value}`)
    setFormData({
      ...formData,
      [name]: value // username: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
  }

  return { formData, handleInputChange, handleSubmit }
}

export default useForm