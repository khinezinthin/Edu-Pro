import React, {useState} from 'react'
import "./TeamMember.css"
import {RiFacebookFill} from "react-icons/ri"
import {FaTwitter} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const TeamMember = () => {
  return (
    <div className='teamMember-div flex flex-col justify-center items-center py-28 relative overflow-hidden'>

        <div className=' text-center flex flex-col gap-1 ' data-aos="fade-up" data-aos-duration="1200" data-aos-once="true" >
            <h5 className=' text-[#fff] text-[20px] font-bold max-sm:text-[15px] max-[320px]:text-[10px] tracking-widest'>TEAM MEMBER</h5>
            <h1 className=' text-[#fff] text-[40px] font-bold max-sm:text-[30px] max-[320px]:text-[22px] tracking-wider'>Meet Our Instructor</h1>
        </div>

        <div className=' mt-10 flex justify-center items-center gap-8  max-lg:flex-wrap '  data-aos="fade-up" data-aos-duration="1600" data-aos-once="true" data-aos-delay="500" >
            <div className='team-img-card relative duration-300 z-10 max-lg:w-[45%] max-[575px]:w-[95%]' >
                    <img src="	https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-01-2.webp" alt="" className=' rounded w-full' />

                    <div className={`bg-[#fff] w-[100%] py-[25px] px-[30px] rounded absolute bottom-[-20px] transition-all duration-500 left-[32px] opacity-0 max-[720px]:w-[90%] max-[575px]:w-[94%] team-shadow`}>
                        <h1 className=' text-gray-700 font-bold tracking-wider text-xl hover:text-[#525FE1] cursor-pointer'>James Carlson</h1>
                        <p className=' text-gray-500 tracking-wide text-sm mt-1 mb-3'>WordPress Expert</p>
                        <div className=' flex items-center gap-3 text-[#525FE1] '>
                            <span className=' font-bold text-[20px] cursor-pointer'>in</span>
                            <div className='flex justify-center items-center gap-5'>
                            <span><RiFacebookFill className="ml-1 text-lg cursor-pointer" /></span>
                            <span><FaTwitter className=' text-lg cursor-pointer'/></span>
                            <span><FaYoutube className=' text-xl cursor-pointer'/></span>
                            </div>
                        </div>
                    </div>
            </div>


            <div className='team-img-card relative duration-300 max-lg:w-[45%] max-[575px]:w-[95%]' >
                <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2.webp" alt="" className=' rounded w-full' />

                <div className={`bg-[#fff] w-[100%] py-[25px] px-[30px] rounded absolute bottom-[-20px] transition-all duration-500   left-[32px] opacity-0 max-[720px]:w-[90%] max-[575px]:w-[94%] team-shadow`}>
                    <h1 className=' text-gray-700 font-bold tracking-wider text-xl hover:text-[#525FE1] cursor-pointer'>Nancy Phipps</h1>
                    <p className=' text-gray-500 tracking-wide text-sm mt-1 mb-3'>Digital Marketer</p>
                    <div className=' flex items-center gap-3 text-[#525FE1] '>
                        <span className=' font-bold text-[20px] cursor-pointer'>in</span>
                        <div className='flex justify-center items-center gap-5'>
                        <span><RiFacebookFill className="ml-1 text-lg cursor-pointer" /></span>
                        <span><FaTwitter className=' text-lg cursor-pointer'/></span>
                        <span><FaYoutube className=' text-xl cursor-pointer'/></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='team-img-card relative duration-300 max-lg:w-[45%] max-[575px]:w-[95%]' >
                <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-03-2.webp" alt="" className=' rounded w-full ' />

                <div className={`bg-[#fff] w-[100%] py-[25px] px-[30px] rounded absolute bottom-[-20px] transition-all duration-500   left-[32px] opacity-0 max-[720px]:w-[90%] max-[575px]:w-[94%] team-shadow`}>
                    <h1 className=' text-gray-700 font-bold tracking-wider text-xl hover:text-[#525FE1] cursor-pointer'>Troy Hall</h1>
                    <p className=' text-gray-500 tracking-wide text-sm mt-1 mb-3'>PHP Expert</p>
                    <div className=' flex items-center gap-3 text-[#525FE1] '>
                        <span className=' font-bold text-[20px] cursor-pointer'>in</span>
                        <div className='flex justify-center items-center gap-5'>
                        <span><RiFacebookFill className="ml-1 text-lg cursor-pointer" /></span>
                        <span><FaTwitter className=' text-lg cursor-pointer'/></span>
                        <span><FaYoutube className=' text-xl cursor-pointer'/></span>
                        </div>
                    </div>
                </div>
            </div>


            <div className='team-img-card relative duration-300 max-lg:w-[45%] max-[575px]:w-[95%] box-border' >
                    <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-06-2.webp" alt="" className=' rounded w-full' />

                    <div className={`bg-[#fff] w-[100%] py-[25px] px-[30px] rounded absolute bottom-[-20px] transition-all duration-500 left-[32px] opacity-0 max-[720px]:w-[90%] max-[575px]:w-[94%] team-shadow`}>
                        <h1 className=' text-gray-700 font-bold tracking-wider text-xl hover:text-[#525FE1] cursor-pointer'>Isabelle Bruner</h1>
                        <p className=' text-gray-500 tracking-wide text-sm mt-1 mb-3'>UI Designer</p>
                        <div className=' flex items-center gap-3 text-[#525FE1] '>
                            <span className=' font-bold text-[20px] cursor-pointer'>in</span>
                            <div className='flex justify-center items-center gap-5'>
                            <span><RiFacebookFill className="ml-1 text-lg cursor-pointer" /></span>
                            <span><FaTwitter className=' text-lg cursor-pointer'/></span>
                            <span><FaYoutube className=' text-xl cursor-pointer'/></span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-03-03-2.png"
        className=' absolute bottom-[140px] left-5 max-xl:hidden'
        alt="" />

        <img src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-02-02-2.png"
        className=' absolute right-6 top-[150px] max-xl:hidden'
        alt="" />
    </div>

    
  )
}

export default TeamMember