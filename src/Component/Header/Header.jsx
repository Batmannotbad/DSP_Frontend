import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, login } from '../../features/userSlice';
import { Link } from 'react-router-dom';
import "./Header.css";

const selectLoggedIn = state => state.user.loggedIn;
const selectFullname = state => state.user.fullname; // Thêm selector cho fullname

function Header() {
  const loggedIn = useSelector(selectLoggedIn);
  const fullname = useSelector(selectFullname); // Sử dụng selector fullname
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('userInfo');
  };

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const { username, password, fullname,email, userId } = JSON.parse(userInfo);
      dispatch(login({
        email,
        userId,
        username,
        password,
        fullname, 
        loggedIn: true,
      }));
    }
  }, [dispatch]);

  return (
    <nav className='navbar navbar-expand-md navbar-light bg-white px-5'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>DSP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-item-center gap-3">
            {loggedIn ? (
              <>
                <li className="nav-item">
                  <span className="nav-link user-name">
                    {fullname}
                  </span>
                </li>
                <li className="nav-item d-flex">
                  <button className="logout-btn p-1" onClick={handleLogout}>Đăng xuất</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link nav-btn" to="/login">Đăng nhập</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-btn" to="/register">Đăng ký</Link>
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
