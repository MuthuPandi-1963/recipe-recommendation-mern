import { Button } from '@/components/ui/button'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../Context/ProductContext'

export default function Home() {
  const navigate = useNavigate()
  const HandleOnClick = () => {
    navigate('/auth')
  }

  const { front } = useContext(ProductContext)

  return (
    <div
      className='w-full h-screen min-h-screen p-12 grid gap-2 bg-center bg-cover bg-fixed'
      style={{ backgroundImage: `url(${front})` }}
    >
      <div className='content-center justify-start grid'>
        <h1 className='text-4xl font-bold grid'>
          <span>Welcome</span> to RecipeRec
        </h1>
        <p className='text-gray-600 items-center text-lg grid md:flex md:gap-6'>
          Explore the Recipe with sweetie, spicy and worldwide
          <Button className='w-fit my-2' onClick={HandleOnClick}>
            Log In
          </Button>
        </p>
      </div>
    </div>
  )
}
