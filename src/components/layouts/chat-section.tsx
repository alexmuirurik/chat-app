import { ArrowRight } from 'lucide-react'
import sittingRoom from '../../../public/sitting-room.jpg'

const ChatSection = () => {
    return (
        <div className="bg-[#1a1a1a] p-4 w-9/12 rounded-2xl space-y-3">
            <div className="space-y-2 w-full">
                <img
                    src={sittingRoom}
                    className="max-h-56 w-full rounded-2xl"
                />
            </div>
            <div className="w-full">
                <div className="text-center mt-4">
                    <span className="bg-[#303030] p-2 rounded-2xl">
                        9th Sep 2025
                    </span>
                </div>
                <div className="flex gap-1 mt-4">
                    <ArrowRight />
                    <span >Richard Davidson</span> 
                    <span className='text-neutral-400'>added</span>
                    <span> You</span>
                </div>
                
            </div>
        </div>
    )
}

export default ChatSection
