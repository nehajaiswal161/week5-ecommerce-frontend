import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    dispatch(login({ email: email }));
    navigate('/');
  };

  return (
    <div style={{ padding: '50px' }}>
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Enter email" 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
