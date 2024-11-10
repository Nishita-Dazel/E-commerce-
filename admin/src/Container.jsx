import React, { useEffect, useState } from 'react';
import data from '../src/Components/Dashboard/data.json';
import { NavLink } from 'react-router-dom';
import { Icon } from "@iconify/react";
import Logo from '../src/Components/Logo/userProfile.png'

const Container = ({ children }) => {

    const [userInfo, setUserInfo] = useState({})

    const GetUserInfo = async () => {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:8050/api/get/single/users`, {
            method: 'GET',
            headers: {
                "authorization": token,
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        setUserInfo(data?.items);
    }

    useEffect(() => {
        GetUserInfo()
    }, [])

    return (
        <div className='flex bg-gray-100 h-screen overflow-hidden sticky top-12'>
            <div className='bg-white border-r-[1px] w-[400px] sticky top-14'>
                <div className='p-5 h-screen overflow-y-auto'>
                    <div className='flex justify-start gap-3 items-center pb-5 border-b-2'>
                        <div>
                            <img src={userInfo ? userInfo?.image_url : Logo} className='h-[75px] w-[75px] rounded-full justify-start' alt='Profile' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>{userInfo?.first_name} {userInfo?.last_name}</h1>
                            <NavLink to={``} className='underline'>View Profile</NavLink>
                        </div>
                    </div>
                    <div className='pt-4 items-center'>
                        {data.map((item) => (
                            <NavLink key={item.id} to={`/${item.route}`} className='flex font-bold text-lg hover:bg-gray-200 rounded justify-start items-center gap-2 p-2'>
                                <Icon icon={item.icon} width='20px' />
                                {item.name}
                            </NavLink>
                        ))}


                        <NavLink to={``} onClick={() => { localStorage.setItem('token', '') }} className='font-bold text-lg hover:bg-gray-200 rounded flex justify-start items-center gap-2 p-2 w-full'>
                            <Icon icon={"uiw:logout"} width='20px' />
                            {'Logout'}
                        </NavLink>

                    </div>
                </div>
            </div>

            <div className='w-full bg-gray-100 overflow-y-auto pl-3 pt-4'>
                {children}
            </div>
        </div>
    );
};

export default Container;
