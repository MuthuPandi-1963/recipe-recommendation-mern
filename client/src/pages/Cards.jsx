import Samplecards from '../utilities/Samplecard'
import Mart from '../utilities/Mart'
export default function Cards() {
    return (
        <div className=''>
            <div className="hidden md:block lg:block">
                <h1 className=' font-bold text-xl py-4'>Recently viewed</h1>
                <div className="grid grid-cols-1 gap-5 overflow-x-auto  border  min-w-full ">
                    <Samplecards />
                </div>
            </div>
            <div className="">
            <Mart />
            </div>
        </div>
    )
};
