import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div 
    style={{
        backgroundImage: `url(https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/bg/404.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
    }}
    >
        <img src="	https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/shapes/shape-11-06.png" alt="" className=' absolute top-[160px] left-[100px] max-xl:hidden' />

        <img src="	https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/shapes/shape-05-06.png" alt="" className=' absolute top-[500px] right-[200px] max-xl:hidden' />

        <img src="	https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/shapes/shape-03-10.png" alt="" className=' absolute bottom-10 left-[150px] max-xl:hidden' />


        <div className=' h-auto max-w-full flex justify-center'>
            <img src="	https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/404.png" alt="" />
        </div>

        <div className=' flex flex-col justify-center items-center pt-16 pb-32 gap-10'>
            <h1 className=' text-4xl font-bold tracking-wide max-[460px]:text-3xl max-[390px]:text-2xl'>Oops... Page Not Found!</h1>
            <p className=' text-gray-500 tracking-wide w-[90%] text-center'>Please return to the site's homepage, It looks like nothing was found at this location.</p>
            
            <Link to='/'>
                <button className=" hover:bg-[#231F40] duration-300 flex justify-center items-center gap-2 py-[15px] px-[31px] bg-[#525FE1] text-white tracking-wider rounded">
                <span className=" text-base font-semibold">
                    Back To Home
                </span>
                <span className="flex items-center font-bold">
                    <AiOutlineArrowRight className="ml-1" />
                </span>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Error