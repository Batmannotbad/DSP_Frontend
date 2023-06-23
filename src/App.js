import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/register' element ={<RegisterPage/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
