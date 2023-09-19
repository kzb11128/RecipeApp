import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import RecipeForm from './Components/RecipeForm';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div>
        <Header />
      <RecipeForm />
          <div>
            <Routes>
            <Route 
              path="/" 
              element={<Home />} 
              />
            </Routes>
          </div>       
      </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;
