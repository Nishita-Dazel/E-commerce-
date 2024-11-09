import { NavLink, useNavigate, } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import logo from "../Logo/Mahlun.PNG"
import SmallSize from "./SmallSize";
import { addCart } from "../Redux/slices/CartSlice";
import { addAllDataanother, IsLogin } from "../Redux/slices/authSlice";



const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state)=>state?.auth?.login)
  const [searchData, setSearchData] = useState([]);
  const [contuct, setContuct] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState("")
  const length = useSelector(state => state?.cart?.data)


  const fetchCartData = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:8050/api/product/add/to/cart`, {
      method: "GET",
      headers: {
        "authorization": token,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const data = await response.json();
    if(data?.message === "Invalid token"){
      localStorage.setItem('token', null);
      dispatch(IsLogin(true));
    }
    dispatch(addCart(data.items))

  }

  const fetchUserData = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`http://localhost:8050/api/get/single/users`, {
            method: "GET",
            headers: {
                "authorization": token,
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        dispatch(addAllDataanother(data?.items))
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(IsLogin(true));
    } else {
      dispatch(IsLogin(false));
    }

    fetchCartData();
    fetchUserData()
  }, [])


  const fetchSearchData = async (value) => {
    if (value) {
      const response = await fetch(`http://localhost:8050/api/get/product/search/${value}`)
      const data = await response.json();
      setSearchData(data.items);

    } else {
      setSearchData([]);

    }
  }


  return (
    <div className="sticky top-0 z-50 shadow">
      {searchData.length > 0 && <div onClick={() => { setSearchData([]) }} className="h-screen absolute top-0 left-0 right-0 bottom-0 opacity-0" />}


      <div className="sticky bg-white top-0 z-50">

        <div className="grid grid-cols-12 mx-auto sticky top-0 z-50 w-full lg:w-[96%] bg-white">

          <div className="grid col-span-6 lg:col-span-3">
            <NavLink to="/" className={`flex justify-start items-center gap-2 font-bold text-3xl text-orange-400 py-2 pl-2`}>
              <img alt="" className="h-12" src={logo} />
            </NavLink>
          </div>


          {/* 2nd div */}
          <div className="col-span-4 hidden my-auto w-full mx-auto lg:block">
            <ul className="flex mx-auto  gap-2 xl:gap-4 text-sm lg:text-md font-bold">

              <li className="">
                <NavLink to="/allproduct" className={`pb-8`}>Accessories</NavLink>
              </li>

              <li>
                <div className="mx-auto"><NavLink to="/offer" onClick={(e) => { setSelect("Home") }} className={``}>Offer</NavLink></div>
              </li>


              <li>
                <div className="mx-auto">
                  <div className="flex"><NavLink onMouseEnter={() => { setContuct(true) }} onMouseLeave={() => { setContuct(false) }} to="/Contact" className={``}>Support</NavLink><Icon onClick={() => { setContuct(!contuct) }} icon="ep:arrow-down" className={`transition-transform mt-1 cursor-pointer ml-1 duration-300 ${contuct ? "rotate-180" : "rotate-0"}`} /></div>
                  <div onMouseEnter={() => { setContuct(true) }} onMouseLeave={() => { setContuct(false) }} className={`absolute shadow-xl bg-white text-black p-4 rounded ${contuct ? "block" : "hidden"}`}>
                    <ul>
                      <li><NavLink to="/liveChat" onClick={() => { setOpen(!contuct) }} className="flex py-1 text-sm rounded-lg">Chat With Us</NavLink></li>
                      <li> <NavLink to="/productrequest" onClick={() => { setOpen(!contuct) }} className="flex text-sm py-1 rounded-lg">Product Request</NavLink> </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <NavLink to="/about" className={`${select === "Profile" && "border-b-2 border-red-500"}`}>About Us</NavLink>
              </li>
            </ul>

          </div>


          {/* 3rd div */}
          <div className="hidden lg:block w-full col-span-3 my-auto relative">
            <div className="flex ml-[10%] w-[90%]">
              <input type="text" placeholder="Search for Products" onChange={(e) => { fetchSearchData(e.target.value) }} className="my-2 rounded border-2 p-1 w-full focus:outline-none" />
              <button onClick={fetchSearchData} className="my-2 rounded-r bg-[#06D889] text-white"><Icon icon="iconamoon:search" width="22px" className="mx-4" /></button>
            </div>
            <div className='absolute left-[10%] w-[350px] bg-white'>

              {
                searchData.map((item) => {
                  return <div className='flex justify-start items-start gap-3 font-semibold text-lg border-b-[1px] py-1'>
                    <img src={item.image_url} alt='jnvfg' className='h-12 w-12 rounded' />
                    <div>
                      <NavLink to={`product/details/${item.id}`} onClick={() => { setSearchData([]) }}>{item.name}</NavLink>
                    </div>
                  </div>
                })
              }
            </div>


          </div>


          {/* 4th div */}
          <div className="col-span-6 lg:col-span-2 mr-3 ">
            <div className="flex justify-end items-center gap-2 my-auto h-full">
              <div className="hidden lg:block">
                {auth ? <NavLink to='/profile' className='font-bold text-sm xl:text-md'>My Account</NavLink> : <NavLink to={`/login`} className='font-semibold mt-1 float-right text-sm lg:text-md '>LOGIN</NavLink>}
              </div>
              <NavLink to="/cart" className='font-bold text-md  float-right px-1 text-black'><span className="float-right text-right">({length?.length})</span><Icon icon="bytesize:cart" width="25px" className="float-right px-1 my-auto" /></NavLink>
            </div>
          </div>
        </div>



        {/* Small size */}
        <div className={`absolute lg:static transition-all font-bold ease-in duration-700 top-[43px] text-white  lg:hidden w-full h-[100vh] py-3 pr-3 left-0 space-x-2 space-y-2 ${open1 ? "left-0" : "left-[-750px]"}`}>
          <div className="flex w-full">
            <div className="w-[60%] h-screen bg-[#06BACC]">
              <SmallSize onChange={(value) => { setOpen1(!open1) }} />
            </div>
            <div onClick={() => setOpen1(!open1)} className="w-[35%] h-screen  opacity-30">

            </div>
          </div>
        </div>



      </div>



      <BottomMenu auth={auth} onClick={() => { setOpen1(!open1) }} />

    </div>
  )
};

