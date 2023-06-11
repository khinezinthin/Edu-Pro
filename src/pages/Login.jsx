import React from 'react'

const Login = () => {
  return (
    <div>
        <div className=' bg-[#f0f0f1] h-screen'>
            <div>
                <div>
                    <img src="	https://eduvibe.devsvibe.com/main/wp-admin/images/wordpress-logo.svg?ver=20131107" alt="" />
                </div>

                <div>
                    <form>
                        <label htmlFor="name">Username or Email Address</label>
                        <input id='name' type="text" />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="" />

                        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
                        <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login