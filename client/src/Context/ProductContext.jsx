import {  createContext, useState } from "react"
import { burgerRecipes,saladRecipes,pizzaRecipes,drinkRecipes } from "../assets/data/products";
import {user} from '../assets/data/user'
export const ProductContext = createContext();
export const   ProductProvider=({children})=> {
    const [favorites,setfavorites]=useState([]) 
    const [caches,setCaches]=useState() 
        const MartData=[...pizzaRecipes,...saladRecipes,...burgerRecipes,...drinkRecipes]
    const Provider={MartData,favorites,setCaches,setfavorites,caches};

    return(
        <ProductContext.Provider value={{Provider,user}}>
            {children}  
        </ProductContext.Provider>

    )
    
};
