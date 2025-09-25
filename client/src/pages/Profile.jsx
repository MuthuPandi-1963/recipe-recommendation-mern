import { useState,useContext } from "react"
import { ProductContext } from '../Context/ProductContext';
import { Button } from "../components/ui/button";
import { Input } from '../components/ui/input'
export default function Profile() {
    const [profile,setProfile]=useState(false)
    const {user}=useContext(ProductContext)
   return(
   <div className="content-end max-h-screen lg:flex lg:items-center">
    {profile?<div>
        <div className="p-4 font-bold text-4xl min-h-screen place-content-center ">
        <h1>profile</h1>
        <p className="text-gray-600 font-serif">no profile found ....</p>
        </div>        
        </div>
    :
     (<div>
     <div className= "  p-4 border rounded-2xl m-4 shadow font-bold justify-center w-auto">
        <h1 className="p-4 text-center w-fit  bg-green-500 rounded-[50%] capitalize hover:bg-blue-700  ">{user.data.name[0]}</h1>
        <div className="">

        <h1 className="items-center ">name: {user.data.name}</h1>
        <p className="text-gray-500 text-sm">email: {user.data.email}</p>
        <p className="text-gray-500">phone: {user.data.phone}</p>
        </div>
        <div className="flex text-center gap-4 justify-center py-5  ">

        <Button className="bg-red-600 hover:bg-red-900">logout</Button>
        <Button className="bg-gray-700">update profile</Button>
        <Button className="bg-blue-700 hover:bg-blue-900">My Products</Button>
        </div>
        </div>
        </div>)}
        <div className="grow-1">
        <h1 className="font-semibold text-2xl text-center">New Products</h1>
            <form action="" className="p-4 border rounded-2xl m-4  shadow font-bold justify-center w-auto">
                <Input placeholder="enter product name" className="mb-2"/>
                <Input type="image" className="mb-2" />
                <Input placeholder="description"  className="mb-2" />
                <Input placeholder="price" type="number"   className="mb-2"/>
                <Button >add</Button>

            </form>

        </div>
    
    </div>
       );
};
