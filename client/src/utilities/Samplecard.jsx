import {CardHeader,Card,CardAction,CardContent,CardFooter,CardDescription,CardTitle} from '../components/ui/card'
import {Button} from '../components/ui/button'
import {  useNavigate } from 'react-router-dom';
import {FcLike} from 'react-icons/fc'
import { useState ,useContext} from 'react';
import { ProductContext } from '../Context/ProductContext';
export default function Samplecards() {
    const [like,Setlike]=useState(false)
    const navigate =useNavigate();
    const value =useContext(ProductContext)
    const HandleOnclik=()=>{
            navigate('recipe:id')
    }
    console.log();
    
    
    const liking=()=>{
            Setlike(!like)
    }
    return(
        <div className=" flex   gap-5 my-4">
         {value.Provider.map((card)=>{
            return(
             <Card className='p-4 m-2 relative ' >
            <CardTitle className='text-gray-600 font-semibold text-lg'>{card.name}</CardTitle>
            <CardHeader className='text-start p-0 font-bold min-h-fit text-2xl'>{card.category}</CardHeader>
            <CardAction>
                {like&&<div className='absolute top-2 right-2 '>
                    <FcLike size={24} onClick={()=>{Setlike(false)}}/>
                    </div>}             
            </CardAction>
                <CardContent>{card.tags}</CardContent>
                <CardDescription>{card.ingredients}</CardDescription>
            <CardFooter className=' gap-2 grid '>
            <CardContent>{card.rating}</CardContent>
                <h1>{card.price}</h1>
                <Button onClick={HandleOnclik}>view desc</Button>
                  <Button className='bg-gray-700 py-0 ' onClick={liking}>
                    favorite
                    </Button>
            </CardFooter>

        </Card>);
        })}   
       
        </div>
    )
};