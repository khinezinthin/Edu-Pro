import React from 'react'
import { TextInput, PasswordInput} from '@mantine/core';
import { Checkbox } from '@mantine/core';
import {BsArrowLeft} from "react-icons/bs"
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div>
        <div className='  bg-[#f0f0f1]  '>
            <div className=' flex flex-col justify-center items-center h-screen mx-auto'>
                <div className=' mb-7'>
                    <img src="	https://eduvibe.devsvibe.com/main/wp-admin/images/wordpress-logo.svg?ver=20131107" alt="" className=' w-[90px] max-[450px]:w-[80px]'/>
                </div>

                <div className=''>
                    <form className=' w-[360px] max-[400px]:w-[340px] max-[370px]:w-[300px] max-[320px]:w-[280px] border border-gray-400 p-7 bg-[#fff]'>
                        <TextInput label="Username"  />
                        <br />
                        <TextInput label="Email Address"  />
                        <PasswordInput mt="md" label="Password" />
                        <br />
                            <button className=' py-2 px-5 bg-[#2271b1] rounded text-white text-sm'>
                                Register
                            </button>
                        <p className=' mt-5 text-sm text-gray-600 '>Already have an account ?
                         <Link to='/login'>
                            <span className=' cursor-pointer hover:text-[#6db1e9] hover:border-b-[#6db1e9] text-[#2271b1] ml-2 border-b border-b-blue-500'>
                                Sign In
                            </span>
                         </Link>
                        </p>
                    </form>
                    <div className=' mt-5 flex flex-col gap-2 pl-5'>
                        <Link to='/'>
                            <div className=' flex items-center gap-1 text-sm text-gray-600 hover:text-[#2271b1] cursor-pointer'>
                                <BsArrowLeft/>
                                <p>Go to EduPro</p>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Login