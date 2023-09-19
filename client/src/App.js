import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Footer from './Components/Footer';
import RecipeForm from './Components/RecipeForm';
import Login from './pages/Login';
import SingleRecipe from './pages/SingleRecipe';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="flex flex-col h-screen">
        <Header />
          <div className='mb-auto'>
            <Routes>
            <Route 
              path="/" 
              element={<Home />} 
              />
              <Route 
              path="/recipe/:recipeId" 
              element={<SingleRecipe />} 
              />
              <Route 
              path="/newrecipe" 
              element={<RecipeForm />} 
              />
              <Route 
              path="/signup" 
              element={<Signup />} 
              />
              <Route 
              path="/login"
              element={<Login />}
              />
            </Routes>
          </div>
          <Footer /> 
      </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;
