import {CardHeader,Card,CardAction,CardContent,CardFooter,CardDescription,CardTitle} from '../components/ui/card'
import { Button } from '../components/ui/button'
import { useState, useContext } from 'react';
import { FcLike } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import {MartContext} from '../Context/MartContext'
export default function Mart() {
    const [cardselect, setCardselect] = useState()
    const  {MartData} =useContext(MartContext)
    console.log(MartData[0]);
      const [like, Setlike] = useState(false)
    const navigate = useNavigate();
    const HandleOnclik = () => {
        navigate('recipe:id')
    }
    console.log();
    const liking = (id) => {
        Setlike(!like)
        setCardselect(id)

    }
    return(
        <div>
             <h1 className="font-bold text-3xl py-4">
            Explore More
            </h1>
            <div className="grid p-4 sm:grid-cols-3 gap-4 w-auto lg:grid-cols-5 ">
                        {MartData.map((card) => {
                            return (
                                <Card key={card.productId} className='p-4 m-2 relative' >
                                    <CardHeader >
                                        <CardTitle> {card.name}
                                        </CardTitle>
                                        <CardDescription className='gap-2'>{card.ingredients.map((ingredient) => {
                                            <li key={ingredient.id} >{ingredient.map}</li>
                                        })}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <img src={card.imageUrl} alt="photo" />
                                      <h6><span>rating :</span>{card.rating}  </h6>  
                                        <h1><span>price :</span>{card.price}</h1>
                                    </CardContent>
                                    <CardFooter className='gap-2 grid'>
                                        <CardAction>
                                            {cardselect===card.productId ? <div className='absolute top-2 right-2 '>
                                                {like && <FcLike size={24} onClick={() => { Setlike(false) }} />}
                                            </div> : <div></div>}
                                        </CardAction>
                                        <CardAction className='gap-2 grid'>
                                        <Button onClick={HandleOnclik}>view desc</Button>
                                        <Button className='bg-gray-700 ' onClick={() => { liking(card.productId) }}>
                                            favorite
                                        </Button>
                                        </CardAction>
                                    </CardFooter>
            
                                </Card>);
                        })}
        </div>
    </div>
    )
};
