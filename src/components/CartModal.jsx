// In src/components/CartModal.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
// import { SocialIcon } from 'react-social-icons';
import WhatsAppCheckout from './WhatsAppCheckout';


const CartModal = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart, updateQuantity } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out" style={{ transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)' }}>
        <div className="p-6">
          <button onClick={toggleCart} className="absolute top-4 right-4 text-gray-600 hover:text-coral-red">
            <FaTimes size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center mb-4">
                  <div>
                    <span className="font-semibold">{item.name}</span>
                    <div className="flex items-center mt-2">
                      <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="text-gray-500 hover:text-coral-red">
                        <FaMinus size={16} />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-500 hover:text-coral-red">
                        <FaPlus size={16} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                    <button onClick={() => removeFromCart(item.id)} className="ml-2 text-gray-500 hover:text-coral-red">
                      <FaTimes size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-7">
            <button className="w-full bg-coral-red text-white px-4 py-2 rounded">
              Checkout
            </button>
            <WhatsAppCheckout 
              cart={cartItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;