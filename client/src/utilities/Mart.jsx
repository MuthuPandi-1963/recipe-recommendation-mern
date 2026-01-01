import { CardHeader, Card, CardAction, CardContent, CardFooter, CardDescription, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { useState, useContext } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc'
import { data, useNavigate } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';
export default function Mart() {
    const [cardselects, setCardselects] = useState()
    const [liked, Setliked] = useState([])
    const { recipes,isfavorites,searchResults} = useContext(ProductContext)
    const navigate = useNavigate();
    const HandleOnclik = (id) => {
        navigate('/recipes/'+id)
    }
    const liking = (id) => {
        Setliked((prev)=>prev.includes(id)?prev.filter((pid)=>(pid !==id)):[...prev,id])
        setCardselects(id)
      const {setfavorites}=  Provider
      setfavorites((prev)=>prev.includes(id)?prev.filter((pid)=>(pid !==id)):[...prev,id])
    }
    const fitteredrecipes=recipes.filter((recipe)=>recipe.name===searchResults)
    return (
        <div>
      
     <h1 className="font-bold text-3xl py-4">
            </h1>
        <div className="grid p-4 sm:grid-cols-3 gap-4 w-auto lg:grid-cols-5 ">
                {recipes.map((card) => {
                    return (
                        <Card key={card.id} className=' m-2 relative' >
                            <CardHeader >
                                <CardTitle> {card.name}
                                </CardTitle>
                                <CardDescription className='gap-2'>{card.ingredients.map((ing) => {
                                    <li key={ing.id}>{ing}</li>
                                })}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[90%]">   
                                    <img src={card.image} alt="photo" className='bg-background h-70 rounded overflow-hidden' />
                                </div>
                                <CardDescription>
                                <h6><span>rating :</span>{card.rating}  </h6>
                                <h1><span>defficulty:</span>{card.difficulty}</h1>
                                <h1><span>meal types:</span>{card.mealType}</h1>
                                </CardDescription>
                            </CardContent>
                            <CardFooter className='gap-2 my-2 grid'>
                                <CardAction>
                                      <div className='absolute top-2 right-2 '>
                                      {liked.includes(card.id)? (<FcLike size={24} onClick={() => { liking(card.id) }} />) : (
                                          <AiOutlineHeart
                                          size={24}
                                          onClick={() => liking(card.id)}
                                          className="cursor-pointer"
                                          />
                                        )}
                                        </div>
                                </CardAction>
                                <CardAction className='gap-2 grid'>
                                    <Button onClick={() => { HandleOnclik(card.id) }}>view desc</Button>
                                    <Button className='bg-gray-700 ' onClick={() => { liking(card.id) }}>
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