export default Header;




const BottomMenu = ({ auth, onClick }) => {
  const goTo = useNavigate()
  return (
    <div className="flex justify-between items-center bg-white shadow-xl fixed bottom-0 lg:hidden px-3 w-full">
      <div>
        <Icon onClick={() => { goTo("/") }} icon="bi:shop" width="25px" className="lg:hidden cursor-pointer mx-auto mt-1" />
        <p className="text-xs ">Shop</p>
      </div>
      <div>
        {
          auth ? <Icon onClick={() => { goTo("/profile") }} icon="line-md:account" width="25px" className="lg:hidden cursor-pointer mt-1 mx-auto" /> : <Icon onClick={() => { setToggle(!toggle) }} icon="line-md:account" width="25px" className="lg:hidden cursor-pointer mt-1 mx-auto" />
        }
        <p className="text-xs ">Account</p>
      </div>

      <div>

        <h1 className="flex text-center"><Icon onClick={() => { goTo("/cart") }} icon="bytesize:cart" width="28px" className="lg:hidden mx-auto cursor-pointer mt-1" />({length.length})</h1>
        <p className="text-xs ml-1">Cart</p>
      </div>

      <div>
        <Icon onClick={onClick} icon="ep:menu" width="25px" className="lg:hidden cursor-pointer mx-auto mt-1" />
        <p className="text-xs ">Menu</p>
      </div>
    </div>
  )
}