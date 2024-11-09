import React, { useState } from 'react'

const InputComponent = ({ onChange, label, placeholder, type, isRequered, valuee }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChange(newValue);
    };
    return (
        <div className='py-1'>
            <h1 for={label} className="mb-2 text-start text-sm font-semibold text-gray-900 dark:text-white">{label}</h1>
            <input type={type} value={valuee} required={isRequered} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} />
        </div>
    )
}

export default InputComponent
