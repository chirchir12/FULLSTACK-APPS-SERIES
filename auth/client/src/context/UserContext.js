import React, { useEffect, createContext, useState } from 'react';

const BASE_URL = 'http://localhost:5000/api';

export const UserContext = createContext();

function UserContextProvider(props) {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });
  const [userProfile, setUserProfile] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({});

  // getProfile
  const fetchProfile = () => {
    return fetch(`${BASE_URL}/user/profile`)
      .then((response) => response.json())
      .then((results) => {
        console.log('results is', results);
        setUserProfile(results);
      })
      .catch((error) => setErrors(error));
  };

  const register = (user) => {
    fetch(`${BASE_URL}/auth/register`, {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((message) => setMessage(message))
      .catch((error) => setErrors(error));
  };
  // login

  // updatePassword

  // updateProfile
  // side effects
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <UserContext.Provider
      value={{
        userProfile,
        errors,
        newUser,
        setNewUser,
        loginUser,
        setLoginUser,
        setUserProfile,
        register,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
