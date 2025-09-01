import { useState } from "react"

export default function Profile() {
    const [profile,setProfile]=useState(false)
   return(
   <div className="">

    {profile ?<div>
        <div className="p-4 font-bold text-4xl min-h-screen place-content-center ">
        <h1>profile</h1>
        <p className="text-gray-600 font-serif">no profile found ....</p>
        </div>        
        </div>
    : <div>
        <div className= "h-screen text-center p-4 border rounded-2xl m-4 shadow font-bold justify-center w-auto">
            
        <h1 className=" p-4 text-center rounded-2xl">profile image<img src="" alt="" /></h1>
        <h1 className="items-center ">profle name:</h1>
        <p>email</p>
        <div className="flex text-center gap-4 justify-center py-5">

        <p className="bg-red-600 text-white text-xl px-4 rounded">logout</p>
        <p className="bg-gray-700 text-white text-xl px-4 rounded">update profile</p>
        </div>
        </div>
        </div>}
    
    </div>)
    
};
