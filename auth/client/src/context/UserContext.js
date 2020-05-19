import React, { useEffect, createContext, useState } from 'react';

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

  // login

  // updatePassword

  // updateProfile

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
