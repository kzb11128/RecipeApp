import React from 'react';
import RecipeList from '../Components/RecipeList';
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../utils/queries';

import RecipeForm from '../Components/RecipeForm';

const Home = () => {
  const { loading, data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [];

  return (
    <main className='flex flex-col h-screen'>
      <Header/>
      <div className="mb-auto">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (

// if loged in add recipe form
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
      <Footer/>
    </main>
  );
};

export default Home;
