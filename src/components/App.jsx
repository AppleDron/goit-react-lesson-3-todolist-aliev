import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import NewsPage from './pages/NewsPage';
// import TodoPage from './pages/TodoPage';
import Layout from './Layout/Layout';
import ProductsPage from './pages/ProductPage';
import SignUpPage from './pages/SignUpPage';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './PrivateRoutes/PrivateRoute';
import PublicRoute from './PublicRoutes/PublicRoute';
// import LoginPage from './pages/LoginPage';
// import TodoDetails from './pages/TodoDetails';

const TodoDetails = lazy(() => import('./pages/TodoDetails'));
const TodoPage = lazy(() => import('./pages/TodoPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const App = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route
            path="todo"
            element={
              <PrivateRoute>
                <TodoPage />
              </PrivateRoute>
            }
          />
          <Route
            path="todo/:id"
            element={
              <PrivateRoute>
                <TodoDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="products"
            element={
              <PrivateRoute>
                <ProductsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <Suspense>
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            </Suspense>
          }
        />
        <Route
          path="/signUp"
          element={
            <Suspense>
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
