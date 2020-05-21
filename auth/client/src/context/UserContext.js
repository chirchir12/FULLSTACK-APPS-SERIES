import React, { useEffect, createContext, useState } from 'react';
import moment from 'moment';

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
  const [error, setError] = useState({});
  const [isAuthicated, setisAuthenticated] = useState(
    !!JSON.parse(localStorage.getItem('user'))
  );

  // getProfile
  const fetchProfile = () => {
    fetch(`${BASE_URL}/user/profile`, {
      headers: authHeader(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('something went wrong');
        }
        return response.json();
      })
      .then((results) => {
        const { Profile } = results;
        setUserProfile({
          ...results,
          Profile: {
            ...Profile,
            dob: moment.utc(results.dob).local().format('YYYY-MM-DD'),
          },
        });
      })
      .catch((error) => setError(error));
  };

  const register = (user) => {
    fetch(`${BASE_URL}/auth/register`, {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((message) => console.log(message))
      .catch((error) => console.log(error));
  };
  // logout
  const logout = () => {
    localStorage.removeItem('user');
    setisAuthenticated(false);
  };
  // login
  const login = (user) => {
    fetch(`${BASE_URL}/auth/login`, {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('wrong credentials');
        }
        return response.json();
      })
      .then((userInfo) => {
        if (userInfo) {
          setUser(userInfo);
          setisAuthenticated(true);
          fetchProfile();
          setError({});
        } else {
          console.log('my user is ', loginUser);
          console.log('I am fully fucked men');
        }
      })
      .catch((error) => setError('wrong credentials'));
  };

  // updatePassword

  // updateProfile
  const updateProfile = (userProfileData) => {
    console.log('updating userprofile', userProfileData);
    fetch(`${BASE_URL}/user/profile/update`, {
      method: 'PUT',
      headers: authHeader(),
      body: JSON.stringify(userProfileData),
    })
      .then((response) => response.json())
      .then(() => {
        fetchProfile();
      })
      .catch((error) => console.log(error));
  };

  // side effects
  useEffect(() => {
    fetchProfile();
  }, []);
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
        logout,
        error,
        updateProfile,
        isAuthicated,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
