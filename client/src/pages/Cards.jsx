import {CardHeader,Card,CardAction,CardContent,CardFooter,CardDescription,CardTitle} from '../components/ui/card'
import Samplecards from './samplecard'
export default function Cards() {
    return(
       <div className="flex overflow-x-auto min-w-2xl scroll-auto ">
        <Samplecards/>
        <Samplecards/>
        <Samplecards/>
        <Samplecards/>
        <Samplecards/><Samplecards/><Samplecards/><Samplecards/><Samplecards/><Samplecards/><Samplecards/>
        <Samplecards/>
        <Samplecards/>

       </div>
    )
};
