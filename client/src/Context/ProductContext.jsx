import {  createContext, useState,useEffect } from "react"
import { burgerRecipes,saladRecipes,pizzaRecipes,drinkRecipes } from "../assets/data/products";
import {user} from '../assets/data/user'
export const ProductContext = createContext();
export const   ProductProvider=({children})=> {
        const [recipes,setRecipes]=useState([])
    const [favorites,setfavorites]=useState([]) 
    const [caches,setCaches]=useState([]) 
        const MartData=[...pizzaRecipes,...saladRecipes,...burgerRecipes,...drinkRecipes]
    const Provider={MartData,favorites,setCaches,setfavorites,caches};
 useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          'https://dummyjson.com/recipes'
        );
        const random =await fetch(
            "https://dummyjson.com/recipes?limit=10&skip=10&select=name,image"
        )
        const ran =await random.json();
        setCaches(ran.recipes||[])
        const data = await response.json();
        setRecipes(data.recipes|| []); // set empty array if no meals
      } catch (err) {

        console.error(err);
      } 
    };

    fetchRecipes()
},[]);
    return(
        <ProductContext.Provider value={{Provider,user,recipes}}>
            {children}  
        </ProductContext.Provider>

    )
    
};
