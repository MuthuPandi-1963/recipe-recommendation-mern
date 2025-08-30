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
    const liking=()=>{
            Setlike(!like)
    }
    return(
        <div className="relative">

        <Card >
            <CardTitle>{value.name}</CardTitle>
            <CardHeader>chilli soup</CardHeader>
            <CardAction>
                {like&& <div className='absolute top-2 right-2 '>
                    <FcLike size={24} onClick={()=>{Setlike(false)}}/>
                    </div>}
               
            </CardAction>
            <CardFooter className='w-full gap-2 '>
                <Button onClick={HandleOnclik}>view desc</Button>
                  <Button className='bg-gray-700 py-0 ' onClick={liking}>
                    favorite
                    </Button>
            </CardFooter>

        </Card>
       
        </div>
    )
};