import Samplecards from '../utilities/Samplecard'
import Mart from '../utilities/Mart'
import Search from './search'

export default function Cards(value) {
    
    return (
        <div className=''>
            <div className="hidden md:block lg:block">
                       {/* Search Results */}
                    <Search />
                <h1 className=' font-bold text-xl py-4'>Recently viewed</h1>
                <div className="grid grid-cols-1 gap-5 overflow-x-auto  border  min-w-full ">
                    <Samplecards />
                </div>
            </div>
            <div className="">
            <Mart/>
            </div>
        </div>
    )
};
