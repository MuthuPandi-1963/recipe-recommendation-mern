import {  useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"


export default function Error(params) {
  const navigate = useNavigate()

    return(
        <>
        <div className="p-12 align-middle justify-center ">

        <h1 className="text-bold text-8xl text-red-900">404 Error</h1>
        <p className="text-2xl pt-12 pb-12">return to the website </p>
        <Button onClick={()=>{navigate("/")}}>click</Button>
        </div>
        </>
    )
};
