import React from 'react'
import { Button } from '@/components/ui/button'
export default function Home() {
  return (
    <div className='w-full min-h-screen grid place-content-center my-2 gap-2'>
      <h1 className='text-4xl font-bold grid '><span>Welcome</span> to RecipeRec</h1>
      <p className='text-gray-500 text-lg grid'>Explore the Recipe with sweetie ,spicy and worldwide <Button className="w-fit">lognin</Button></p>
    </div>
  )
}
