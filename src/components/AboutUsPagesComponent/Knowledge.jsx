import React from 'react'
import "./Knowledge.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { Link } from 'react-router-dom';

const Knowledge = () => {
  return (
    <div className=' mt-28 max-xl:mt-20'>
        <div className=' flex justify-evenly item-center max-xl:flex-wrap max-xl:justify-normal max-xl:gap-8'>
            <div className=' relative w-[50%] max-xl:w-auto'>
                <div className=' relative'>
                        <img src="	https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/about-image-01-2.png"  alt=""  className='circle-shadow2 pl-10 max-xl:px-5 relative z-10' />
                        <div className=' donut absolute top-[330px] left-[50px] z-0 max-xl:hidden'></div>

                        <div className='max-xl:hidden'>
                        <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/about-image-02-2.png"
                        className=' top-[260px] right-[100px] absolute circle-shadow3 z-30' alt="" />
                        <div className="shape absolute w-[270px] h-[270px] top-[270px] right-[80px] z-20 "></div>
                        </div>
                </div>

                <div className=' bg-[#fff] w-[170px] h-[170px] rounded-full relative circle-shadow top-[-420px] left-[-30px] z-10 max-xl:hidden'>
                    <div className=' absolute top-[40px] left-[50px] text-center'>
                        <p className=' text-[#525FE1] font-bold text-3xl'>2.98</p>
                        <p className=' font-bold text-gray-600'>Finished</p>
                        <p className=' font-bold text-gray-600'>Sessions</p>
                    </div>
                </div>

                

            </div>

            <div className=' w-[50%] max-xl:w-auto max-xl:pl-5'>
                <h5 className='text-[#525FE1] font-bold text-lg tracking-widest'
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1200">ABOUT US</h5>

                <h1 className=' text-[37px] w-[450px] font-bold tracking-wider mt-2 max-xl:w-full
                max-[670px]:text-[29px]'
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1200">Knowledge is power, Information is liberating.</h1>

                <p className=' text-gray-500 text-[15px] w-[540px] tracking-wider mt-9  max-[760px]:mt-7 max-xl:w-full'
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1200">
                Online learning has become increasingly popular in recent years, offering a flexible and convenient way for individuals to pursue education.
                </p>

                <h5 className=' text-[19px] tracking-wide mt-9 font-bold'
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1200">People Love To Learn With Us</h5>

                <div className=' flex item-center mt-7 mb-12 max-[760px]:mb-7 w-[90%] max-[760px]:flex-wrap max-[760px]:gap-4'
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1200">
                    <div className=' w-[250px] max-xl:w-full'>
                        <p className=' text-[#f86f03] font-bold text-3xl mb-3'>90%</p>
                        <p className=' text-gray-500 text-[16px] leading-[25px]'>90% of students see their course through to completion.</p>
                    </div>
                    <div className='w-[250px] pl-10 max-xl:w-full max-[760px]:pl-0'>
                        <p className=' text-[#f86f03] font-bold text-3xl mb-3'>9/10</p>
                        <p className=' text-gray-500 text-[16px] leading-[25px]'>9/10 users reported better learning outcomes.</p>
                    </div>
                </div>

                <div className=' pb-10 'data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" >
                    <Link to={'/aboutUs'}>
                    <button className=" hover:bg-[#231F40] duration-300 flex justify-center items-center gap-2 py-[18px] px-[31px] bg-[#525FE1] text-white tracking-wider rounded">
                    <span className=" text-base font-semibold">Learn More</span>
                    <span className="flex items-center font-bold">
                        <AiOutlineArrowRight className="ml-1" />
                    </span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Knowledge