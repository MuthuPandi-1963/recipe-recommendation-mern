import {CardHeader,Card,CardAction,CardContent,CardFooter,CardDescription,CardTitle} from '../components/ui/card'
import Samplecards from './samplecard'
export default function Cards() {
    return(
        <div>
                <h1 className='font-bold text-xl py-4'>Recently viewed</h1>
       <div className="grid grid-cols-1 gap-5 overflow-x-auto  border  min-w-full ">
        <div className="flex space-x-4 min-w-max">

        <Samplecards/>
        <Samplecards/>
        <Samplecards/>
        <Samplecards/>
        <Samplecards/>
        <Samplecards/>
        <Samplecards/>
        <Samplecards/>
        <Samplecards/>
        <Samplecards/>
        <Samplecards/>
        <Samplecards/>
        <Samplecards/>

        </div>
        </div>
       </div>
    )
};
