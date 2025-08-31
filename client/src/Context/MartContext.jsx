import { createContext } from "react";
import { burgerRecipes,saladRecipes,pizzaRecipes,drinkRecipes } from "../assets/data/products";
export const MartContext = createContext({
    MartData:[]});

export const  MartProvider=({children})=> {
    const MartData=[...pizzaRecipes,...saladRecipes,...burgerRecipes,...drinkRecipes]
    return(
        <MartContext.Provider value={{MartData}}>
            {children}
        </MartContext.Provider>
    )
};
