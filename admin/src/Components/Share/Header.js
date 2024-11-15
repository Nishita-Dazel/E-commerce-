import { NavLink, useNavigate, } from "react-router-dom";
import { useState } from "react";
import logo from "../Logo/Mahlun.PNG"
import Notification from "../../icons/Notification";
import MessageBar from "./MessageBar";


const Header = ({auth}) => {


  return (
    <div className="sticky top-0 z-50 shadow">

      <div className="flex justify-between items-center sticky top-0 z-50 w-[98%] mx-auto bg-white py-1">

        <div className="">
          <NavLink className={`font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#FB923C] py-2`} to="/">DAZEL</NavLink>
        </div>


        <div className="flex justify-end items-center gap-3">
          {auth ? <NavLink to='/profile' className='font-bold text-sm xl:text-md mr-2'>My Account</NavLink> : <NavLink to={`/`} className='font-semibold text-sm lg:text-md'>LOGIN</NavLink>}
          <Notification />
        </div>
      </div>

      <MessageBar userId={1} />
    </div >
  )
};

export default Header;

