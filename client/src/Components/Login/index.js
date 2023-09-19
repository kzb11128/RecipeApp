import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
  
    try {
      const { data } = await loginMutation({
        variables: { username, password },
      });
  
      // Handle the response, e.g., redirect to a new page on successful login
      if (data.login) {
        // Redirect or perform any other actions on successful login
        console.log('Login successful!');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  

  const loginUser = async (username, password) => {
    try {
      // Make a POST request to the login endpoint
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Send the username and password in the request body as JSON
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      // Check if the response is not successful (HTTP status code other than 2xx)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the response as JSON
      const data = await response.json();
  
      // Return a success status and the response data
      return {
        success: true,
        data,
      };
    } catch (error) {
      // Handle any errors that occur during the fetch or JSON parsing
      console.error('Error logging in:', error);
  
      // Return a failure status and an error message
      return {
        success: false,
        error: 'Error logging in',
      };
    }
  };
  

  
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-green-700 underline">
                   Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="username"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#home"
                        className="text-xs text-green-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#home"
                        className="font-medium text-green-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
