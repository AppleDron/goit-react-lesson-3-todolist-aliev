import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { state } = useLocation();
  const token = useSelector(state => state.auth.token);
  return !token ? children : <Navigate to={state ? state : '/'} />;
};

export default PublicRoute;
