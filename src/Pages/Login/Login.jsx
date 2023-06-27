import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./login.css";
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          username, 
          password})
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        dispatch(login({
          username: username,
          password: password,
          loggedIn: true,
        }))
        setMessage(data.message);
        console.log("Success");
        // Lưu thông tin đăng nhập vào localStorage
        localStorage.setItem('userInfo', JSON.stringify({ username, password }));
        navigate("/");
      } else {
        setMessage(data.message);
        console.log("fail")
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='login-content'>
      <div className='login'>
        <div className='page-title'>
          <h1 className='title'>NỀN TẢNG CHIA SẺ DỮ LIỆU</h1>
        </div>
       
          <form className='login-form' onSubmit={handleFormSubmit} >
            <h3 className='login-title'>Đăng nhập</h3>

            <div className='form-input'>
              <input
                type='text'
                name='username'
                placeholder='Tên đăng nhập'
                className='input-placeholder form-control'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className='form-input'>
              <input
                type='password'
                name='current-password'
                placeholder='Mật khẩu'
                className='input-placeholder form-control'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='form-checkbox'>
              <input type='checkbox' name='remember' id='check' className='box' />
              <label htmlFor='check' className='remember-box'>
                Nhớ mật khẩu
              </label>
            </div>

            <div className='forgot-password'>
              <p className='forgot-password-content'>Quên mật khẩu?</p>
            </div>

            <div className='btn-login'>
              <button type='submit' className='btn btn-primary'>
                Đăng nhập
              </button>
              {message && <p>{message}</p>}
            </div>

            <div className='signup-option'>
              Chưa có tài khoản? <Link to='/register' className='link'>Đăng ký ngay</Link>
            </div>
          </form>
      </div>
    </div>
  );
}

export default Login;
