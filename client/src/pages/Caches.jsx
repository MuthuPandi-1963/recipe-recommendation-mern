import {
  CardHeader,
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardDescription,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { useState, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

export default function Samplecards() {
  const [liked, setLiked] = useState([]);
  const [cardselect, setCardselect] = useState([]);
  const navigate = useNavigate();

  const { caches, favorites, setFavorites} = useContext(ProductContext);

  const handleOnClick = (id) => {
    navigate('/recipes/'+id); 
  };

  const liking = (id) => {
    setLiked((prev) =>
      prev.includes(id)
        ? prev.filter((pid) => pid !== id)
        : [...prev, id]
    );

    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((pid) => pid !== id)
        : [...prev, id]
    );

    setCardselect(id);
  };
  console.log(cardselect,favorites,liked)

  return (
    <div className="grid grid-cols-4 gap-5 my-4 flex-wrap">
      {caches && caches.length > 0 ? (
        caches.map((card) => (
          <Card key={card.id} className="p-4 min-w-2xs relative">
            <CardHeader className="font-serif">
              <CardTitle>{card.name}</CardTitle>
            </CardHeader>

            <CardContent className="items-center">
              <img
                src={card.image}
                alt={card.name}
                className="rounded-lg w-full h-auto"
              />
            </CardContent>

            <CardFooter className="gap-2 grid">
              <CardAction>
                <div className="absolute top-2 right-2">
                  {liked.includes(card.id) ? (
                    <FcLike
                      size={24}
                      onClick={() => liking(card.id)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <AiOutlineHeart
                      size={24}
                      onClick={() => liking(card.id)}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </CardAction>

              <Button onClick={() => handleOnClick(card.id)}>View Desc</Button>

              <Button
                className="bg-gray-700 py-0"
                onClick={() => liking(card.id)}
              >
                Favorite
              </Button>
            </CardFooter>
          </Card>
        ))
      ) : (
        <p>No cards available</p>
      )}
    </div>
  );
}

