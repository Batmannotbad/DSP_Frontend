import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../Component/Header/Header';
import Dashboard from '../../Component/Dashboard/Dashboard';

function Home() {
  const loggedIn = useSelector((state) => state.loggedIn);

  return (
    <div >
      <Header />
      {loggedIn ? <Dashboard /> : <p>Bạn chưa đăng nhập</p>}
    </div>
  );
}

export default Home;
