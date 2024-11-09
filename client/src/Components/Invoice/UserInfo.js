import React from 'react'

const UserInfo = () => {
  return (
    <div className='grid grid-cols-2 my-5'>
                    <div>
                        <h1 className='font-bold text-xl uppercase'>Billed To:</h1>
                        <h1 className='font-semibold text-md'>Mehedi hasan</h1>
                        <h1>Mobile: 123456789</h1>
                        <h1>Address</h1>
                    </div>
                    <div>
                        <div className='text-end'>
                            <h1 className='text-lg font-semibold uppercase'>Invoice no: 1235</h1>
                            <h1 className='font-semibold'>12 june 2024</h1>
                        </div>
                    </div>
                </div>
  )
}

export default UserInfo
