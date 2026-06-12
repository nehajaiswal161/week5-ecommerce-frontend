import { useState } from 'react';
const Checkout = () => {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === "") {
        alert("Please enter your name!");
    } else {
        alert("Order Placed Successfully!");
    }
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} required />
        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
};
export default Checkout;
