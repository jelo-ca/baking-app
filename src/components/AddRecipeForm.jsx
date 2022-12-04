import React from 'react'
import { useState, useEffect } from 'react'

function AddRecipeForm() {
  const [ recipe, setRecipe ] = useState("");

  function handleChange(e) {
    setRecipe(e.target.value);
  }

  function handleSubmit(e) {
    //Prevents refresh (default())
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      placeholder="Add Recipe"
      onChange={handleChange}
      value={recipe} />
      <button type='submit'>Add</button>
    </form>
  )
}

export default AddRecipeForm