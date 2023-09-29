import Counter from 'components/Counter/Counter';
import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div>Homepage</div>
      <Counter />
    </>
  );
};

export default HomePage;
