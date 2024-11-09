import React, { useState } from 'react';
import Edit from '../Input/Edit';
import TKicon from '../Input/TKicon';
import { NavLink } from 'react-router-dom';

const OrderCardMo = ({ item, i }) => {
    const sta = ['Pending', 'Confirm']

    const [stas, setStat] = useState(item?.status)

    const handleStatusChange = async (status) => {
        setStat(status)
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:8050/api/product/order/update`, {
            method: 'PATCH',
            headers: {
                'authorization': token,
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ id: item?.id, status: status }),
        });
        const data = await response.json();
    }
    return (
        <div key={i} className='p-2 w-full border-b-2 border-dashed'>
            <div className='flex justify-start items-start gap-3 w-full'>
                <div className='w-20'>
                    <img className='h-20 w-20 rounded mt-1' src={item?.product_product?.image_url} alt='afsg' />
                </div>
                <div className='w-full'>

                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold'>{item?.product_product?.name}</h1>
                        <NavLink to={`/product/feedback/${item?.product_product?.id}`}><Edit size='25px' /></NavLink>
                    </div>
                    {
                        item?.product_product?.attributes?.map((attr) => {
                            return <div key={attr.id} className='flex justify-between items-center'>
                                <h1 className='font-semibold text-xs'>{attr.name} :</h1>
                                <h1 className='text-xs'>{attr.value}</h1>
                            </div>
                        })
                    }

                    <div className='flex justify-between items-center text-xs'>
                        <h1 className='font-semibold'>Qty:</h1>
                        <h1>{item?.qty} pcs</h1>
                    </div>

                    <div className='flex justify-between items-center text-xs relative'>
                        <h1 className='font-semibold'>Price:</h1>
                        <h1 className='flex justify-end items-center gap-1 pr-3'>{item?.price}:00 <TKicon className='absolute -right-1' size={16} /></h1>
                    </div>
                    <div className='flex justify-between items-center text-xs'>
                        <h1 className='font-semibold'>Status:</h1>
                        {item?.status === "Confirm" ? <div>
                            {item?.status}
                        </div> : <div>
                            <select value={stas} onChange={(e) => { handleStatusChange(e.target.value); }} className="text-gray-900 text-sm cursor-pointer w-full py-2">
                                {sta.map((item, i) => {
                                    return <option key={i} value={item} className=''>{item}</option>
                                })}
                            </select>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCardMo;