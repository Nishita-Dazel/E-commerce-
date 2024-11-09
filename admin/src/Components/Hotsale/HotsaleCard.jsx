import React from 'react';
import { useState } from 'react';
import Edit from '../../icons/Edit';
import Remove from '../../icons/Remove';
import Dot from '../../icons/Dot';
import { NavLink } from 'react-router-dom';
import Modal from '../Input/Modal';
import Loading from '../../icons/Loading';
import InputComponent from '../Input/InputComponent';
import Button from '../Input/Button';

const HotsaleCard = ({ id, template_id, product_template }) => {
    const [show, setShow] = useState(false)
    const [modal, setModal] = useState(false)
    const [delet, setDelet] = useState(false)
    const [loading, setLoading] = useState(false)
    const [image_url, setImage_Url] = useState()
    const [value, setValue] = useState({
        id: id
    })


    const handleDelete = async () => {
        setLoading(true);
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:8050/api/delete/hotsale/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': token,
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        setLoading(true)
        console.log(data);
    };

    const handleUpdate = async (image_url) => {
        value.image_url = image_url;
        const token = localStorage.getItem('token');
        console.log("data", value);
        try {
            const response = await fetch('http://localhost:8050/api/update/carousel', {
                method: 'PATCH',
                headers: {
                    'authorization': token,
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(value),
            });

            const data = await response.json();
            // setIsDisable(false)
            console.log(data);
        } catch (error) {
            console.error('Error updating variant:', error);
        }
    }



    const handleSubmit = async () => {
        const formData = new FormData();
        if (image_url) {
            formData.append('image_url', image_url);
        } else {
            console.error("Image file is missing in the payload");
            return;
        }

        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://localhost:8050/api/upload/image', {
                method: 'POST',
                headers: {
                    'authorization': token,
                },
                body: formData,
            });

            const data = await response.json();
            if (data) {
                handleUpdate(data.image_url)
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }



    return (
        <div className='border rounded-md p-2 shadow-lg bg-white relative'>

            <div>
                <img src={product_template?.image_url} onClick={() => { }} alt='nfier' className='h-48 w-full cursor-pointer object-cover rounded m-auto' />
            </div>

            <div className={`absolute ${show ? "block" : "hidden"} bottom-8 right-3 bg-white p-2 rounded shadow-lg `}>
                {/* <button onClick={() => { setModal(!modal); setShow(!show) }} className='p-1 hover:text-red-300 w-full border rounded flex justify-center items-center text-xs gap-1'>
                    <Edit />Edit
                </button> */}
                <button onClick={() => { setDelet(!modal); setShow(!show) }} className='p-1 border rounded hover:text-red-300 flex justify-center items-center text-xs gap-1'>
                    <Remove />Delete
                </button>
            </div>

            <div className='flex justify-between pt-1 relative '>
                <h1 className='font-semibold'>{product_template?.name}</h1>
                <button onClick={() => setShow(!show)} className='hover:text-red-300'><Dot /></button>
            </div>


            {/* Update Modal */}
            <Modal size={"400px"} show={modal} handleClose={() => { setModal(false) }}>
                <div className='mt-5'>
                    <img src={product_template?.image_url} onClick={() => { }} alt='nfier' className='h-36 w-full cursor-pointer rounded m-auto' />
                </div>
                <InputComponent onChange={(e) => setValue({ ...value, name: e })} label={"Product Name"} placeholder={product_template?.name} type={""} isRequered={""} />
                <input accept="image/*" onChange={(e) => { setImage_Url(e.target.files[0]) }} type='file' />
                <Button className="block mx-auto" onClick={handleSubmit} isDisable={false} name={"Update"} />
            </Modal>


            {/* Delete modal */}
            <Modal show={delet} size={"300px"} handleClose={() => { setDelet(false) }}>
                <h1 className='text-center font-semibold text-xl pt-6 pb-3'>Are you sure to delete this?</h1>
                <div className='flex justify-around'>
                    <button onClick={() => setDelet(false)} className='border py-2 px-7 rounded border-red-500'>No</button>
                    <button onClick={handleDelete} className={`border border-red-500 rounded py-2 ${loading ? "px-7" : "px-5"}`}>
                        {
                            loading ? <Loading /> : "Delete"
                        }
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default HotsaleCard;