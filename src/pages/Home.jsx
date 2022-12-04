import React from 'react'
import Recipes from '../components/Recipes'
import Priority from '../components/Priority'
import ToDoList from '../components/ToDoList'
import AddRecipe from '../components/AddRecipe'

const recipeList = ["coffee cake", "cornbread", "biscuits"]

function home() {
  return (
    <div>
      <ToDoList />
      <AddRecipe />
      <Priority />
      <Recipes data={recipeList}/>
    </div>
  )
}

export default home