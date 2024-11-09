import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import InputComponent from '../Input/InputComponent';


const Registration = () => {
  const [values, setValues] = useState({
    rules:['user']
  })
  const goto = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8050/api/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });
    const result = await response.json();
    alert(result.message)
    goto('/login')
  }



  return (
    <div className='bg-white flex justify-center items-center'>
      <div className='w-full md:w-[400px] py-10'>
        <div className="">
          <InputComponent onChange={(value) => { setValues({ ...values, first_name: value }) }} label={"First Name"} type={"text"} placeholder={"First Name"} />
          <InputComponent onChange={(value) => { setValues({ ...values, last_name: value }) }} label={"Last Name"} type={"text"} placeholder={"Last Name"} />
          <InputComponent onChange={(value) => { setValues({ ...values, username: value }) }} label={"Mobile"} type={"number"} placeholder={"Enter your mobile"} />
          <InputComponent onChange={(value) => { setValues({ ...values, email: value }) }} label={"Email"} type={"email"} placeholder={"Enter your email"} />
          <InputComponent onChange={(value) => { setValues({ ...values, password: value }) }} label={"Password"} type={"password"} placeholder={"Enter your password"} />
          <button onClick={handleSubmit} className="text-white  bg-blue-700 mt-8 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
        <NavLink to={`/login`} className="text-black block mt-10 mx-auto hover:text-[#FF0000] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</NavLink>
      </div>
    </div>

  )
}

export default Registration
