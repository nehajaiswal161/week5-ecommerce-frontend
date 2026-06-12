import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '15px 40px', 
      backgroundColor: '#ffffff', 
      borderBottom: '1px solid #ddd' 
    }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: '#000', textDecoration: 'none', fontWeight: 'bold' }}>Products</Link>
        <Link to="/cart" style={{ color: '#000', textDecoration: 'none', fontWeight: 'bold' }}>Cart</Link>
      </div>
      <div>
        <Link to="/login" style={{ color: '#000', fontWeight: 'bold', textDecoration: 'none' }}>Sign In</Link>
      </div>
    </nav>
  );
};
export default Navbar;
