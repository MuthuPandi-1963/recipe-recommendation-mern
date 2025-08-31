import { CardHeader, Card, CardAction, CardContent, CardFooter, CardDescription, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom';
import { FcLike } from 'react-icons/fc'
import { useState, useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
export default function Samplecards() {
    const [like, Setlike] = useState(false)
    const [cardselect, setCardselect] = useState()
    const navigate = useNavigate();
    const value = useContext(ProductContext)
    const HandleOnclik = () => {
        navigate('recipe:id')
    }
    console.log();
    const liking = (id) => {
        Setlike(!like)
        setCardselect(id)

    }
    return (
        <div className=" flex s   gap-5 my-4">
            {value.Provider.map((card) => {
                return (
                    <Card key={card.id} className='p-4 min-w-2xs relative ' >
                        <CardHeader >
                            <CardTitle> {card.name}
                            </CardTitle>
                            <CardDescription className='gap-2'>{card.ingredients.map((ingredient) => {
                                <li key={ingredient.id} >{ingredient.map}</li>
                            })}</CardDescription>
                        </CardHeader>
                        <CardContent className='flex items-center gap-2 m-2 w-3/4'>
                            <div className="">
                            <h1 className='gap-2.5'>
                                {card.tags}</h1>
                          <h6><span>rating :</span>{card.rating}  </h6>  
                            <h1><span>price :</span>{card.price}</h1>
                            </div>
                            <img src={card.imageUrl} alt="" className='w-1/2 rounded-3xl' />
                        </CardContent>
                        <CardFooter className='gap-2 grid'>
                            <CardAction>
                                {cardselect == card.productId ? <div className='absolute top-2 right-2 '>
                                    {like && <FcLike size={24} onClick={() => { Setlike(false) }} />}
                                </div> : <div></div>}
                            </CardAction>
                            <Button onClick={HandleOnclik}>view desc</Button>
                            <Button className='bg-gray-700 py-0 ' onClick={() => { liking(card.productId) }}>
                                favorite
                            </Button>
                        </CardFooter>

                    </Card>);
            })}

        </div>
    )
};