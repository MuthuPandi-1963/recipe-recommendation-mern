import {Input} from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { validatePassword,validateUsername,ConformPassword,ValidatorEmailorPhone,ValidateIsEmail,ValidateIsPhone, } from '../utils/Validator'
export default function Login() {
    const [signin,setSignin]=useState(false)
    const [errors,setErrors]=useState({})
      const [formDatas, setFormDatas] = useState({
    username: "",
    password: "",
    authvalue: "",
    cpassword: ""
  });
   
   
    const validateform=()=>{
      const newmessage={}
      setErrors(newmessage)
        const {username,password,authvalue,cpassword}=formDatas
      if(validatePassword(password)){
        newmessage.Password= validatePassword(password)
        return newmessage
            }
      if(validateUsername(username)){
        newmessage.Username=validateUsername(username)
        return newmessage
      }if(ValidatorEmailorPhone(authvalue)){
        newmessage.emailpassword=ValidatorEmailorPhone(authvalue)
        return newmessage


      }if(ConformPassword(password,cpassword)){
        newmessage.cpassword= ConformPassword(cpassword,password)
        return newmessage

      }
      return setErrors(newmessage)
      
    }
  
      const HandleChange=(e)=>{
      setFormDatas((prev)=>({...prev,[e.target.name]:e.target.value}))
      setErrors((prev)=>({...prev,[e.target.name]:''}))
        
      }
      const handleClick=()=>{
        setSignin(prev=>prev?false:true)
    }
    const HandleSubmit =(e)=>{
      e.preventDefault()
      const validateerrors =validateform();
      setErrors(validateerrors)
      if(Object.keys(validateerrors).length>0)return;
        try{
          const data={}
          if(ValidateIsEmail(formDatas.authvalue)){
            data.email=formDatas.authvalue
          }
          if(ValidateIsPhone(formDatas.authvalue)){
            data.phone=formDatas.authvalue
          }
        }
        catch(err){
          setErrors(err)}
       
    }
    console.log(formDatas,errors,)
    
  return (
    <div className='w-full h-full m-auto'>
    <form className="grid p-4 mx-10 min-h-full content-center gap-4" onSubmit={HandleSubmit}>  
      {signin?  <h1 className='font-bold'>Sign Up Page</h1>:<h1 className='text-center font-bold'>Login Page</h1>}
        <div className="form-inputs">
        <Label>Name</Label>
        <Input placeholder="enter a name" name="username" onChange={HandleChange} value={formDatas.username} error={errors?.name}/>
        </div>

        <div className="form-inputs">
        <Label>Email or Phone Number</Label>
        <Input placeholder="enter a email or number" name="authvalue" onChange={HandleChange} value={formDatas.authvalue} error={errors?.authvalue}/>
        </div>

        <div className="form-inputs">
        <Label>Password</Label>
        <Input placeholder="enter a password" name="password" type="password"  onChange={HandleChange} value={formDatas.password} size="md" error={errors?.password}/>
        </div>{
            signin&&<>
            <div className='form-inputs'>
            <Label>Confirm Password</Label>
            <Input placeholder="confirm password" type="password" size="md" name="cpassword" onChange={HandleChange} value={formDatas.cpassword} error={errors?.cpassword}/>
            </div>
            <div className="flex items-center ">
                <Input type="checkbox" className='w-5 mx-5'/>
              <p className='flex-nowrap w-full'>  I agree with terms and condition</p>
            </div>
        </>
            
        }
       {
signin?<Button >SignUp</Button>:<Button >Login</Button>}
        <div className="">
        <div className="">
            <p className='text-center'>or</p>
            {signin?<h6>Already have an account ? </h6>:<h6>Don't have an account ?</h6>} <span className='text-blue-600 underline font-semibold ' onClick={()=>{handleClick()}}>{signin? <h6>Login Account</h6>:<h6>Create Account</h6>
 } </span>
        </div>
         <p className='text-red-600 '>
          { errors.Password}</p>
              </div>
        

     {!signin && <div className="grid  justify-center gap-4 items-center">
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
        </div>}
    </form>
    </div>
  )
}
