import {  createContext } from "react"
import { sampleFavorite } from "../assets/data/favorites"
export const ProductContext = createContext();
export const   ProductProvider=({children})=> {
    const Provider=sampleFavorite;
    
    return(
        <ProductContext.Provider value={{Provider}}>
            {children}
        </ProductContext.Provider>

    )
    
};
