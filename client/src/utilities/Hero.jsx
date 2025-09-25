import {Button} from '../components/ui/button'
export default function Hero() {
    return(
        <div className="dark p-4 rounded-2xl  bg-white">
            <h1 className="text-2xl w-fit ">happy to announce </h1>
            <p className="text-gray-700 font-semibold w-3/4 text-wrap text-2xl ">log in with greate deals and offer to <span className='text-sm'>RecipeRec
                </span> 
                </p>
                <Button className='items-end w-full'>Explore More</Button>
        </div>
    )
    
};
