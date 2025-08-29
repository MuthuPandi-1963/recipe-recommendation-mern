import React from 'react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate =useNavigate()
  const HandleOnClick =()=>{
    navigate('/auth')}
  return (
    <div className='w-full min-h-screen grid place-content-center  gap-2'>
      <h1 className='text-4xl font-bold grid '><span>Welcome</span> to RecipeRec</h1>
      <p className='text-gray-500 text-lg grid md:flex md:gap-6 '>Explore the Recipe with sweetie ,spicy and worldwide <Button className="w-fit my-2" onClick={HandleOnClick}>Log In</Button></p>
    </div>
  )
}
