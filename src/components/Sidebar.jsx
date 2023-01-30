import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { IoMdArrowForward } from 'react-icons/io'
import { CartContext } from '../contexts/CartContext';
import { FiTrash2 } from "react-icons/fi";
import CartItem from './CartItem'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const {isOpen,handleClose} = useContext(SidebarContext)
    const {cart,clearCart,total,itemAmount} = useContext(CartContext)
  

  return <div className={`${isOpen ?'right-0' : '-right-full'}   w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-auto overflow-x-hidden`}>
    <div className='flex items-center justify-between py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>
        Shopping Bag ({itemAmount})
         <div className="cursor-pointer w-8 h-8 flex justify-center items-center" onClick={handleClose}>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
    </div>
    {/* h-[520px]  lg:h-[640px] გასასწორებელია */} 
    <div className='flex flex-col gap-y-2    border-b'>
      {cart.map((item) => {
      return (
       <CartItem item={item} key={item.id} />
       
      ) 
    })}
    </div>
    <div className=' flex flex-col gap-y-3 py-4 mt-4'>
      <div className=' flex w-full justify-between items-center'>
        <div className='uppercase font-semibold'>
          <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
        </div>
        {/* clear cart icon */}
        <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
          <FiTrash2 />
        </div>
      </div>
      <div>
        <Link to='/' className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium mb-2'>View cart</Link>
        <Link to='/' className='bg-primary text-white flex p-4 justify-center items-center  w-full font-medium'>Checkout</Link>
      </div>
    </div>
  </div>;
};

export default Sidebar;
