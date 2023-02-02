import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isActive, setIsActive] = useState(true) 
  const { isOpen,setIsOpen } = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  
  return ( 
  <header className={`${isActive ? 'bg-white p-8  shadow-md' : 'bg-none p-8'} h-12 fixed w-full z-10 transition-all`}>
    <div className='container mx-auto flex items-center justify-between h-full'>
   <Link to={'/ '}>
    <div>
      <h1 className='italic'>Logo</h1>
    </div>
   </Link>
    {/* cart */}
    <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative '>
    <BsBag className='text-2xl' />
    <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center'>
      {itemAmount}
    </div>
    </div>
       
    </div>
  </header>
  )
};

export default Header;
