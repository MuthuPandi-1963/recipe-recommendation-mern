import {ProductContext} from '../Context/ProductContext'
import { useContext } from 'react'
export default function Favorite() {
    const {Provider}=useContext(ProductContext)
    return(
        // <div className="p-4 font-bold text-4xl min-h-screen place-content-center ">
        // <h1>favorites</h1>
        // <p className="text-gray-600 font-serif">no favorite ur list ....</p>
        // </div>
        <div className="">

        {Provider.MartData.filter((item=>item.id===Provider.favorites)).map((item,index)=>{
            <div className="" key={index}>
                <h1>{item.name}</h1>
            </div>

        })
        }
     
        </div>
    )
};
