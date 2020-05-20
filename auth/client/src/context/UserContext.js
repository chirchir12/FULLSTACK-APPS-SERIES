import React, { useEffect, createContext, useState } from 'react';
const BASE_URL = 'http://localhost:5000/api';
export const UserContext = createContext();

function UserContextProvider({ props }) {
  const [registerUser, setRegisterUser] = useState({
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

  // register
  const fetchProfile = () => {
    fetch(`${BASE_URL}/user/profile`)
      .then((response) => response.json)
      .then((results) => {
        setUserProfile(results);
      })
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
        registerUser,
        setRegisterUser,
        loginUser,
        setLoginUser,
        setUserProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
