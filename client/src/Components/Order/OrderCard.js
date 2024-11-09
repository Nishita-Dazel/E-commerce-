import React, { useState } from 'react';
import Edit from '../Input/Edit';
import { NavLink } from 'react-router-dom';

const OrderCard = ({ item }) => {
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
        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" className="pl-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item?.product_product?.name}
            </th>
            <td className="px-3 py-2">
                <img className='h-12 w-12 rounded mt-1' src={item?.product_product?.image_url} alt='' />
            </td>
            <td className="px-3 py-3">
                {item?.product_product?.attributes?.map((attr) => {
                    return <div key={attr.id} className='flex items-center gap-1'>
                        <h1 className='font-semibold'>{attr.name} :</h1>
                        <h1 className='text-xs'>{attr.value}</h1>
                    </div>
                })}
            </td>
            <td className="px-3 py-4">
                {item.price * item?.qty}
            </td>
            <td className="px-3 py-4">
                {item?.qty}
            </td>
            <td className="px-3 py-4">
                {item?.status === "Confirm" ? <div>
                    {item?.status}
                </div> : <div>
                    <select value={stas} onChange={(e) => { handleStatusChange(e.target.value); }} className="text-gray-900 text-sm cursor-pointer w-full py-2">
                        {sta.map((item,i) => {
                            return <option key={i} value={item} className=''>{item}</option>
                        })}
                    </select>
                </div>}
            </td>
            <td className="px-3 py-4">
                {item.note}
            </td>
            <td className="pl-4 py-3 pr-5 flex justify-end gap-2 items-center">
                <NavLink className={'py-4'} to={`/product/feedback/${item?.product_product?.id}`}><Edit size='25px' className='my-auto' /></NavLink>
            </td>
        </tr>
    );
};

export default OrderCard;