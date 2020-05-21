import React, { useEffect, createContext, useState } from 'react';
import { setUser, authHeader } from '../services/userService';
const BASE_URL = 'http://localhost:5000/api';

export const UserContext = createContext();

function UserContextProvider(props) {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpassword: '',
  });
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });
  const [userProfile, setUserProfile] = useState({
    Profile: {},
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({});

  // getProfile
  const fetchProfile = () => {
    fetch(`${BASE_URL}/user/profile`, { headers: authHeader() })
      .then((response) => response.json())
      .then((results) => {
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
  const login = (user) => {
    fetch(`${BASE_URL}/auth/login`, {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((userInfo) => {
        fetchProfile();
        setUser(userInfo);
      })
      .catch((error) => setErrors(error));
  };

  // updatePassword

  // updateProfile
  const updateProfile = (userProfileData) => {
    fetch(`${BASE_URL}/auth/login`, {
      method: 'Post',
      headers: { 'Content-Type': 'application/json', authHeader() },
      body: JSON.stringify(userProfileData),
    })
      .then((response) => response.json())
      .then((userInfo) => {
        fetchProfile();
        setUser(userInfo);
      })
      .catch((error) => setErrors(error));
  };

  // side effects
  useEffect(() => {
    fetchProfile();
  }, [loginUser, userProfile]);
  return (
    <UserContext.Provider
      value={{
        userProfile,
        newUser,
        setNewUser,
        loginUser,
        setLoginUser,
        setUserProfile,
        register,
        login,
        errors,
        message,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
