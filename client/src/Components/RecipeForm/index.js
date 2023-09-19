import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_RECIPE } from '../../utils/mutations';
import Auth from '../../utils/auth';

const RecipeForm = () => {
    const [recipename, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [cookTime, setCookTime] = useState('');

    const [characterCount, setCharacterCount] = useState(0);

    const [addRecipe, { error }] = useMutation(ADD_RECIPE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addRecipe({
              variables: {
                  recipename,
                  ingredients,
                  instructions,
                  cookTime
              },
            });
      
            setRecipeName('');
            setIngredients('');
            setInstructions('');
            setCookTime('');

        } catch (err) {
            console.error(err);
          }
        };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
    <h1 className="text-3xl font-semibold text-center text-green-700 underline">
    Add a Recipe
    </h1>
    {Auth.loggedIn() ? (
    <>
        <form className="mt-6" onSubmit={handleFormSubmit}>
        <div className="mb-2">
        <label
            htmlFor="recipename"
            className="block text-sm font-semibold text-gray-800"
            >Recipe Name
        </label>
        <input
            placeholder="Add your recipe name..."
            id="recipename"
            value={recipename}
            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(event) => setRecipeName(event.target.value)}
        />
        </div>
        <div className="mb-2">
        <label
            htmlFor="ingredients"
            className="block text-sm font-semibold text-gray-800"
            >Ingredients
        </label>
        <input
            placeholder="Add the ingredients..."
            id="ingredients"
            value={ingredients}
            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(event) => setIngredients(event.target.value)}
        />
        </div>
        <div className="mb-2">
        <label
            htmlFor="instructions"
            className="block text-sm font-semibold text-gray-800"
            >Instructions
        </label>
        <input
            placeholder="Add the instructions..."
            id="instructions"
            value={instructions}
            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(event) => setInstructions(event.target.value)}
        />
        </div>
        <div className="mb-2">
        <label
            htmlFor="cookTime"
            className="block text-sm font-semibold text-gray-800"
            >Cooking Time
        </label>
        <input
            placeholder="The number of minutes for your recipe..."
            id="cookTime"
            value={cookTime}
            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={(event) => setCookTime(event.target.value)}
        />
        </div>
        <div className="mt-6">
        <button className="btn btn-info btn-block w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" type="submit">
        Add Recipe
        </button>
        </div>
        {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
                Something went wrong...
            </div>
            )}
        </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a recipe. Thank you{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
    </div>
  );
};

export default RecipeForm;