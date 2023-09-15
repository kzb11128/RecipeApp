import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPE } from '../utils/queries';
import RecipeList from '../Components/RecipeList';

const Home = () => {
  const { loading, data } = useQuery(QUERY_RECIPE);

  const recipes = data?.recipes || [];

  return (
    <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">
            <h1>Welcome to Foodium!</h1>
        </div>
        <div className="card-body m-5">
            <h2>Here is a list of recipes for your tasting pleasure!</h2>
            {loading ? (
                <div>Loading...</div>
                ) : (
                <RecipeList
                recipes={recipes}
                />
                )}
        </div>
        <div className="card-footer text-center m-3">
        </div>
    </div>
  );
};

export default Home;
