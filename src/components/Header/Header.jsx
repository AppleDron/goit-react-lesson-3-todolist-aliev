import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/authSlice';
import { getProfileThunk } from 'redux/auth/authThunk';
import { unSetToken } from 'services/auth-services/auth-service';

const Header = ({ showModal }) => {
  const { profile, token } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {};

  const handleLogout = () => {
    dispatch(logOut());
    unSetToken();
  };

  return (
    <div className="navbar navbar-expand-lg bg-dark mb-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className="nav-link text-white "
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
            {token && (
              <>
                <NavLink className="nav-link text-white" to="/news">
                  News
                </NavLink>
                <NavLink className="nav-link text-white" to="/todo">
                  Todo
                </NavLink>
                <NavLink className="nav-link text-white" to="/products">
                  Products
                </NavLink>
              </>
            )}
          </div>
          {profile && <div className="  text-white">{profile.name}</div>}
        </div>
        <button className="btn btn-outline-success" onClick={showModal}>
          Open Modal
        </button>
        <button className="btn btn-outline-success">
          <NavLink className="nav-link text-white" to="/signup">
            SignUp
          </NavLink>
        </button>
        <button
          className="btn btn-outline-success"
          onClick={profile ? handleLogout : handleLogin}
        >
          <NavLink className="nav-link text-white" to="/login">
            {profile ? 'LogOut' : 'LogIn'}
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Header;
