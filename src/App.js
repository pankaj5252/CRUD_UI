import './App.css';
import './style/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Dashboard from './Components/User/Dashboard';
import AddEmployee from './Components/User/AddEmployee';
import ShowEmployee from './Components/User/ShowEmployee';
import ProtectedRoute from './Components/ProtectedRoute';
import Profile from './Components/User/Profile';
// import EditEmployee from './Components/User/EditEmployee';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/user/dashboard' element={<Dashboard />} />
            <Route path='/user/AddEmployee' element={<AddEmployee />} />
            <Route path='/user/ShowEmployee' element={<ShowEmployee />} />
            <Route path='/user/profile' element={<Profile />} />
            {/* <Route path="/EditEmployee/:id" element={<EditEmployee />} /> */}
          </Route>
          <Route path="*" element={<h1 className='text-center'>Page not found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
