import React, { useState, useEffect } from 'react';

const Notification = () => {
    const [data, setData] = useState([]);
    const getOrder = async () => {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:8050/api/get/order`, {
            method: 'GET',
            headers: {
                "authorization": token,
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json()
        setData(data.items)
    }
    useEffect(() => {
        getOrder()
    }, [])
    return (
        <div>
            Notification

            {data.map((item,i) => {
                return <div key={i} className='bg-white p-2 rounded-md m-1'>
                    <h1>{item?.name} is orderd {item?.product_product.name}</h1>
                </div>
            })}
        </div>
    );
};

export default Notification;