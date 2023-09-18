import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div>
      <Navbar />
          <div>
            <Routes>
            <Route 
              path="/" 
              element={<Home />} 
              />
              <Route
              path="/users"
              element={<Users />}
              />
            </Routes>
          </div>       
      </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;
