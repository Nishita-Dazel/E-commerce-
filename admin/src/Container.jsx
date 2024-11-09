import React from 'react';
import data from '../src/Components/Dashboard/data.json';
import { NavLink } from 'react-router-dom';
import { Icon } from "@iconify/react";
import Logo from '../src/Components/Logo/userProfile.png'

const Container = ({ children }) => {
    return (
        <div className='flex bg-gray-100 h-screen overflow-hidden sticky top-12'>
            <div className='bg-white border-r-[1px] w-[400px] sticky top-12'>
                <div className='p-5 h-screen overflow-y-auto'>
                    <div className='flex justify-start gap-3 items-center pb-5 border-b-2'>
                        <div>
                            <img src={Logo} className='h-[75px] w-[75px] rounded-full justify-start' alt='Profile' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>Mehedi Hasan</h1>
                            <h1 className='underline'>View Profile</h1>
                        </div>
                    </div>
                    <div className='pt-4 items-center'>
                        {data.map((item) => (
                            <NavLink key={item.id} to={`/${item.route}`} className='flex font-bold text-lg hover:bg-gray-200 rounded justify-start items-center gap-2 p-2'>
                                <Icon icon={item.icon} width='20px' />
                                {item.name}
                            </NavLink>
                        ))}


                        <button className='font-bold text-lg hover:bg-gray-200 rounded flex justify-start items-center gap-2 p-2 w-full'>
                            <Icon icon={"uiw:logout"} width='20px' />
                            {'Logout'}
                        </button>

                    </div>
                </div>
            </div>

            <div className='w-full bg-gray-100 overflow-y-auto pl-3'>
                {children}
            </div>
        </div>
    );
};

export default Container;
