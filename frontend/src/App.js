import './App.css';
import About from './components/About';
import Admin from './components/Admin';
import Category from './components/Category';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Alert from './components/Alert';
import { useState } from 'react';
import MenuState from './context/menuData/MenuState';
import ProtectedRoute from "./ProtectedRoute";
import CategoryPage from './components/CategoryPage';
import OrderNow from './components/OrderNow';
import BuyNow from './components/BuyNow';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  return (
    <MenuState>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories/:restaurantName" element={<CategoryPage />} />
            <Route path="/buy-now" element={<BuyNow/>} />  
            <Route path="/order/:restaurantName" element={<OrderNow showAlert={showAlert} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/category" element={<Category showAlert={showAlert} />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/admin" element={<Admin />} /> */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/category" element={<Category showAlert={showAlert} />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </MenuState>
  );
}

export default App;
