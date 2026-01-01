import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
export default function Description() {
    const [describe,setDescribe]=useState([])
    const {id}=useParams()
    useEffect(()=>{
      const fetchbyId=async()=>{
        try {
            const response =await fetch(`https://dummyjson.com/recipes/${id}`)
            const data=await response.json()
            setDescribe(data || [])
        } catch (error) {
            console.error(error ||"some went wrong at decription page")
        }

        }
    fetchbyId()
    }
   , [])
   console.log(describe)
   
    return(
        <div>
            <h1>{describe.name}</h1>
            <p>{describe.instructions}</p>
            {/* <ol>
               { describe.ingredients.map((ingredients)=>{
                <div className="" key={ingredients.id}>

                <li>{ingredients}</li>
                </div>
               })}</ol> */}


            
        </div>
    )
};
