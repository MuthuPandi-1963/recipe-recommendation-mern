import {ProductContext} from '../Context/ProductContext'
import { useContext } from 'react'
export default function Favorite() {
    const {Provider}=useContext(ProductContext)
    console.log(Provider);
    
    return(
        <>
    
        </>
        )
};
