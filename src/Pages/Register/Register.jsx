import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Register.css"

function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setFullname] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        name,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage(data.message);
      navigate('/login')
    } else {
      setMessage(data.message);
    }
  };

  return (
   
    <div className='signup-content'>
      <div className='signup'>
        <div className='page-title'>
          <h1 className='title'>NỀN TẢNG CHIA SẺ DỮ LIỆU</h1>
        </div>
        <form className='signup-form' onSubmit={handleRegister}>
          <h3 className='signup-title'>Đăng ký</h3>

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
              type='text'
              name='fullName'
              placeholder='Họ và tên'
              className='input-placeholder form-control'
              value={name}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div className='form-input'>
            <input
              type='password'
              name='password'
              placeholder='Mật khẩu'
              className='input-placeholder form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='new-password'
            />
          </div>

          <div className='form-input'>
            <input
              type='password'
              name='confirmPassword'
              placeholder='Xác nhận mật khẩu'
              className='input-placeholder form-control'
              autoComplete='new-password'
            />
          </div>

          <div className='btn-signup'>
            <button type='submit' className='btn btn-primary'>
              Đăng ký
            </button>
            {message && <p>{message}</p>}
          </div>

          <div className='login-option'>
            Bạn đã có tài khoản? <Link to='/login' className='link'>Đăng nhập</Link>
          </div>
        </form>
      </div>
    </div>
        );
        }

        export default RegisterPage;
