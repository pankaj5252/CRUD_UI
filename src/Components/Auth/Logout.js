// src/Components/Auth/Logout.js
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };
  