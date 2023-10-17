import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import NewsPage from './pages/NewsPage';
// import TodoPage from './pages/TodoPage';
import Layout from './Layout/Layout';
import ProductsPage from './pages/ProductPage';
import SignUpPage from './pages/SignUpPage';
import { useSelector } from 'react-redux';
// import LoginPage from './pages/LoginPage';
// import TodoDetails from './pages/TodoDetails';

const TodoDetails = lazy(() => import('./pages/TodoDetails'));
const TodoPage = lazy(() => import('./pages/TodoPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const App = () => {
  const token = useSelector(state => state.auth.token);
  console.log(token);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="todo/:id" element={<TodoDetails />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
      <Route
        path="/login"
        element={
          <Suspense>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="/signUp"
        element={
          <Suspense>
            <SignUpPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
