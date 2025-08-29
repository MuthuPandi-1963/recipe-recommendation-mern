import {Input} from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { useState } from 'react'

export default function Login() {
    const [signin,setSignin]=useState(false)
    const handleClick=()=>{
        setSignin(prev=>prev?false:true)
    }
  return (
    <div className='w-full h-full m-auto'>
    <form className="grid p-4 mx-10 min-h-full content-center gap-4">  
      {signin?  <h1 className='font-bold'>Sign Up Page</h1>:<h1 className='text-center font-bold'>Login Page</h1>}
        <div className="form-inputs">
        <Label>Name</Label>
        <Input placeholder="enter a name"/>
        </div>

        <div className="form-inputs">
        <Label>Email or Phone Number</Label>
        <Input placeholder="enter a email or number"/>
        </div>

        <div className="form-inputs">
        <Label>Password</Label>
        <Input placeholder="enter a password" type="password" size="md"/>
        </div>{
            signin&&<>
            <div className='form-inputs'>
            <Label>Confirm Password</Label>
            <Input placeholder="confirm password" type="password" size="md"/>
            </div>
            <div className="flex items-center ">
                <Input type="checkbox" className='w-5 mx-5'/>
              <p className='flex-nowrap w-full'>  I agree with terms and condition</p>
            </div>
        </>
            
        }
       {
signin?<Button>SignUn</Button>:<Button>Login</Button>}
        <div className="">

        <div className="">
            <p className='text-center'>or</p>
            <h2 className='text-nowrap text-center mt-4 font-semibold'>{signin?<h6>Already have an account ? </h6>:<h6>Don't have an account ?</h6>} <span className='text-blue-600 underline font-semibold ' onClick={()=>{handleClick()}}>{signin? <h6>Login Account</h6>:<h6>Create Account</h6>
                }</span></h2>
        </div>
        <div className="grid  justify-center gap-4 items-center">
            <p className='mt-4 text-center font-semibold '>Continue With</p>
            <div className="flex gap-x-4">
                <Button className="bg-white  ring ring-gray-800">
                    {/* <img src="./google.png" className='w-4' alt="" /> */}
                <BsGoogle className='text-orange-600'/>
            </Button>
            <Button className="bg-white  ring ring-gray-800">
                <BsGithub className='text-black'/>
            </Button>
            </div>
        </div>
        </div>

    </form>
    </div>
  )
}
