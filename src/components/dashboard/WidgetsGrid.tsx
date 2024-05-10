'use client';

import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'
import { IoAirplane, IoCart } from 'react-icons/io5'

export const WidgetsGrid = () => {
    const count = useAppSelector(state => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">

        <SimpleWidget 
          title={`${count}`} 
          label={'Contador'}  
          icon={<IoCart size={70} className='text-blue-600'/>} 
          subtitle='Productos en carrito' 
          href='/dashboard/counter' 
        /> 
    
    </div>
  )
}
