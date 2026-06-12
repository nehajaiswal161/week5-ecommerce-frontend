import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import React from 'react';
const Home = React.lazy(() => import('./pages/Home'));
const Cart = React.lazy(() => import('./components/Cart'));
function App() {
  return (
    <Router>
      <Navbar />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}
export default App;
