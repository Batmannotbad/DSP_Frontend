import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Dashboard from './Component/Dashboard/Dashboard';
import Profile from './Pages/Profile/Profile';
import { useSelector } from 'react-redux';
function App() {
  const isLoggedIn = Boolean (useSelector((state)=> state.loggedIn));
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/register' element ={<RegisterPage/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path='/profile/:id' element={isLoggedIn ? <Profile/> : <Navigate to ='/login'/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
