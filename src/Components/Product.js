import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add, remove } from '../Redux/Slices/cartSlice';

const Product = ({ post }) => {
    const  cart  = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const desc = post.description.substring(0, 100)
    const title = post.title.substring(0, 20)
    return (
        <div className='w-[210px] h-[300px] m-4 border overflow-hidden flex flex-col justify-center items-center p-2 rounded-md border-gray-300 shadow-md '>
            <div className='mb-2'>
                <p className='text-[16px] font-semibold'>{title}</p>
            </div>
            <div className='mb-1'>
                <p className='text-[14px] text-gray-500'>{desc}</p>
            </div>
            <div className='mb-2'>
                <img src={post.image} alt={post.title} className='w-[100px] h-[100px] object-cover' />
            </div>
            <div className='flex gap-5 '>
                <p className='text-green-600'>{`$${post.price}`}</p>
                <button
                    className='bg-blue-500 text-white text-sm px-2 rounded-md hover:bg-blue-700'
                    onClick={() => {
                        
                        cart.some((p) => p.id === post.id) ? dispatch(remove(post.id)) : dispatch(add(post));
                    }}
                >
                    {cart.some((p) => p.id === post.id) ? 'Remove item' : 'Add to Cart'}
                </button>
            </div>

        </div>
    );
};

export default Product;
