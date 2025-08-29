import {Outlet} from "react-router-dom";

export default function Product() {
    return(
        <div className="flex gap-4 overflow-x-hidden p-4">
        <div className="shadow-2xl  rounded-xl p-4 ">
        <Outlet/>
        </div>
        </div>
    )
    
};
