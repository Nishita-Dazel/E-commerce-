import React from 'react'
import { Icon } from "@iconify/react";
import { NavLink } from 'react-router-dom'
import logo from '../Logo/Mahlun.PNG'
import MessageBar from './MessageBar';


const Footer = () => {
  return (
    <div className='bg-white relative'>

      <hr />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full lg:w-[95%] gap-4 mx-auto'>
        <div className='mb-6 pb-5 ml-5'>
          <div className='flex py-3 mt-5'>
            <h1 className='font-semibold text-2xl'>Dazel Shop</h1>
          </div>
          <p className="pt-1">DazelShop is an Online Shopping Mall in Bangladesh.
            We deliver various types of Unique & Quality products all over Bangladesh.</p>


          <div className='mt- '>
            <h1 className='font-semibold text-xl py-2'>See Our New updates</h1>
            <div className='flex gap-3'>
              <button className='text-white'><Icon icon="logos:facebook" width='27px' /></button>
              <button className='text-white'><Icon icon="skill-icons:instagram" width='27px' /></button>
              <button className='text-white'><Icon icon="logos:youtube-icon" width='33px' /></button>
              <button className='text-white'><Icon icon="skill-icons:twitter" width='27px' /></button>
            </div>
          </div>
        </div>



        <div className='ml-5'>
          <h1 className=' text-2xl text-black font-semibold pt-8'>Useful links</h1>
          <a href='dvb' className='hover:text-red-500 pt-4 flex py-1'>Renew Subscription</a>
          <a href='jiuds' className='hover:text-red-500 flex py-1'>Product Request</a>
          <a href='lknv' className='hover:text-red-500 flex py-1'>Renew Cupon</a>
          <a href='ofv' className='hover:text-red-500 flex py-1'>Super sale</a>
        </div>




        <div className=' ml-5'>
          <h1 className=' text-2xl text-black font-semibold pt-8 '>Importants</h1>
          <a href='jiuds' className='hover:text-red-500 flex pt-4 pb-1'>Case Study</a>
          <NavLink to="/liveChat" className='hover:text-red-500 flex py-1'>Live chat</NavLink>
          <a href='ofv' className='hover:text-red-500 flex py-1'>Our Team</a>
          <NavLink to="/privacypolicy" className='hover:text-red-500 flex py-1'>Privacy Policy</NavLink>
          {/* <NavLink className='hover:text-red-500 flex py-1'>Terms & Condition</NavLink> */}
        </div>



        <div className='ml-5'>
          <h1 className=' text-2xl font-semibold pt-8'>Offer Box</h1><br />
          <h1 className='text-sm'>Use coupon NEWDAY <br />Get 15/- Discount!</h1>
        </div>


      </div>
      <hr />
      <div className=' w-full md:w-[90%] lg:w-[70%] gap-4 mx-auto'>
        <div><h1 className='py-5 font-medium text-center'>© Copyright 2023 Dazel Shop | Design and Devolop By Nishita Dazel</h1></div>
        <div>
          
        </div>
      </div>
      <MessageBar/>


    </div>
  )
}

export default Footer
