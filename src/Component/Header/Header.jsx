import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import "./Header.css"

function Header() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className='navbar navbar-expand-md navbar-light bg-white px-5'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>DSP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-item-center gap-3">
            {user && user.loggedIn ? (
              <>
                <li className="nav-item">
                  <span className="nav-link user-name">
                    {user.username}
                  </span>
                </li>
                <li className="nav-item d-flex">
                  <button className="logout-btn p-1" onClick={handleLogout}>Đăng xuất</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link nav-btn" href="/login">Đăng nhập</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-btn" href="/register">Đăng ký</a>
                </li>
              </>
            )} 
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
