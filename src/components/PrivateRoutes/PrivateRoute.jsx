import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = useSelector(state => state.auth.token);
  return token ? children : <Navigate to="/" state={location} />;
};

export default PrivateRoute;
