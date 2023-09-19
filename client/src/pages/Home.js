import React from 'react';
import RecipeList from '../Components/RecipeList';
// import Signup from "../pages/Signup"
// import Footer from "../Components/Footer"
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [];

  return (
    <div className="mb-auto">
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
            <RecipeList
              recipes={recipes}
              title="Current Recipes"
            />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
