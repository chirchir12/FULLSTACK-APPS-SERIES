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
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem('user'))
  );
  const [isAuthicated, setisAuthenticated] = useState(
    !!JSON.parse(localStorage.getItem('user'))
  );

  console.log(
    'fucking user is log?',
    !!JSON.parse(localStorage.getItem('user'))
  );

  // getProfile
  const fetchProfile = () => {
    fetch(`${BASE_URL}/user/profile`, { headers: authHeader() })
      .then((response) => response.json())
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
      .catch((error) => console.log(error));
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
      .then((response) => response.json())
      .then((userInfo) => {
        fetchProfile();
        setUser(userInfo);
        setisAuthenticated(true);
      })
      .catch((error) => console.log(error));
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
        updateProfile,
        isAuthicated,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
