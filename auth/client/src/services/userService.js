//1 isAuthenticated

export const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user && user.token ? true : false;
};

//2. authHeader
export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return {
      Authorization: `Bearer ${user.token}`,
      'Content-Type': 'application/json',
    };
  }
  return {};
};

// logout
export const logout = () => {
  localStorage.removeItem('user');
};

export const setUser = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
};
