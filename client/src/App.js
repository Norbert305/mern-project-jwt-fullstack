import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <>
    <Router>
    <div className='container'>
      <Navbar />
       <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/register' element={<Register />}/>
       </Routes>
    </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
