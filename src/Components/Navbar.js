import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector(state => state.cart)
  return (
    <div className='flex h-[60px] gap-3 justify-between items-center bg-gray-900 text-gray-50 px-10'>
        <Link to={'/'} className='text-green-500 font-bold text-2xl cursor-pointer'>
            ShoppingApp
        </Link>
        <div className='flex gap-5 items-center '>
            <Link to={'/'} className=' hover:text-blue-500 hover:font-semibold'>Home</Link>
            <div className='relative'>
            <Link to={'/cart'} className='hover:text-green-600 text-xl'><FaShoppingCart/></Link>
             <p className='text-gray-50 absolute -top-5 right-0 text-center text-sm bg-blue-500 rounded-full w-[18px] h-[18px]'>{cart.length}</p>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
