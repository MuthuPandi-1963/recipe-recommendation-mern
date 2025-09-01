import {  createContext, useState } from "react"
import { burgerRecipes,saladRecipes,pizzaRecipes,drinkRecipes } from "../assets/data/products";

export const ProductContext = createContext();
export const   ProductProvider=({children})=> {
    const [favorites,setfavorites]=useState() 
    const [caches,setCaches]=useState() 
    const [product,setProduct]=useState() 
    const MartData=[...pizzaRecipes,...saladRecipes,...burgerRecipes,...drinkRecipes]
    const Provider={MartData,favorites,setCaches,setProduct,setfavorites,product,caches};

    return(
        <ProductContext.Provider value={{Provider}}>
            {children}
        </ProductContext.Provider>

    )
    
};
