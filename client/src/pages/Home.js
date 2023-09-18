import React from 'react';
import RecipeList from '../components/RecipeList';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../utils/queries';

import RecipeForm from './components/RecipeForm';

const Home = () => {
  const { loading, data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (

// if looged in add recipe form
            <>
            <RecipeForm />
            <RecipeList
              recipes={recipes}
              title="Current recipes!"
            />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
