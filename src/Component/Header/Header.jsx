import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout} from '../../features/userSlice';
import { Link } from 'react-router-dom';
import "./Header.css";

const selectLoggedIn = state => state.loggedIn;
const selectName = state => state.user.Name; 
const selectImg = state => state.user.Img;
const selectId = state => state.user.id;

function Header() {
  const loggedIn = useSelector(selectLoggedIn);
  const Name = useSelector(selectName); 
  const Img = useSelector(selectImg);
  const id = useSelector(selectId);
  const dispatch = useDispatch();



  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('userInfo');
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
            {loggedIn ? (
              <>
                <li className="nav-item">
                  <Link to={`/profile/${id}`} className="nav-link user-name">
                    {Name}
                  </Link>
                </li>
                <li className="nav-item user-groups">
                  <img src="https://i.pinimg.com/564x/cc/09/30/cc0930d6fe3404d982d00d20fec93cb2.jpg" alt="User Avatar" width="35" height="35" class="rounded-circle" />
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
