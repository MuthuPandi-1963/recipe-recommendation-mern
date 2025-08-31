import { createContext } from "react";
import { burgerRecipes,saladRecipes,pizzaRecipes,drinkRecipes } from "../assets/data/products";
export const MartContext = createContext();

export const  MartProvider=({children})=> {
    const MartData=[...burgerRecipes,...saladRecipes,...pizzaRecipes,...drinkRecipes]
    return(
        <MartContext.Provider value={{MartData}}>
            {children}
        </MartContext.Provider>
    )
};
