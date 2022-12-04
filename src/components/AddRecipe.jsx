import React from 'react'
import { useState, useEffect } from 'react'

function AddRecipe() {

    //hooks
    const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem("recipes")) || []);
    const [recipe, setRecipe] = useState({
        id: "",
        title: "",
        glutenFree: false,
        Priority: false,
        description: "",
        steps: [],
    });

    // saves recipes to localStorage
    // useEffect(() => {
    //     localStorage.setItem('recipes', JSON.stringify(recipes));
    //     }, [recipes]);

    function handleSubmit(e) {
        e.preventDefault()

        setRecipes([...recipes].concat(recipe))
        setRecipe({
            id: "",
            title: "",
            glutenFree: false,
            priority: false,
            description: "",
            steps: [],
        });
        console.log(recipes)
    }

    const handleChange = (e) => {
        const {id, value} = e.target;
        //line above is obj deconstructing 2 line below
        // const name = e.target.id;
        // const value = e.target.value;
        setRecipe((prev) => {
            return {...prev, [id]: value}
        })
    }

    function toggleCheckbox(id, category) {
        console.log(category)
        const updateCheckbox = [...recipes].map((recipe) => {
            if (recipe.id === id) {
                category = !category
            }
            return recipe
        })
        setRecipes(updateCheckbox)
    }

  return (
    <form onSubmit={handleSubmit}>
        <p>Recipe Name</p>
        <input 
        id='title'
        type="text"
        onChange={handleChange} 
        value={recipe.title} />

        <p>Description</p>
        <input type="text"
        id='description' 
        onChange={handleChange} 
        value={recipe.description} />

        <p>GF</p>
        <input 
        type="checkbox" 
        onChange={() => (recipe.glutenFree = !recipe.glutenFree)}
        checked={recipe.glutenFree} />

        <p>Proirity</p>
        <input 
        type="checkbox" 
        onChange={() => (recipe.priority = !recipe.priority)}
        checked={recipe.priority} />
        <button type='submit'>Add Recipe</button>
    </form>
  )
}  
export default AddRecipe