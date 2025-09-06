import { CardHeader, Card, CardAction, CardContent, CardFooter, CardDescription, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom';
import { FcLike } from 'react-icons/fc'
import { AiOutlineHeart } from 'react-icons/ai';
import { useState, useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
export default function Samplecards() {
    const [liked, Setliked] = useState([])
    const [cardselect, setCardselect] = useState()
    const [buttons, setButtons] = useState([])
    const navigate = useNavigate();
    const value = useContext(ProductContext)
    const HandleOnclik = (id) => {
        navigate(`/recipe:/${id}`)
    }

    const liking = (id) => {
        Setliked((prev) => prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id])
        value.Provider.setfavorites(liked)
        setCardselect(id)
    }

    console.log(cardselect, liked);
    return (
        <div className=" flex gap-5 my-4">
            {value.Provider.MartData.map((card) => {
                return (
                    <Card key={card.id} className='p-4 min-w-2xs relative ' >
                        <CardHeader className='font-serif'>
                            <CardTitle> {card.name}
                            </CardTitle>
                            <CardDescription className='gap-2'>{card.ingredients.map((ingredient) => (
                                <li key={ingredient.id} >{ingredient}</li>
                            ))}</CardDescription>
                        </CardHeader>
                        <CardContent className=' items-center '>
                            <img src={card.imageUrl} alt="" className='rounded-lg h-3/5 w-3/4' />

                            <CardDescription>
                                <div className="my-4">
                                    <h6><span>rating :</span>{card.rating}  </h6>
                                    <h1><span>price :</span>{card.price}</h1>
                                    <h1 className='gap-2.5'>{card.tags}</h1>
                                </div>
                            </CardDescription>
                        </CardContent>
                        <CardFooter className='gap-2 grid'>
                            <CardAction>
                                <div className='absolute top-2 right-2 '>
                                    {liked.includes(card.productId)? (<FcLike size={24} onClick={() => { liking(card.productId) }} />) : (
                                        <AiOutlineHeart
                                            size={24}
                                            onClick={() => toggleLike(card.productId)}
                                            className="cursor-pointer"
                                        />
                                    )}
                                </div>
                            </CardAction>
                            <Button onClick={() => { HandleOnclik(card.productId) }}>view desc</Button>

                            <Button className='bg-gray-700 py-0 ' onClick={() => { liking(card.productId) }}>
                                favorite
                            </Button>
                        </CardFooter>

                    </Card>);
            })}

        </div>
    )
};