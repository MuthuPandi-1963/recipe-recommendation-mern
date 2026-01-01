// ProductContext.jsx
import { createContext, useState, useEffect } from "react";
import { user } from "../assets/data/createuser";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [caches, setCaches] = useState([]);
  const [isfavorites, setIsfavorites] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
const [loginUser,setLoginUser]=useState(false)

  const handleSearch = async (e) => {
    const query = e.target.value;
    if (!query) {
      setSearchResults([]);
      return;
    }
    try {
      const res = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
      const data = await res.json();
      setSearchResults(data.recipes || []);
    } catch (err) {
      console.error('Search error:', err);
    }
  };
  const [front, setFront] = useState("");
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const random = await fetch(
          "https://dummyjson.com/recipes?limit=10&skip=10&select=name,image"
        );
        const frontimage = await fetch(
          "https://dummyjson.com/recipes?limit=10&skip=10&select=image"
        );

        const ran = await random.json();
        setCaches(ran.recipes || [])
        const frontimg = await frontimage.json();
        const imageUrl = frontimg.recipes?.[0]?.image;
        setFront(imageUrl);
        const data = await response.json();
        setRecipes(data.recipes || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecipes();
  }, []);

  const contextValue = { user, recipes, front, caches, favorites, setFavorites,loginUser,setLoginUser,handleSearch,searchResults };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
  