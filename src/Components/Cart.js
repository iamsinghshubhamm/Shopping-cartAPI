import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const cart  = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, cur) => acc + cur.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto my-5 p-3">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="text-xl font-semibold mb-4">Summary</h4>
            <p className="mb-2">
              <span className="font-semibold">Total Items:</span> {cart.length}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Total Amount:</span> ${totalAmount.toFixed(2)}
            </p>
            <Link to="/checkout">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Checkout Now
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Your Cart is Empty</h1>
          <Link to="/">
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
