import React from 'react';

const Dot = ({ size = '20px', color = 'currentColor'}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className='hover:text-red-300 cursor-pointer'
            width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2" />
        </svg>
    )
}

export default Dot;