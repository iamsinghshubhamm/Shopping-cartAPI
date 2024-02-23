import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { remove } from '../Redux/Slices/cartSlice'

const  CartItem = ({item}) => {
    const dispatch = useDispatch()
    const desc = item.description.substring(0,100)
  return (
    <div className='border-b border-gray-400 my-7 py-8'>
        <div className='flex'>
            <div className='w-[100px] h-[110px] mx-2 overflow-hidden '>
                <img src={item.image} className='w-[100px] h-[110px]' />
            </div>
            <div>
                <h1 className='font-bold'>{item.title}</h1>
                <h1>{desc}</h1>
                <div className='flex items-center justify-between'>
                    <p className='text-green-600'>{`$${item.price}`}</p>
                    <MdDelete className='bg-red-400 w-[25px] h-[25px] cursor-pointer text-sm rounded-full 'onClick={() => dispatch(remove(item.id))}/>
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem
