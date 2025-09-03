import { CardHeader, Card, CardAction, CardContent, CardFooter, CardDescription, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { useState, useContext } from 'react';
import { FcLike } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';
export default function Mart() {
    const [cardselects, setCardselects] = useState(0)
    const [like, Setlike] = useState(false)
    const [favorites, setFavorites] = useState()
    const { Provider } = useContext(ProductContext)
    const navigate = useNavigate();
    const HandleOnclik = (id) => {
        navigate(`recipe:${id}`)
    }
    const liking = (id) => {
        Setlike(like)

        if (like) {
            setFavorites(id)
        }
        setCardselects(id)
    }
    // console.log(cardselects);
    return (
        <div>
            <h1 className="font-bold text-3xl py-4">
                Explore More
            </h1>
            <div className="grid p-4 sm:grid-cols-3 gap-4 w-auto lg:grid-cols-5 ">
                {Provider.MartData.map((card) => {
                    return (
                        <Card key={card.productId} className=' m-2 relative' >
                            <CardHeader >
                                <CardTitle> {card.name}
                                </CardTitle>
                                <CardDescription className='gap-2'>{card.ingredients.map((ingredient) => {
                                    <li key={ingredient.id} >{ingredient.map}</li>
                                })}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[90%]">

                                    <img src={card.imageUrl} alt="photo" className='bg-background h-full rounded' />
                                </div>
                                <h6><span>rating :</span>{card.rating}  </h6>
                                <h1><span>price :</span>{card.price}</h1>
                            </CardContent>
                            <CardFooter className='gap-2 my-2 grid'>
                                <CardAction>
                                    {favorites === cardselects ? <div className='absolute top-2 right-2 '>
                                        {like && <FcLike size={24} onClick={() => { Setlike(false) }} />}
                                    </div> : <div></div>}
                                </CardAction>
                                <CardAction className='gap-2 grid'>
                                    <Button onClick={() => { HandleOnclik(card.productId) }}>view desc</Button>
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
