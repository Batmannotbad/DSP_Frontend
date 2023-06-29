import React from 'react';
import { useSelector } from 'react-redux';

function Profiles() {
  const user = useSelector(state => state.user);

  if (!user.loggedIn) {
    // Xử lý trường hợp người dùng chưa đăng nhập
    return <p>Vui lòng đăng nhập để xem thông tin người dùng.</p>;
  }

  return (
    <div>
      <h1>Thông tin người dùng</h1>
      <p>Username: {user.username}</p>
      <p>Full Name: {user.fullname}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profiles;
