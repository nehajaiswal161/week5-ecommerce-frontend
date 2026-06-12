import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../redux/slices/cartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "auto" }}>
      <h1>Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              borderBottom: "1px solid #eee", 
              padding: "15px 0" 
            }}>
              <div>
                <h4 style={{ margin: '0' }}>{item.title}</h4>
                <p style={{ margin: '5px 0' }}>Price: ${item.price}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => dispatch(updateQuantity({id: item.id, quantity: Math.max(1, item.quantity - 1)}))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(updateQuantity({id: item.id, quantity: item.quantity + 1}))}>+</button>
                <button 
                  onClick={() => dispatch(removeFromCart(item.id))} 
                  style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px' }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div style={{ marginTop: "20px", textAlign: 'right' }}>
            <h2>Total Bill: ${total.toFixed(2)}</h2>
            <button 
              onClick={() => navigate('/checkout')} 
              style={{ 
                marginTop: '10px', 
                padding: '12px 25px', 
                backgroundColor: 'green', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer' 
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
